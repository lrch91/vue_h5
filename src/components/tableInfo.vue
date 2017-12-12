<template>
  <table border="1" cellspacing="0" class="info_table">
    <tbody v-for="item in tableInfo">
      <tr v-if="item.tableTitle&&item.tableTitle.length>0">
        <th v-for="tt in item.tableTitle[0]">{{tt.titleName}}</th>
      </tr>
      <tr v-for="tb in item.tableBody">
        <td v-for="rb in tb.rowBody">{{rb}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: '',
  data () {
    return {
      tableInfo:[]
    }
  },
  methods:{

  },
  computed:{
    ...mapGetters(['getMain_tableInfo']),
  },
  created(){
		this.tableInfo = this.getMain_tableInfo;
	},
}
</script>

<style scoped>
.info_table{
	text-align: center;
	font-size: 0.34rem;
	width: 20rem;
}

.info_table th{
	width: 3rem;
}
</style>
