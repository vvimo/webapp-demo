import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component
export default class My extends Vue {
  active = 0;
  layoutType = false;
}
