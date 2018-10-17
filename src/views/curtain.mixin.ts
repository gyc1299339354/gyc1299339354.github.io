import {
  Vue,
  Component,
  Watch
} from 'vue-property-decorator'

@Component
export class CurtainMixin extends Vue {

  protected async goSomewhere(path: string = '') {
    await this.closeCurtain()
    this.$router.push(path)
  }

  protected curtainFactory(action: 'open' | 'close') {
    return (resolve: (value ? : {} | PromiseLike < {} > | undefined) => void) => {
      const pannelDom = document.getElementById('app')
      if (!pannelDom) return

      const curtainDom = document.createElement('div')
      const classList = curtainDom.classList

      const animationendFn = () => {
        pannelDom.removeEventListener('animationend', animationendFn)

        // classList.remove(action)
        // classList.remove('curtain')

        pannelDom.removeChild(curtainDom)

        resolve()
      }

      pannelDom.addEventListener('animationend', animationendFn)

      classList.add('curtain')
      classList.add(action)

      pannelDom.append(curtainDom)
    }
  }

  protected openCurtain() {
    return new Promise(this.curtainFactory('open'))
  }

  protected closeCurtain() {
    return new Promise(this.curtainFactory('close'))
  }

  protected async mounted() {
    await this.openCurtain()
  }

}
