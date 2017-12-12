<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <bottomTab></bottomTab>
  </div>
</template>

<script>
import bottomTab from './components/bottomTab.vue'

export default {
	components: {
		bottomTab
	}
}
</script>
  
<style>
#app {
  position: fixed;
	top: 0.88rem;
	width: 100%;
	height: calc(100% - 0.88rem);
	overflow-y: auto;
	-webkit-overflow-scrolling: touch
}
</style>
