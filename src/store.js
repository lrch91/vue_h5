import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
        main:{
			mainInfo:{}
        },
		bottomTab:{
            bottomType: 0
		},
		tableInfo:{
			tableInfo: [],
			tableName:'',
		},
		choosePersonUnderOrg:{
			orgList:[],
			initLevel:1,
			finalLevel:3,
		}
		
	},
	getters: {
		getBottomTabType: state => {
			/* var ss = window.sessionStorage.getItem("bottomTab")
			if(ss && ss!='' && (!state.bottomTab)){
				state.bottomTab = JSON.parse(ss)
			} */
			return state.bottomTab.bottomType
		},
		getMainInfo: state => {
			/* var ss = window.sessionStorage.getItem("main")
			if(ss && ss!='' && (!state.main)){
				state.main = JSON.parse(ss)
			} */
			return state.main.mainInfo
		},
		getMain_tableInfo: state => {
			/* var ss = window.sessionStorage.getItem("tableInfo")
			if(ss && ss!='' && (!state.tableInfo)){
				state.tableInfo = JSON.parse(ss)
				alert("tableInfo:"+ss)
			} */
			return state.tableInfo.tableInfo
		},
		getMain_tableName: state => {
			/* var ss = window.sessionStorage.getItem("tableInfo")
			if(ss && ss!='' &&(!state.tableInfo)){
				state.tableInfo = JSON.parse(ss)
				alert("tableInfo:"+ss)
			} */
			return state.tableInfo.tableName
		},
		getChoosePersonUnderOrg_orgList: state => {
			/* var ss = window.sessionStorage.getItem("choosePersonUnderOrg")
			if(ss && ss!='' &&(!state.choosePersonUnderOrg)){
				state.choosePersonUnderOrg = JSON.parse(ss)
				alert("choosePersonUnderOrg:"+ss)
			} */
			return state.choosePersonUnderOrg.orgList
		},
		getChoosePersonUnderOrg_initLevel: state => {
			/* var ss = window.sessionStorage.getItem("choosePersonUnderOrg")
			if(ss && ss!='' &&(!state.choosePersonUnderOrg)){
				state.choosePersonUnderOrg = JSON.parse(ss)
				alert("choosePersonUnderOrg:"+ss)
			} */
			return state.choosePersonUnderOrg.initLevel
		},
		getChoosePersonUnderOrg_finalLevel: state => {
			/* var ss = window.sessionStorage.getItem("choosePersonUnderOrg")
			if(ss && ss!='' &&(!state.choosePersonUnderOrg)){
				state.choosePersonUnderOrg = JSON.parse(ss)
				alert("choosePersonUnderOrg:"+ss)
			} */
			return state.choosePersonUnderOrg.finalLevel
		},
	},
	mutations: {
        setMainInfo(state, mainInfo){
			state.main.mainInfo = mainInfo;
			// window.sessionStorage.setItem('main',JSON.stringify(state.main))
        },
        setBottomTabType(state, bottomType){
			state.bottomTab.bottomType = bottomType;
			// window.sessionStorage.setItem('bottomTab',JSON.stringify(state.bottomTab))
        },
        setMain_tableInfo(state, tableInfo){
			state.tableInfo.tableInfo = tableInfo;
			// window.sessionStorage.setItem('tableInfo',JSON.stringify(state.tableInfo))
        },
        setMain_tableName(state, tableName){
			state.tableInfo.tableName = tableName;
			// window.sessionStorage.setItem('tableInfo',JSON.stringify(state.tableInfo))
        },
        setChoosePersonUnderOrg_orgList(state, orgList){
			state.choosePersonUnderOrg.orgList = orgList;
			// window.sessionStorage.setItem('choosePersonUnderOrg',JSON.stringify(state.choosePersonUnderOrg))
        },
        setChoosePersonUnderOrg_initLevel(state, initLevel){
			state.choosePersonUnderOrg.initLevel = initLevel;
			// window.sessionStorage.setItem('choosePersonUnderOrg',JSON.stringify(state.choosePersonUnderOrg))
        },
        setChoosePersonUnderOrg_finalLevel(state, finalLevel){
			state.choosePersonUnderOrg.finalLevel = finalLevel;
			// window.sessionStorage.setItem('choosePersonUnderOrg',JSON.stringify(state.choosePersonUnderOrg))
		},
	},
	actions: {
		/* getSong({commit, state}, hash){
			commit('toggleAudioLoadding', true)
			axios.get(`/bproxy/yy/index.php?r=play/getdata&hash=${hash}`).then(({data}) => {
				data = data.data
				const songUrl = data.play_url
				const imgUrl = data.img
				const title = data.audio_name
				const songLength = data.timelength / 1000
				const singer = data.author_name
				const currentLength = 0;
				const lrc = data.lyrics
				const	audio = {songUrl, imgUrl, title, singer, songLength, currentLength}
				commit('setAudio', audio)
				commit('setLrc', lrc)
				commit('toggleAudioLoadding', false)
			})
		},
		prev({dispatch, state}){
			var list = state.listInfo.songList
			if (state.listInfo.songIndex == 0) {
				state.listInfo.songIndex = list.length
			} else {
				state.listInfo.songIndex--
			}
			var hash = list[state.listInfo.songIndex].hash
			dispatch('getSong', hash)
			dispatch('getLrc', hash)
		},
		next({dispatch, state}){
			var list = state.listInfo.songList
			if (state.listInfo.songIndex == list.length - 1) {
				state.listInfo.songIndex = 0
			} else {
				++state.listInfo.songIndex
			}
			var hash = list[state.listInfo.songIndex].hash
			dispatch('getSong', hash)
			dispatch('getLrc', hash)
		} */
	},
})

export default store
