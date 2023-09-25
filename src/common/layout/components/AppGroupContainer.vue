<template>
  <div
    :class="{hasTagsView:needTagsView}"
    class="app-main-container"
  >
    <slot />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AppContentContainer',
  props: {
  },
  computed: {
    ...mapState({
      needTagsView: (state) => state.settings.tagsView,
    }),
  },
};
</script>

<style lang="scss" scoped>
.app-main-container {
  position:relative;
  margin: 24px;
  min-height: calc(100vh - 50px - 48px);
  border-radius: 4px;
}
.hasTagsView {
  min-height: calc(100vh - 84px - 48px);
}
</style>
