<template>
  <div class="vm-body">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item
        replace
        to="/home"
        icon="home-o"
      >
        首页
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/community"
        icon="chat-o"
      >
        社区
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/assets"
        icon="balance-o"
      >
        理财
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/life"
        icon="shop-o"
      >
        生活
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/my"
        icon="user-o"
      >
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style src="./index.less" lang="less" rel="stylesheet/less" scoped></style>
