<template>
	<div class="oprt_loader" v-show="visible">
		<div class="jh-loading">
			<div class="jh-circle1 jh-circle-ios"></div>
			<div class="jh-circle2 jh-circle-ios"></div>
			<div class="jh-circle3 jh-circle-ios"></div>
			<div class="jh-circle4 jh-circle-ios"></div>
			<div class="jh-circle5 jh-circle-ios"></div>
			<div class="jh-circle6 jh-circle-ios"></div>
			<div class="jh-circle7 jh-circle-ios"></div>
			<div class="jh-circle8 jh-circle-ios"></div>
			<div class="jh-circle9 jh-circle-ios"></div>
			<div class="jh-circle10 jh-circle-ios"></div>
			<div class="jh-circle11 jh-circle-ios"></div>
			<div class="jh-circle12 jh-circle-ios"></div>
		</div>
		<span class="jh-loading-text">
			处理中...
		</span>
	</div>
</template>

<script>
export default {
  data() {
    return {
        visible: false,
    };
  },
  components: {
  },
  computed: {
  }
};
</script>

<style>
.oprt_loader{
	z-index: 10010;
	position: absolute;
	top: calc(50% - 0.4rem);
	left: 2rem;
	width: 3.5rem;
	height: .8rem;
	background-color: rgba(0, 0, 0, 0.7);
	border-radius: 0.2rem;
  }

  .jh-loading-text {
	display: block;
	position: absolute;
	word-wrap:break-word;
	white-space:normal;
	top: .15rem;
	left: 1.3rem;
	height: .5rem;
	width:1.8rem;
	font-size: .34rem;
	color: white;
  }

  .jh-loading {
	position: absolute;
	left: 0.5rem;
	top: .1rem;
	width: .6rem;
	height: .6rem;
  }
  
  .jh-loading .jh-circle-ios {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
  }
  
  .jh-loading .jh-circle-ios:before {
	content: '';
	display: block;
	margin: 5% auto;
	width: 5.5%;
	height: 25%;
	background-color: #999;
	-webkit-animation: jh-circleFadeDelay-ios 1.2s infinite ease-in-out both;
	animation: jh-circleFadeDelay-ios 1.2s infinite ease-in-out both;
  }
  
  .jh-loading .jh-circle2 {
	-webkit-transform: rotate(30deg);
	-ms-transform: rotate(30deg);
	transform: rotate(30deg);
  }
  
  .jh-loading .jh-circle3 {
	-webkit-transform: rotate(60deg);
	-ms-transform: rotate(60deg);
	transform: rotate(60deg);
  }
  
  .jh-loading .jh-circle4 {
	-webkit-transform: rotate(90deg);
	-ms-transform: rotate(90deg);
	transform: rotate(90deg);
  }
  
  .jh-loading .jh-circle5 {
	-webkit-transform: rotate(120deg);
	-ms-transform: rotate(120deg);
	transform: rotate(120deg);
  }
  
  .jh-loading .jh-circle6 {
	-webkit-transform: rotate(150deg);
	-ms-transform: rotate(150deg);
	transform: rotate(150deg);
  }
  
  .jh-loading .jh-circle7 {
	-webkit-transform: rotate(180deg);
	-ms-transform: rotate(180deg);
	transform: rotate(180deg);
  }
  
  .jh-loading .jh-circle8 {
	-webkit-transform: rotate(210deg);
	-ms-transform: rotate(210deg);
	transform: rotate(210deg);
  }
  
  .jh-loading .jh-circle9 {
	-webkit-transform: rotate(240deg);
	-ms-transform: rotate(240deg);
	transform: rotate(240deg);
  }
  
  .jh-loading .jh-circle10 {
	-webkit-transform: rotate(270deg);
	-ms-transform: rotate(270deg);
	transform: rotate(270deg);
  }
  
  .jh-loading .jh-circle11 {
	-webkit-transform: rotate(300deg);
	-ms-transform: rotate(300deg);
	transform: rotate(300deg);
  }
  
  .jh-loading .jh-circle12 {
	-webkit-transform: rotate(330deg);
	-ms-transform: rotate(330deg);
	transform: rotate(330deg);
  }
  
  .jh-loading .jh-circle2:before {
	-webkit-animation-delay: -1.1s;
	animation-delay: -1.1s;
  }
  
  .jh-loading .jh-circle3:before {
	-webkit-animation-delay: -1s;
	animation-delay: -1s;
  }
  
  .jh-loading .jh-circle4:before {
	-webkit-animation-delay: -0.9s;
	animation-delay: -0.9s;
  }
  
  .jh-loading .jh-circle5:before {
	-webkit-animation-delay: -0.8s;
	animation-delay: -0.8s;
  }
  
  .jh-loading .jh-circle6:before {
	-webkit-animation-delay: -0.7s;
	animation-delay: -0.7s;
  }
  
  .jh-loading .jh-circle7:before {
	-webkit-animation-delay: -0.6s;
	animation-delay: -0.6s;
  }
  
  .jh-loading .jh-circle8:before {
	-webkit-animation-delay: -0.5s;
	animation-delay: -0.5s;
  }
  
  .jh-loading .jh-circle9:before {
	-webkit-animation-delay: -0.4s;
	animation-delay: -0.4s;
  }
  
  .jh-loading .jh-circle10:before {
	-webkit-animation-delay: -0.3s;
	animation-delay: -0.3s;
  }
  
  .jh-loading .jh-circle11:before {
	-webkit-animation-delay: -0.2s;
	animation-delay: -0.2s;
  }
  
  .jh-loading .jh-circle12:before {
	-webkit-animation-delay: -0.1s;
	animation-delay: -0.1s;
  }
  
  @-webkit-keyframes jh-circleFadeDelay-ios {
	0%,
	39%,
	100% {
		opacity: .3;
	}
	40% {
		opacity: 1;
	}
  }
  
  @keyframes jh-circleFadeDelay-ios {
	0%,
	39%,
	100% {
		opacity: .3;
	}
	40% {
		opacity: 1;
	}
  }
</style>