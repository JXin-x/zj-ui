<script setup lang="ts">
import {ref} from "vue"
import type {ButtonProps} from "./type"
defineOptions({
    name:"ZjButton"
})
const props = withDefaults(defineProps<ButtonProps>(),{
    tag:"button",
    nativeType:"button"
})

const slots = defineSlots();
const _ref = ref<HTMLButtonElement>()
</script>
<template>
    <component
        :is="props.tag"
        ref="_ref"
        class="zj-button"
        :type="tag === 'button' ? nativeType : void 0"
        :disabled = "disabled || loading ? true : void 0"
        :class="{
            [`zj-button--${type}`]:type,
            [`zj-button--${size}`]:size,
            'is-plain': plain,
            'is-round':round,
            'is-circle':circle,
            'is-disabled':disabled,
            'is-loading':loading
        }"  
    >
    <slot></slot>
    </component>
</template>
<style scoped>
@import "./style.css";
</style>