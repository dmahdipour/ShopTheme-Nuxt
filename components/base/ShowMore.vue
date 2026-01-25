<template>
    <div :class="['expandable-text pt-1', {'active': isShow}]" :style="{height: `${height}px`}">
        <div class="expandable-text_text fa-num">
            <slot></slot>
        </div>
        <div class="expandable-text-expand-btn justify-content-start text-sm">
            <span :class="['show-more', {'d-none': isShow}]" @click="isShow=!isShow">
                {{ showText }} <i class="ri-arrow-down-s-line ms-2"></i>
            </span>
            <span :class="['show-less', {'d-none': !isShow}]" @click="isShow=!isShow">
                {{ closeText }} <i class="ri-arrow-up-s-line ms-2"></i>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps({
        closeText:{
            default: 'مشاهده کمتر',
            type: String,
        },
        showText:{
            default:'مشاهده بیشتر',
            type: String,
        },
        height:{
            default: 100,
            type: Number
        },
    })

    const isShow = ref(false)
</script>