<template>
    <div ref='elementRef' class='text-left'>
        <p class='font-display text-3xl font-semibold text-cherry-red'>
            {{ current }}{{ suffix }}
        </p>
        <p class='mt-1 font-mono text-xs uppercase tracking-widest text-slate-500'>
            {{ label }}
        </p>
    </div>
</template>

<script setup lang='ts'>
import { useCountUp } from '~/composables/useCountUp'

interface Props {
    value: number
    suffix?: string
    label: string
}

const props = withDefaults(defineProps<Props>(), {
    suffix: ''
})

const { current, elementRef } = useCountUp(props.value)
</script>
