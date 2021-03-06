import { PROJECT_STATUS, } from 'api/config'
import { PROJECT_PUBLISH_STATUS, } from 'api/config'
import { map, } from 'lodash'

const status_options = map(PROJECT_STATUS, (s, k) => {
  return { name: k, value: s, }
})
const publish_status_options = map(PROJECT_PUBLISH_STATUS, (s, k) => {
  return { name: k, value: s, }
})
export const model = [
  { name: 'id', type: 'TextInput', width: { list: '80', editor: '500' }, isEditable: false, isListable: true, },
  { name: 'title', type: 'TextInput', width: { list: '400', editor: '500' }, isEditable: true, isListable: true, },
  { name: 'ogTitle', type: 'TextInput', width: { list: '400', editor: '500' }, isEditable: true, isListable: false, isHidden: true, },
  { name: 'progress', type: 'TextInput', width: { list: '180', editor: '200' }, isEditable: true, isListable: false, isNumSentitive: true, },
  { name: 'memoPoints', type: 'TextInput', width: { list: '180', editor: '200' }, isEditable: true, isListable: false, isNumSentitive: true, },
  { name: 'slug', type: 'TextInput', width: { list: '110', editor: '400' }, isEditable: true, isListable: true, },
  { name: 'status', type: 'RadioItem', width: { list: '50', editor: '400' }, isEditable: true, isListable: true, options: status_options, },
  { name: 'publishStatus', type: 'RadioItem', width: { list: '80', editor: '400' }, isEditable: true, isListable: true, options: publish_status_options, },
  { name: 'projectOrder', type: 'TextInput', width: { list: '50', editor: '80' }, isEditable: true, isListable: false, isNumSentitive: true, },
  { name: 'updatedAt', type: 'Datetime', width: { list: '180', editor: '200' }, isEditable: false, isListable: true, isDatetimeSentitive: true, },
  { name: 'createdAt', type: 'Datetime', width: { list: '180', editor: '200' }, isEditable: false, isListable: false, isDatetimeSentitive: true, },
  { name: 'publishedAt', type: 'Datetime', width: { list: '180', editor: '200' }, isEditable: true, isListable: false, isDatetimeSentitive: true, },
  { name: 'description', type: 'TextareaInput', width: { list: '180', editor: '200' }, isEditable: true, isListable: false, },
  { name: 'ogDescription', type: 'TextareaInput', width: { list: '180', editor: '200' }, isEditable: false, isListable: false, isHidden: true, },
  { name: 'heroImage', type: 'Image', width: { list: '180', editor: '200' }, isEditable: false, isListable: false, isHidden: true, },
  { name: 'ogImage', type: 'Image', width: { list: '180', editor: '200' }, isEditable: false, isListable: false, isHidden: true, },
  { name: 'updatedBy', type: 'TextInput', width: { list: '180', editor: '200' }, isEditable: false, isListable: false, isHidden: true, },
]
