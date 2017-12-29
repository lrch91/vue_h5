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
  /* position: fixed; */
  position: absolute;
	width: 100%;
	height: 100%
	/* overflow-y: auto;
	-webkit-overflow-scrolling: touch */
}
</style>
