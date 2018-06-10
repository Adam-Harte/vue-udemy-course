<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedComponent = 'blue'; boxColor = 'blue';">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponent = 'green'; boxColor = 'green';">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedComponent = 'red'; boxColor = 'red';">Load Red Template</button>
                <hr>
                <component :is="selectedComponent">
                    <p>This is the {{ boxColor }} box!</p>
                </component>
                <!-- <app-blue></app-blue>
                <app-green></app-green>
                <app-red></app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data: function () {
            return {
                selectedComponent: 'appBlue',
                boxColor: 'blue'
            }
        }
    }
</script>

<style>
</style>
