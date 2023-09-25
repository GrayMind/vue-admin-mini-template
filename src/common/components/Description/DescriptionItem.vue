<template>
  <el-col
    :span="span"
    :xs="spanMap.xs"
    :sm="spanMap.sm"
    :md="spanMap.md"
    :lg="spanMap.lg"
    :xl="spanMap.xl"
    class="descriptions-item"
  >
    <div class="descriptions-item-content">
      <div
        class="descriptions-item-label"
        :style="{width: labelWidth + 'px'}"
      >
        {{ label }}：
      </div>
      <div class="descriptions-item-value">
        <slot
          v-if="$slots.content"
          name="content"
        />
        <div
          v-else
          class="default-value"
        >
          {{ value }}
        </div>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'DescriptionItem',
  props: {
    spanMap: {
      type: Object,
      required: false,
      default: () => ({ }),
    },
    span: {
      type: Number,
      required: false,
      default: 6,
    },
    label: {
      required: true,
      type: String,
      default: '',
    },
    labelWidth: {
      require: false,
      type: Number,
      default: 80,
    },
    value: {
      required: false,
      type: String,
      default: '',
    },
  },

};
</script>

<style scoped lang="scss">
  .descriptions-item {
    padding-bottom: 8px;
    padding-right: 20px;
    span {
      display: inline-block;
    }
    .descriptions-item-content {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #333333;
      font-size: 14px;
      line-height: 1.5;
      width: 100%;
      min-height: 40px;
      .descriptions-item-label {
        flex-grow: 0;
        flex-shrink: 0;
        color: #666666;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.5;
      }
      .descriptions-item-value {
        flex-grow: 1;
        // overflow: hidden;
        .default-value{
          word-break: break-all;
        }
      }
    }
  }
</style>
