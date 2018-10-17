import {
  Component,
  Mixins
} from 'vue-property-decorator'
import {
  CurtainMixin
} from '@/views/curtain.mixin'

type Companys = 'egoonet' | 'dada' | 'hanlan'

@Component
export class HomeView extends Mixins(CurtainMixin) {
  public goCompany(companyStr: Companys) {
    this.goSomewhere(`/company/${companyStr}`)
  }
}
