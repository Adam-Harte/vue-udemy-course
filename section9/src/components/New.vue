<template>
   <div>
      <h3>New Quote</h3>
      <button @click="counter++">Counter</button>
      <p>{{ counter }}</p>
   </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0
    };
  },
  destroyed() {
    console.log("destoryed");
  },
  deactivated() {
    console.log("deactivated");
  },
  activated() {
    console.log("activated");
  }
};
</script>

<style>

</style>
