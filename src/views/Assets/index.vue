<template>
  <div class="vm-assets">
    <div></div>
    <van-grid :column-num="5">
      <van-grid-item
        v-for="value in 10"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
    <van-notice-bar
      text="通知内容"
      left-icon="volume-o"
      color="#666"
      background="transparent"
    />
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style src="./index.less" lang="less" rel="stylesheet/less" scoped></style>
