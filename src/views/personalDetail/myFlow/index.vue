<template>
  <div class="tiny-container">
    <h3 class="page-title">我的流程</h3>
    <!-- 功能模块 -->
    <el-form class="search-form"
      :inline="true"
      size="mini">
      <!-- 流程名赛选 -->
      <el-form-item :label="this.$t('myFlow.flowName')"
        prop="name">
        <el-input v-model="flowName"
          :placeholder="this.$t('myFlow.flowName')"
          clearable></el-input>
      </el-form-item>
      <!-- 查询按钮 -->
      <el-form-item label="">
        <el-button @click="query()"
          type="primary"
          icon="el-icon-search">{{this.$t('table.query')}}</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格展示模块 -->
    <egrid v-loading.body="listLoading"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      :column-type="['index']"
      :column-key-map="{ label: 'name' }"
      :columns-handler="columnsHandler"
      :data="list"
      :columns="columns">
    </egrid>
    <!-- 表格分页 -->
    <el-pagination v-if="total !== 0"
      class="tiny-pagination"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      background
      layout="total, prev, sizes, pager, next, jumper"
      :total="total"
      :page-size="pageSize"
      :page-sizes="[10, 20, 40]"
      :current-page="currentPage">
    </el-pagination>
    <el-dialog title="流程日志"
      top="10vh"
      :visible.sync="visibleEmShow"
      width="80%">
      <egrid v-loading.body="visibleEmShow"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
        :column-type="['index']"
        :column-key-map="{ label: 'name' }"
        :data="logList"
        :columns="logColumns">
      </egrid>
      <div slot="footer"
        class="dialog-footer">
        <el-button size="small"
          @click="visibleEmShow = false"
          type="primary">{{this.$t('table.confirm')}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import tableForm from '@/components/TableForm/EmployeeInfo/tableForm';
import columnTowards from '@/views/workCenter/employeeInfo/_components/columnTowards';
import personDetailsApi from '@/api/personDetails';
import store from '@/store';
export default {
  name: 'productDetails',
  components: {
    tableForm
  },
  data() {
    return {
      listLoading: false, // 加载动画开关
      total: 0, // 返回的表格数据总条数
      list: [], // 表格数据
      currentPage: 1, // 当前页码
      pageSize: 10, // 页面大小
      flowName: '', // 流程名查询
      logList: [],
      visibleEmShow: false
    };
  },
  computed: {
    columns() {
      return [
        {
          name: '单据号',
          align: 'center',
          prop: 'formId',
          width: 200
        },
        {
          name: '标题',
          align: 'center',
          prop: 'formTitle'
        },
        {
          name: '申请人',
          align: 'center',
          prop: 'employeeName'
        },
        {
          name: '当前步骤',
          align: 'center',
          prop: 'currentStep'
        },
        {
          name: '当前办理人岗位',
          align: 'center',
          prop: 'postName'
        },
        {
          name: '申请时间',
          align: 'center',
          prop: 'requestDate'
        },
        {
          name: '流程名称',
          align: 'center',
          prop: 'flowName'
        }
      ];
    },
    logColumns() {
      return [
        {
          name: '办理环节',
          align: 'center',
          prop: 'temp'
        },
        {
          name: '办理人',
          align: 'center',
          prop: 'name'
        },
        {
          name: '办理意见',
          align: 'center',
          prop: 'idea'
        },
        {
          name: '办理时间',
          align: 'center',
          prop: 'date'
        }
      ];
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 查询表格信息
      this.listLoading = true;
      const data = {
        employeeId: store.getters.authId,
        flowName: this.flowName,
        pageNo: (this.currentPage - 1) * this.pageSize,
        pageSize: this.pageSize
      };
      personDetailsApi
        .myFlow(data)
        .then(res => {
          this.total = res.robj.total;
          this.list = res.robj.items;
          this.listLoading = false;
        })
        .catch(res => {
          this.$message.error('数据请求失败!');
          this.listLoading = false;
        });
    },
    query() {
      this.currentPage = 1;
      this.init();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.init();
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.init();
    },
    // 更新员工信息
    update(row) {
      this.getLogList(row);
      this.visibleEmShow = true;
    },
    // 右侧功能栏
    columnsHandler(cols) {
      const that = this;
      return cols.concat({
        width: 80,
        fixed: 'right',
        label: '日志',
        align: 'center',
        component: columnTowards,
        // listeners 可用于监听自定义组件内部 $emit 出的事件
        listeners: {
          'get-table'(row) {
            that.update(row);
          }
        }
      });
    },
    getLogList(row) {
      const data = {
        formId: row.formId
      };
      personDetailsApi
        .myFlowLog(data)
        .then(res => {
          this.logList = res.robj.items;
        })
        .catch(res => {
          this.$message.error('数据请求失败!');
        });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>