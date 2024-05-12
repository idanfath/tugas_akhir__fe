<template>
    <q-item :to="{name: page}" :active="$route.name === page" class="animated h-opacity"
        active-class="c-prim bg-grey">
        <q-item-section>
            <q-item-label>{{text}}</q-item-label>
        </q-item-section>
    </q-item>
</template>
<script>
    export default {
        props: {
            text: String,
            page: String,
            active: Boolean
        }
    }
</script>