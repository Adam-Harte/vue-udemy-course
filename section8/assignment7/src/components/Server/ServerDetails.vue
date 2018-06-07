<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a server</p>
        <p v-else>Server #{{ server.id }} selected, status: {{ server.status }}</p>
        <hr>
        <button @click="updateStatus">Change status</button>
    </div>

</template>

<script>
import { eventBus } from '../../main';

export default {
    data: function () {
        return {
            server: null
        }
    },
    methods: {
        updateStatus () {
            this.server.status = 'Normal'
        }
    },
    created () {
        eventBus.$on('serverSelected', (server) => {
            this.server = server;
        });
    }
}
</script>

<style>

</style>
