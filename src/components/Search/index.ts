import { Component, Vue, Prop } from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component
export default class Search extends Vue {
  @Prop({ default: '请输入搜索关键词' }) readonly placeholder!: string;
}
