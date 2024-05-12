<template>
    <q-item :to="{name: page}" class="q-px-md h-bg-grey text-dark h-clr-prim animated fi parent-right" clickable>
        <q-item-section>{{name}}</q-item-section>
        <q-icon size="sm" class="h-right" name="keyboard_arrow_right" />
    </q-item>
</template>
<script>
    export default {
        props: {
            name: String,
            page: String,
        }
    }
</script>