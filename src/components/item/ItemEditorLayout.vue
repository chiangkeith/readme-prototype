<template>
  <div class="item-editor">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ItemEditorLayout',
    methods: {},
    mounted () {},
  }
</script>
<style lang="stylus" scoped>
  .item-editor
    position fixed
    left 0
    top 0
    height 100vh
    width 100vw
    background-color rgba(0,0,0,0.65)
    z-index 9998
    display flex
    justify-content center
    align-items center
    .panel
      overflow hidden
      // max-height 90%
      height 90%
      width 75%
      // min-width 400px
      background-color rgba(250,250,250,0.9)
      box-shadow 0px 0px 10px rgba(250,250,250,0.8)
      border-radius 2px
      padding 30px 50px 70px
      position relative
      &__content
        overflow auto
        height 100%
        // display flex
        // flex-wrap wrap
        // justify-content space-between
        padding-bottom 20px
        border-bottom 1px solid #940606
        &--item
          // width 400px
          display flex
          align-items center
          font-size 1.125rem
          line-height normal
          // margin-right 40px
          margin-bottom 20px
          .title
            margin-right 20px
            height 100%
            width 100px
          .value
            flex 1
      &__actions
        display flex
        justify-content flex-end
        height 30px
        width 100%
        position absolute
        left 0
        bottom 20px
        padding 0 50px
        > div
          // flex 1
          width 100px
          display flex
          justify-content center
          align-items center
          background-color rgba(150,111,0,0.7)
          box-shadow 0px 0px 5px rgba(100,100,100,0.5)
          border-radius 2px
          padding 5px
          cursor pointer
          &:not(:last-child)
            margin-right 10px
          &:hover
            background-color rgba(203,175,94,0.7)
            box-shadow 0px 0px 5px rgba(250,250,250,0.5)      
</style>