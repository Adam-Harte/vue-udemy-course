<template>
   <input
      type="text"
      id="fullName"
      class="form-control"
      :value="value"
      @input="textUpdate">
</template>

<script>
export default {
   methods: {
      textUpdate (e) {
         this.$emit('input', e.target.value)
      }
   },
   props: {
      value: String
   }
}
</script>

<style>

</style>
