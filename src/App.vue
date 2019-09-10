<template>
  <vm-layouts id="app"></vm-layouts>
</template>

<script>
import VmLayouts from '@/components/Layouts/index.vue';

export default {
  name: 'app',
  components: { VmLayouts },
};
</script>

<style lang="less"  rel="stylesheet/less">
@import '~@/theme/index.less';
</style>
