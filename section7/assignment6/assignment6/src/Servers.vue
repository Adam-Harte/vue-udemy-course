<template>
    <div class="row">
        <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
                <server v-for="index in 5">
                    {{ index }}
                </server>
            </ul>
        </div>
        <div class="col-xs-12 col-sm-6">
            <p>Server Details are currently not updated</p>
        </div>
    </div>
</template>

<script>
import Server from './Server.vue'

export default {
  components: {
      'server': Server
  }
}
</script>

<style scoped>
    div {
        border: 1px solid red;
    }
</style>
