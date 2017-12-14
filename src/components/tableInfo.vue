<template>
  <table border="1" cellspacing="0" class="info_table">
    <tbody v-for="table in tableInfo" v-if="table.tablePara.keyColmName==tableName">
      <tr v-if="table.tableTitle&&table.tableTitle.length>0">
        <th v-for="tt in table.tableTitle">{{tt.titleName}}</th>
      </tr>
      <tr v-for="tb in table.tableBody">
        <td v-for="rb in tb.rowBody">{{rb}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      tableInfo:[],
      tableName:'',
    }
  },
  methods:{

  },
  computed:{
    ...mapGetters(['getMain_tableInfo','getMain_tableName']),
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.tableName = vm.getMain_tableName;
      vm.tableInfo = vm.getMain_tableInfo;
      // console.log("getMain_tableName");
      // console.log(JSON.stringify(vm.getMain_tableName));
      // console.log("getMain_tableInfo");
      // console.log(JSON.stringify(vm.getMain_tableInfo));
    })
  },
  beforeRouteLeave (to, from, next) {
	  this.tableName = '';
		next();
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
