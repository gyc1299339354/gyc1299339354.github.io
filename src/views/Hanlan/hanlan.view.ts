import {
  Component,
  Mixins
} from 'vue-property-decorator'

import {
  CurtainMixin
} from '@/views/curtain.mixin'

@Component
export class HanlanView extends Mixins(CurtainMixin) {
  async mounted() {}
}
