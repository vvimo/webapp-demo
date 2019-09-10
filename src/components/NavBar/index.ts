import { Component, Vue, Prop } from 'vue-property-decorator';
import { Route } from 'vue-router';
import VmButton from '@/components/Button/index.vue';

@Component({
  components: { VmButton },
})
export default class NavBar extends Vue {
  @Prop({ default: false }) readonly leftArrow!: boolean;
  @Prop({ default: false }) readonly rightArrow!: boolean;
  @Prop({ default: '' }) readonly title!: string;
}
