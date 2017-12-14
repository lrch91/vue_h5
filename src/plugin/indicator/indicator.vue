<template>
	<div class="indicator" v-show="visible">
		<div class="indicator-wrapper">
			<!-- <span class="indicator-spin"> -->
				<div class="spinner-snake"></div>
			<!-- </span> -->
			<span class="indicator-text" style="display: none;"></span>
		</div>
		<div class="indicator-mask"></div>
	</div>
</template>

<script>
export default {
  data() {
    return {
        visible: false
    };
  },
  components: {
  },
  computed: {
  }
};
</script>

<style scoped>
.indicator{
	transition: opacity .2s linear;
}
.indicator-wrapper {
    top: 50%;
    left: 50%;
    position: fixed;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;

    padding: 15px;
}
.indicator-spin {
    display: inline-block;
    text-align: center;
}
.indicator-spin {
    display: inline-block;
    text-align: center;
}
.spinner-snake {
    -webkit-animation: spinner-rotate 0.8s infinite linear;
    animation: spinner-rotate 0.8s infinite linear;
    border: 0.08rem solid transparent;
    border-radius: 50%;

    border-top-color: rgb(204, 204, 204); 
    border-left-color: rgb(204, 204, 204); 
    border-bottom-color: rgb(204, 204, 204); 
    height: 0.8rem; 
    width: 0.8rem;
}
@keyframes spinner-rotate{
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    } 
}

.indicator-text {
    display: block;
    color: #fff;
    text-align: center;
    font-size: .28rem;
}
.indicator-mask {
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: transparent;
}
</style>