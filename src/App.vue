<template>
  <div id="app" class="app">
    <NewHeader class="app-header"></NewHeader>
    <NewAside class="app-aside"></NewAside>
    <Alert></Alert>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <SystemInfo></SystemInfo>
  </div>
</template>

<script>
import Alert from 'src/components/Alert.vue'
import NewHeader from 'src/components/new-header/NewHeader.vue'
import NewAside from 'src/components/new-aside/NewAside.vue'
import SystemInfo from 'src/components/SystemInfo.vue'

export default {
  components: {
    Alert,
    NewHeader,
    NewAside,
    SystemInfo,
  },  
}
</script>

<style lang="stylus">
a
  text-decoration none

button
  cursor pointer
  &:disabled
    cursor not-allowed
.view
  // max-width 800px
  min-height calc(100vh - 60px)
  margin 0 auto
  position relative
  // background-color #4a4a4a
  box-shadow 1px 1px 5px rgba(50,50,50,0.5)

// .backstage
//   min-height 100vh
//   max-height 100vh
//   padding-left 20% /* This Padding is for PageAside */
//   background-color #4a4a4a
//   main
//     padding 20px 40px
    
.datepicker__input
  padding-left 10px
  width 100%
  height 35px
  color #808080
  border none

.fade-enter-active, .fade-leave-active
  transition all .2s ease

.fade-enter, .fade-leave-active
  opacity 0


.app
  padding-top 50px
  padding-left 220px
  position relative
  background-color #4a4a4a
  min-height 100vh

  &-header
    position absolute
    left 0
    top 0
    z-index 2
  &-aside
    position absolute
    left 0
    top 0
    z-index 1
</style>
