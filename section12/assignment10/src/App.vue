<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <div @eventOn:click="change('Text Changed!')">Change Text</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            eventOn (el, binding, vnode) {
                const eventType = binding.arg
                const fn = binding.value
                el.addEventListener(eventType, fn)
            }
        },
        methods: {
            change (text) {
                this.$event.target.innerText = text
            }
        }
    }
</script>

<style>
</style>
