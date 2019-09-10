<template>
  <div class="vm-community">
    <van-tabs>
      <van-tab v-for="index in 8" :key="index" :title="'标签 ' + index">
        内容 {{ index }}
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style src="./index.less" lang="less" rel="stylesheet/less" scoped></style>
