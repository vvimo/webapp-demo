<template>
  <div class="vm-home">
    <div class="vm-home-top">
      <vm-nav-bar :right-arrow="true">
        <vm-search></vm-search>
        <div slot="right">
          <vm-button name="ellipsis" :size="20"></vm-button>
        </div>
      </vm-nav-bar>
      <van-grid :border="false" :square="true" :gutter="20" :column-num="4">
        <van-grid-item
          v-for="value in 4"
          :key="value"
          icon="photo-o"
          text="文字"
        />
      </van-grid>
    </div>
    <van-grid :border="false" :square="true" :column-num="5">
      <van-grid-item
        v-for="(item, index) in reversedMenu"
        :key="index"
        :icon="item.icon"
        :text="item.name"
      />
      <van-grid-item
        icon="photo-o"
        text="全部"
      />
    </van-grid>
    <van-notice-bar
      text="通知内容"
      left-icon="volume-o"
      color="#666"
      background="transparent"
    />
    <van-skeleton title avatar :row="3" />
    <van-swipe :autoplay="3000" :show-indicators="false">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<!-- scoped -->
<style src="./index.less" lang="less" rel="stylesheet/less"></style>
