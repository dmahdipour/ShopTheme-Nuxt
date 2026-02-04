<template>
    <button
        :class="[
            'btn', 
            {'btn-sm': size=='sm'}, 
            {'btn-lg': size=='lg'}, 
            {'w-100': wFull==true}, 
            outline ? `btn-outline-${color}` : `btn-${color}`
        ]"
        :disabled="loading"
        >
        <div class="spinner-border" v-if="loading" role="status">
            <span class="sr-only"></span>
        </div>
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
    defineProps({
        size:{
            default: "normal",
            type: String
        },
        wFull:{
            default: false,
            type: Boolean
        },
        outline:{
            default: false,
            type: Boolean
        },
        color:{
            default: "primary",
            type: String
        },
        loading:{
            default: false,
            type: Boolean
        },
    })
</script>

<style scoped>
    .spinner-border{
        margin-left: 0.5rem;
        width: 1.5rem;
        height: 1.5rem;
    }
</style>