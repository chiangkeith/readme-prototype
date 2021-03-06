const { filter, find, get, map, } = require('lodash')
const { redisFetching, redisWriting, } = require('../middle/redis')
const config = require('../config')
const debug = require('debug')('READR:api:perms')
const superagent = require('superagent')
const axios = require('axios')

const apiHost = config.API_PROTOCOL + '://' + config.API_HOST + ':' + config.API_PORT

const constructScope = (perms, role) => (
  map(filter(config.SCOPES, (comp) => (
    get(comp, [ 'perm', 'length', ], 0) === filter(comp.perm, (perm) => (
      find(perms, (p) => (
        perm === p.object && p.role === role
      ))
    )).length && (comp.role 
      && typeof(comp.role) === 'object' 
      && comp.role.length > 0
        ? find(comp.role, (r) => (r === role))
        : true)
  )), (p) => (p.comp)) 
)

const fetchPermissions = () => {
  return new Promise((resolve, reject) => {
    debug('About to fetch permissions')
    const url = `/permission/all`
    redisFetching(url, ({ error, data, }) => {
      if (!error && data) {
        debug('Got permissions from Redis secessfully')
        resolve(JSON.parse(data))
      } else {
        debug('About to fetch permissions from api')
        debug(`${apiHost}${url}`)

        axios.get(`${apiHost}${url}`, {
          timeout: config.API_TIMEOUT,
        }).then(res => {
          debug('Got permissions from api sucessfully.')
          resolve(res.data)
        })
        .catch(err => {
          console.log('Fetch permissions in fail...')
          console.log(err)
          reject(err)
        })        
      }
    })
  })
}

const authorize = (req, res, next) => {
  debug('Going to authorize...', req.url)
  const whitelist = get(config.ENDPOINT_SECURE, [ `${req.method}${req.url.replace(/\?[A-Za-z0-9.*+?^=!:${}()#%~&_@\-`|[\]/\\]*$/, '')}`, ])
  if (whitelist) {
    fetchPermissions().then((perms) => {
      Promise.all([
        new Promise((resolve) => (resolve(get(whitelist, [ 'role', ]) ? find(get(whitelist, [ 'role', ]), (r) => (r === req.user.role)) : true))),
        new Promise((resolve) => (resolve(get(whitelist, [ 'perm', ]) ? get(whitelist, [ 'perm', ]).length === filter(get(whitelist, [ 'perm', ]), (p) => (find(filter(perms, { role: req.user.role, }), { object: p, }))).length : true))),
      ]).then((isAuthorized) => {
        const isRoleAuthorized = isAuthorized[ 0 ]
        const isPermsAuthorized = isAuthorized[ 1 ]
        if (isRoleAuthorized && isPermsAuthorized) {
          next()
        } else {
          res.status(403).send('Forbidden. No right to access.').end()
        }
      })
    })

  } else {
    next()
  }
}

module.exports = {
  authorize,
  constructScope,
  fetchPermissions,
}