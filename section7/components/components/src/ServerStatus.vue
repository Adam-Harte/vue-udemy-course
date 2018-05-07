<template>
  <div id="app">
    <p>Server status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      status: 'Critical'
    }
  },
  methods: {
    changeStatus () {
      this.status = 'Normal'
    }
  }
}
</script>

<style>

</style>
