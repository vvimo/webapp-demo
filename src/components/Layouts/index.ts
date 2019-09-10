import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component
export default class Layouts extends Vue {
  active = 0;
  layoutType = false;

  @Watch('$route', { immediate: true })
  private changeRouter(route: Route) {
    console.log(route);
    this.layoutType = route.meta.layoutType;
  }
}
