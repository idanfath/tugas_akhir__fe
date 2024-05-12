<template>
<CustomCursor class="gt-sm"></CustomCursor>
  <q-layout view="lHh Lpr lFf">
    <UserHeader></UserHeader>
    <q-page-container class="font-inter">
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
  import UserHeader from '@/components/UserHeader.vue'
  import CustomCursor from '@/components/CustomCursor.vue'
  export default {
    name: 'DashboardShell',
    components: {
      UserHeader, CustomCursor
    },
  }
</script>