<template>
  <div>
    <template v-if="icon">
      <i
        v-if="icon.includes('el-icon')"
        :class="[icon, 'sub-el-icon']"
      />
      <svg-icon
        v-else
        :icon-class="icon"
      />
    </template>
    <span slot="title">{{ title }}</span>
    <el-tag
      v-if="badge && badgeNumber"
      size="mini"
      type="danger"
      style="vertical-align: baseline; margin-left: 4px;"
    >
      {{ badgeNumber }}
    </el-tag>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MenuItem',
  props: {
    icon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    badge: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapGetters([
      'sidebarBadge',
    ]),
    badgeNumber() {
      return this.sidebarBadge[this.badge] || 0;
    },
  },
};
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
