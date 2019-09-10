import { Component, Vue, Prop } from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component
export default class Button extends Vue {
  @Prop({ type: Number, default: 12 }) readonly size!: number;
  @Prop(String) readonly name!: string;
}
