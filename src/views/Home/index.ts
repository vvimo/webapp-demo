import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
// 组件
import VmNavBar from '@/components/NavBar/index.vue';
import VmSearch from '@/components/Search/index.vue';
import VmButton from '@/components/Button/index.vue';
// 配置
import Config from './config/index';

@Component({
  components: { VmNavBar, VmSearch, VmButton },
})
export default class Home extends Vue {
  isLoading = false;
  images: string[] = ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'];
  menus: IHome.MenuItem[] = Config.menus;
  // 计算属性
  private get reversedMenu(): IHome.MenuItem[] {
    const data: IHome.MenuItem[] = [];
    this.menus.forEach((item: IHome.MenuItem) => {
      if (item.action) {
        data.push(item);
      }
    });
    return data;
  }
  // 生命周期
  created() {
    console.log(1);
  }
  mounted() {
  }
}
