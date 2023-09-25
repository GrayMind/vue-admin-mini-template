<template>
  <div class="app-group-view">
    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >
        <slot
          v-if="$slots.title"
          name="title"
        />
        <span v-else>{{ title }}</span>
      </div>
      <slot />
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'AppGroupView',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>
.app-group-view {
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
  ::v-deep .el-card__header {
    padding: 12px 24px;
  }
  ::v-deep .el-card__body {
    padding: 12px 24px;
  }
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

</style>
