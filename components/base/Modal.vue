<template>
    <Transition
        enter-active-class="animate__animated animate__fadeIn animate__faster"
        leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
        <div v-if="modelValue"
            @click.self="emit('update:modelValue', false)"
            :class="['remodal-wrapper', {'remodal-is-opened': modelValue}]"
            :style="{display: modelValue ? 'block' : 'none'}" 
        >
            <div
                :class="['remodal remodal-lg remodal-is-initialized', {'remodal-is-opened': modelValue}]" 
                tabindex="-1"
            >
                <div class="remodal-header">
                    <button @click="emit('update:modelValue', false)" class="remodal-close"></button>
                </div>
                <div class="remodal-content">
                    <slot></slot>
                </div>
                <div class="remodal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </Transition> 
</template>

<script setup lang="ts">
import { Transition, TransitionGroup } from 'vue';

    defineProps({
        modelValue:{
            default: false,
            type: Boolean,
        },
    });

    const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped>
    .remodal-wrapper{
        background-color: #00000066;
    }
</style>