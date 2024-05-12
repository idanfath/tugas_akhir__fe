<template>
  <q-page style="height: calc(100vh - 100px);">
    <q-carousel v-model="images[0].id" transition-prev="fade" transition-next="fade" swipeable infinite animated
      :autoplay="true" :autoplay-interval="3000" style="height: 100%;"
      class="carousel bg-dark text-white non-selectable" :slides-per-page="2">
      <q-carousel-slide v-for="(item, i) in images" :key="i" :name="i + 1"
        :img-src="require(`../assets/sampleimage/${i+1}.jpg`)" style="filter: brightness(0.4);"></q-carousel-slide>
    </q-carousel>
    <q-card id="header" dimmed class="header no-shadow non-selectable ">
      <q-card-section style="line-height: normal;" class=" mc-round">
        <div class="font-timeless text-white" style="letter-spacing: -2px; font-size: clamp(2.9rem, 8vw, 5rem);">
          Schoene Florist
        </div>
        <div class="font-timeless text-white" style="letter-spacing: 0px; font-size: clamp(1rem, 2vw, 2rem);">
          Bunga terbaik, untuk momen terbaik
        </div>
      </q-card-section>
      <q-card-section>
        <q-btn unelevated label="Telusuri" href="#terlaris"
          class="my-button bg-prim font-inter text-h6 text-weight-light mc" no-caps style="letter-spacing: 1.6px;"
          square filled></q-btn>
      </q-card-section>
    </q-card>
  </q-page>

  <q-card square class="bg-grn info fi c-prim non-selectable" id="info">
    <q-card-section class="gt-sm">
      <img class="mc-round" src="../assets/testlogo.png"
        style="object-fit: cover; height: 80px; filter: invert(1) brightness(0.8);" alt="Schoene's Logo" />
    </q-card-section>
    <q-separator vertical class="gt-sm q-mx-xl" color="grey-9" />
    <q-card-section class="font-timeless infotext text-h6 mc-round" style="letter-spacing: 1px;">
      Lorem ipsum dolor sit amet, <u class="mc infospan">consectetur adipiscing</u> elit. Sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </q-card-section>
  </q-card>

  <q-card square id="terlaris" class="terlaris row bg-prim items-center non-selectable justify-between"
    style="padding: 50px 5vw 50px 5vw; row-gap: 50px;">
    <q-card-section style="line-height: normal;" class="col-lg-4 c-grey col-12 col-xl-4 md-center column">
      <div class="font-timeless  mc-round "
        style="letter-spacing: -2px; width: fit-content; font-size: clamp(1rem, 8vw, 4rem);">
        Produk <u class="animated h-clr-prim h-bg-dark">Terlaris.</u>
      </div>
      <div class="font-timeless  mc-round q-mt-sm" style="letter-spacing: 0px; font-size: clamp(1rem, 2vw, 1.3rem);">
        Bunga yang paling sering dicari, dan paling sering dibeli.
      </div>
      <q-btn label="Telusuri" unelevated
        class="q-mt-lg bg-grey-10 my-button bg-grey c-prim font-inter text-h6 text-weight-light mc" no-caps
        style="letter-spacing: 1.6px;" square></q-btn>
    </q-card-section>

    <q-card-section class="col-lg-7 col-xl-7 col-12" style="height: 550px;">
      <swiper :modules="modules" class="full-height" :slides-per-view="slidesperview" loop :autoplay="{ delay: 5000 }"
        :space-between="50" style="padding: 15px">
        <swiper-slide v-for="(item, i) in images" :key="i" :name="i + 1" class=" row justify-between mc">
          <q-img :src="require(`../assets/sampleimage/${i + 1}.jpg`)" class="full-height h-shdw " />
        </swiper-slide>
      </swiper>
    </q-card-section>

  </q-card>

</template>

<script>
  import { Autoplay } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay],
      };
    },
    computed: {
      slidesperview() {
        let size = this.$q.screen.width;
        if (size < 400) {
          return 1;
        } else if (size < 850) {
          return 2;
        } else if (size < 2000) {
          return 3;
        } else if (size < 2500) {
          return 4;
        } else {
          return 5;
        }
      }
    },
    data() {
      return {
        images: [{
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },],
      }
    },
  }
</script>

<style scoped>
  .info {
    height: 180px;
    padding: 0 5vw 0 5vw
  }

  .header {
    background-color: transparent;
    position: absolute;
    bottom: 15vh;
    left: 5vw;
  }

  .info>.infotext {
    font-size: clamp(1rem, 2vw, 1.5rem);
    line-height: clamp(1.3rem, 3vw, 2rem);
    /* line-height: 2rem; */
  }

  .my-button {
    width: clamp(140px, 18vw, 200px);
    height: clamp(50px, 5vw, 70px);
    font-size: clamp(1rem, 2vw, 1.2rem);
    transition: all 0.5s ease-in-out;
  }

  .my-button:hover {
    font-size: calc(clamp(1rem, 2vw, 1.2rem) + 0.05rem);
  }

  @media screen and (max-width: 1440px) {
    .md-center {
      text-align: center;
      align-items: center;
    }

  }

  @media screen and (max-width: 1023px) {

    .info {
      height: 150px;
      padding: 0 20px 0 20px
    }

    .info>.infotext {
      text-align: center;
    }

    .header {
      background-color: transparent;
      display: flex;
      flex-direction: column;
      ;
      top: 20vh;
      bottom: unset;
      width: 100%;
      left: unset;
      align-items: center;
      justify-content: center;
    }

    .header>* {
      text-align: center;
      ;
    }
  }

  .infospan {
    transition: all 0.5s ease-in-out;
    letter-spacing: 2px;
  }

  .infospan:hover {
    color: var(--grey);
    background-color: var(--prim);
  }
</style>