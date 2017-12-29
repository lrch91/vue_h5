<template>
	<div class="toast" v-show="visible" :class="{toast_open:visible}">
		<span class="toast_content">{{title}}</span>
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

<style>
.toast{
    max-width:80%;
    z-index:10000;
    top: 90%;
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

.toast_open{
    animation: toastKF .5s;
}

@keyframes toastKF{
    0%   {background: rgba(0, 0, 0, 0.1);top:80%}
    100% {background: rgba(0, 0, 0, 0.7);top:90%}
}

.toast_content{
    display: block;
    font-size: 0.32rem;
    text-align: center;
}

</style>