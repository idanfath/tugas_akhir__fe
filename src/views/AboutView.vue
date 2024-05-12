<template>
  <q-page padding class="row  fi justify-center">
    <div style="width: 300px;">
      <q-img src="../assets/logo.png" style="object-fit: cover;" alt=""/>
    </div>

    <q-btn style="background-color: yellow;" class="q-pa-sm text-green" @click="text2 = !text2">hover me</q-btn>
  </q-page>
</template>

<script>
  export default {
    name: 'AboutView',
    methods: {
    }
    ,data() {
      return {
        text2: false
      }
    },
  }
  
</script>

<style scoped>
  
</style>