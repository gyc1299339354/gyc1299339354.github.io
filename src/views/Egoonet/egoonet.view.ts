import {
  Component,
  Mixins
} from 'vue-property-decorator'

import {
  CurtainMixin
} from '@/views/curtain.mixin'

@Component
export class EgoonetView extends Mixins(CurtainMixin) {
  async mounted() {}
}
