import {
  Component,
  Vue
} from 'vue-property-decorator'

@Component
export class LoadingView extends Vue {
  // type speed 50ms a word
  public typeStrings = [
    'Welcome',
    'I am Neo Geng',
    'Nice to meet you'
    // 'Please give me a little time to load ...',
    // 'Thank you for your patience !'
  ]

  public visible_GoDirectlyBtn = false

  private mounted() {
    const t = setTimeout(() => {
      clearTimeout(t)
      this.visible_GoDirectlyBtn = true
    }, 3000)
  }
}
