<template>
  <div class="vm-navbar">
    <div v-if="leftArrow" class="vm-navbar-left clearfix">
      <slot name="left">
      	<vm-button name="arrow-left" :size="20"></vm-button>
      </slot>
    </div>
    <div v-if="rightArrow" class="vm-navbar-right clearfix">
      <slot name="right">
      	<vm-button name="ellipsis" :size="20"></vm-button>
      </slot>
    </div>
    <div class="vm-navbar-center">
      <slot>
        {{ title }}
      </slot>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style src="./index.less" lang="less" rel="stylesheet/less" scoped></style>
