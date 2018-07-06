<template>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of clicks: {{ stringCounter }}</p>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed : {
                ...mapGetters([
                'doubleCounter',
                'stringCounter'
            ])
        }

            // counter () {
            //     return this.$store.getters.doubleCounter;
            // },
            // clicks () {
            //     return this.$store.getters.stringCounter;
            // }
    }
</script>