<template>
  <app-content-container>
    <div class="container">
      <div class="table-extend-container">
        <el-button
          type="primary"
          size="medium"
        >
          刷新
        </el-button>
      </div>
      <!-- 列表数据 -->
      <el-table
        v-loading="isLoading"
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column
          align="center"
          prop="id"
          label="任务编号"
        />
        <el-table-column
          align="center"
          prop="backgroundTaskType"
          label="任务类型"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.backgroundTaskType| taskType }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="backgroundTaskStatus"
          label="任务状态"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.backgroundTaskStatus| taskStatus }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="gmtCreate"
          label="创建时间"
        />
        <el-table-column
          align="center"
          prop="gmtBegin"
          label="开始时间"
        />
        <el-table-column
          align="center"
          prop="gmtEnd"
          label="结束时间"
        />
        <el-table-column
          align="center"
          prop="taskResult"
          label="下载链接"
        >
          <template slot-scope="scope">
            <el-button
              v-if="scope.row.taskResult"
              type="text"
              size="small"
            >
              下载
            </el-button>
            <span v-else>-</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </app-content-container>
</template>

<script>

export default {
  name: 'BackgroundTaskList',
  components: {
  },
  data() {
    return {
      isLoading: false,
      taskType: '',

      tableData: [],
      currentPage: 1,
      totalCount: 10,
    };
  },
  computed: {
  },
  created() {
    this.taskType = this.$route.params.taskType;
    console.log('created', this.taskType)
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>

</style>
