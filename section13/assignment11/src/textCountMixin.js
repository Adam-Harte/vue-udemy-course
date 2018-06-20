export const textCountMixin = {
   data () {
      return {
          mixinText: 'My name is Adam'
      }
  },
  computed: {
      mixinTextCount () {
          return this.mixinText + " (" + this.mixinText.length + ")";
      }
  }
}