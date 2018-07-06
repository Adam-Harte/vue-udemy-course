<template>
    <div>
        <button class="btn btn-primary" @click="increment({ by: 100, duration: 1000 })">Increment</button>
        <button class="btn btn-primary" @click="decrement({ by: 50, duration: 2000  })">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ])
            // increment() {
            //     this.$store.commit('increment');
            // },
            // decrement() {
            //     this.$store.commit('decrement');
            // }
        }
    }
</script>