<template>
    <div v-bind="$attrs" class="main-border" :class="{  'button-border': buttonmode, 'input-border': inputmode, 'big-rounded': bigmode }"
        :style="{ left: `${cursorX}px`, top: `${cursorY}px` }"></div>
</template>

<script>
    export default {
        inheritAttrs: false,
        mounted() {
            this.addEventListeners();
            document.addEventListener("mousemove", this.handleMouseMove);
        },
        updated() {
            this.addEventListeners();
        },
        methods: {
            addEventListeners() {
                const cbutton = document.querySelectorAll("button, .mc, .cursor-pointer");
                cbutton.forEach((element) => {
                    element.removeEventListener("mouseenter", this.handlebutton);
                    element.removeEventListener("mouseleave", this.handlebutton);
                    element.addEventListener("mouseenter", this.handlebutton.bind(this, true));
                    element.addEventListener("mouseleave", this.handlebutton.bind(this, false)
                    );
                });
                const cbig = document.querySelectorAll(".mc-round");
                cbig.forEach((element) => {
                    element.removeEventListener("mouseenter", this.handlebutton);
                    element.removeEventListener("mouseleave", this.handlebutton);
                    element.addEventListener("mouseenter", this.handlebig.bind(this, true));
                    element.addEventListener("mouseleave", this.handlebig.bind(this, false)
                    );
                });
                const cinput = document.querySelectorAll(".mc-input, input");
                cinput.forEach((element) => {
                    element.removeEventListener("mouseenter", this.handlebutton);
                    element.removeEventListener("mouseleave", this.handlebutton);
                    element.addEventListener("mouseenter", this.handleinput.bind(this, true));
                    element.addEventListener("mouseleave", this.handleinput.bind(this, false)
                    );
                });
            },
            handlebig(mode) {
                this.bigmode = mode;
            },
            handleinput(mode) {
                this.inputmode = mode;
            },
            handlebutton(mode) {
                this.buttonmode = mode;
            },
            handleMouseMove(event) {
                this.cursorX = event.pageX;
                this.cursorY = event.pageY;
            },

        },
        data() {
            return {
                buttonmode: false,
                bigmode: false,
                inputmode: false,
                cursorX: 0,
                cursorY: 0,
            };
        },
    };
</script>

<style>
    /* .cursor-pointer,
    button,
    a,
    i,
    div,
    input,
    body {
        cursor: none !important;
    } */

    .nocursor {
        opacity: 0;
    }

    .main-cursor,
    .main-border {
        position: absolute;
        transform: translate(-50%, -50%);
        pointer-events: none;
        overflow: hidden;
        z-index: 99999;
    }


    .main-border {
        width: 0px;
        height: 0px;
        /* border-radius: 50%; */
        background-color: rgba(255, 255, 255, 0);
        border: 2px solid rgba(0, 0, 0, 0);
        transition:
        background-color 0.5s ease-in-out,
        border 0.5s ease-in-out,
        border-radius 0.5s ease-in-out,
        opacity 0.5s ease-in-out,
        left 0.2s ease-out,
        top 0.2s ease-out,
        width 0.4s ease-in-out,
        height 0.4s ease-in-out;
    }
    
    
    

    .input-border {
        width: 4px;
        height: 20px;
        border-radius: 0px;
        backdrop-filter: blur(1px);
        background-color: rgba(255, 255, 255, 0.083);
        border: 1px solid black;
    }

    .button-border {
        width: 15px;
        height: 15px;
        backdrop-filter: blur(2px);
        background-color: rgba(255, 255, 255, 0.083);
        border: 1px solid black;
    }

    .big-rounded {
        width: 20px ;
        height: 20px ;
        border-radius: 50% ;
        backdrop-filter: blur(1px);
        background-color: rgba(255, 255, 255, 0.083);
        border: 1px solid black;
    }
    
</style>