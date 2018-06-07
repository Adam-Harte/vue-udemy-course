<template>
   <li class="list-group-item" @click="serverSelected">
      Server #{{ server.id}} 
      <h1>Status {{ server.status }}</h1>
   </li>
</template>

<script>
import { eventBus } from '../../main';

export default {
   props: {
      server: Object
   },
   methods: {
      serverSelected () {
         eventBus.$emit('serverSelected', this.server)
      }
   }
};
</script>

<style scoped>
   li {
      cursor: pointer;
   }
</style>
