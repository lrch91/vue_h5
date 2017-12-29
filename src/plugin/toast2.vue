<template>
	<div class="toast2" v-show="visible">
		<span class="toast2_content">{{title}}</span>
	</div>
</template>

<script>
export default {
  data() {
    return {
        visible: false,
        title: ""
    };
  },
  components: {
  },
  computed: {
  }
};
</script>

<style scoped>
.toast2{
    max-width:80%;
    z-index:10000;
    top: 60%;
    left: 50%;
    position: fixed;
    transform: translate(-50%, -50%);
    color: white;
    background: rgba(0, 0, 0, 0.7);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    padding: .15rem .3rem .15rem .3rem;
    border-radius: .1rem;
}

.toast2_content{
    display: block;
    font-size: 0.32rem;
    text-align: center;
}

</style>