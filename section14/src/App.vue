<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select class="form-control" v-model="alertAnimation">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br><br>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-show="show">This is some Info</div>
                </transition>
                <transition name="slide" type="animation" appear>
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                <transition name="fade" enter-active-class="animated bounce" leave-active-class="animated shake">
                    <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">This is some Info</div>
                    <div class="alert alert-warning" v-else key="warning">This is some Warning</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
                <br><br>
                <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="enterAfter"
                @enter-cancelled="enterCancelled"
                
                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="leaveAfter"
                @leave-cancelled="leaveCancelled"
                :css="false">
                    <div style="width: 100px; height: 100px; background-color: lightgreen" v-if="load"></div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="selectedComponent = selectedComponent == 'appSuccessAlert' ? 'appDangerAlert' : 'appSuccessAlert'">Toggle Components</button>
                <br><br>
                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './DangerAlert.vue'
    import SuccessAlert from './SuccessAlert.vue'

    export default {
        data() {
            return {
                show: false,
                load: true,
                alertAnimation: 'fade',
                elementWidth: 100,
                selectedComponent: 'appSuccessAlert'
            }
        },
        methods: {
            beforeEnter (el) {
                console.log('before enter');
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter (el, done) {
                console.log('enter');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20)
            },
            enterAfter (el) {
                console.log('enter after');
            },
            enterCancelled (el) {
                console.log('enter cancelled');
            },
            beforeLeave (el) {
                console.log('before leave');
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave (el, done) {
                console.log('leave');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20)
            },
            leaveAfter (el) {
                console.log('leave after');
            },
            leaveCancelled (el) {
                console.log('leave cancelled');
            }
        },
        components: {
            appDangerAlert: DangerAlert,
            appSuccessAlert: SuccessAlert
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave {
        /* opacity: 1; */
    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
        /* transform: translateY(20px); */
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out;
        transition: opacity 1s;
    }

    .slide-leave {

    }

    .slide-leave-active {
        animation: slide-out 1s ease-out;
        transition: opacity 3s;
        opacity: 0;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
