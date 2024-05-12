<template>
  <q-header v-model="header" reveal bordered class="bg-prim fixed non-selectable">

    <q-toolbar class="text-grey-9 q-pa-md q-px-lg" style="font-size: 1rem;">

      <q-list class="gt-sm col-4 fi gap-1">
        <UH__items class="mc" page="landing" text="Beranda" />
        <UH__items class="mc" page="about" text="Tentang" />
      </q-list>

      <div class="gt-sm col-4 text-weight-medium font-timeless text-h4 text-center mc-round">Schoene Florist</div>
      <div class="lt-md col-7 text-weight-medium font-timeless text-h5 text-left mc-round">Schoene Florist</div>

      <div class="col-md-4 col-lg-4 col-xl-4 col-sm-5 col-xs-5 fi justify-end gap-1">
        <q-input flat dense outlined no-caps square v-model="search" type="text" class="mc-input gt-sm animated h-italic"
          color="dark" placeholder="Cari apapun..">
          <template v-slot:append>
            <q-icon class="mc" name="search" />
          </template>
        </q-input>

        <div>
          <q-icon name="dashboard" size="md" class="c-grey animated h-bg-grey h-clr-prim q-pa-sm mc"></q-icon>
          <q-menu style="width: 150px;" square transition-show="fade" transition-hide="fade" v-model="menu"
            class="bg-prim text-weight-medium" :offset="[0, 0]" anchor="bottom right" self="top right">
            <UH__dd name="Dashboard"></UH__dd>
            <q-separator />
            <UH__dd name="Banners"></UH__dd>
            <q-separator />
            <UH__dd name="Headers"></UH__dd>
            <q-separator />
            <UH__dd name="Statistik"></UH__dd>
            <q-separator />
            <UH__dd name="Profil"></UH__dd>
          </q-menu>
        </div>

        <div>
          <q-icon name="menu" @click="dialog =! dialog" size="md"
            class="lt-md c-grey animated h-bg-grey h-clr-prim q-pa-sm">
            <q-dialog transition-show="fade" transition-hide="fade" square v-model="dialog">
              <q-card class="full-width">
                <q-card-section class="bg-dark c-prim text-bold q-py-sm text-h6=5 fi">
                  <div class="non-selectable">Menu</div>
                  <q-space />
                  <q-icon size="sm" @click="mobilesearching = !mobilesearching" class="q-pa-sm h-bg-prim h-clr-grey animated" name="search" />
                  <q-icon size="sm" v-close-popup class="q-pa-sm h-bg-prim h-clr-grey animated" name="close" />
                </q-card-section>
                <div v-auto-animate >
                  <q-card-section v-if="mobilesearching" >
                    <q-input flat dense outlined no-caps square v-model="search" type="text" class="cursor-none animated h-italic"
                      color="dark" placeholder="Cari apapun..">
                      <template v-slot:append>
                        <q-icon  name="search" />
                      </template>
                    </q-input>
                  </q-card-section>
                </div>
                <q-card-section class="q-py-sm">
                  <div v-auto-animate><q-separator v-if="mobilesearching" color="grey-6"/></div>
                  <UH__dd name="Beranda" page="landing"></UH__dd>
                  <q-separator color="grey-6"/>
                  <UH__dd name="Tentang" page="about"></UH__dd>
                </q-card-section>
              </q-card>

            </q-dialog>
          </q-icon>
        </div>
      </div>

    </q-toolbar>

  </q-header>
</template>

<script>
  import UH__items from '@/components/tinycomp/UH__items.vue'
  import UH__dd from '@/components/tinycomp/UH__dd.vue'
  export default {
    name: 'UserHeader',
    components: {
      UH__items,
      UH__dd
    },
    data() {
      return {
        dialog: false,
        mobilesearching: false,
        header: true,
      }
    },
    methods: {
    },
  }
</script>

<style scoped>


</style>