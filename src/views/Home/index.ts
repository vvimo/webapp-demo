import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import VmNavBar from '@/components/NavBar/index.vue';
import VmSearch from '@/components/Search/index.vue';
import VmButton from '@/components/Button/index.vue';

@Component({
  components: { VmNavBar, VmSearch, VmButton },
})
export default class Home extends Vue {
  isLoading = false;
  images: string[] = ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'];
  created() {
    console.log(1);
  }
}
