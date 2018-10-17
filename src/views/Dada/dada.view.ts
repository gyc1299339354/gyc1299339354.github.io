import {
  Component,
  Mixins
} from 'vue-property-decorator'

import {
  CurtainMixin
} from '@/views/curtain.mixin'

@Component
export class DadaView extends Mixins(CurtainMixin) {
  async mounted() {}
}
