<template>
    <button :class="['btn', {'btn-sm': size=='sm'}, {'btn-lg': size=='lg'}, {'w-100': wFull==true}, outline ? `btn-outline-${color}` : `btn-${color}`, ]">
        <slot></slot>
        <slot name="icon"></slot>
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
        }
    })
</script>