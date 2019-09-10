<template>
  <div class="vm-search van-hairline--surround">
    <div class="vm-search-cell">
      <div class="vm-search-cell-icon-left">
        <van-icon name="search" :size="16"></van-icon>
      </div>
      <div class="vm-search-cell-value">
        <input class="vm-search-control" type="search" :placeholder="placeholder">
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style src="./index.less" lang="less" rel="stylesheet/less" scoped></style>
