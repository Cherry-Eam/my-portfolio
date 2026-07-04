<template>
    <span
        class='inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest'
        :class="tone === 'inverted' ? 'text-white' : 'text-cherry-red'"
    >
        <span class='h-px w-5 bg-current' aria-hidden='true' />
        {{ label }}
    </span>
</template>

<script setup lang='ts'>
interface Props {
    label: string
    tone?: 'default' | 'inverted'
}

withDefaults(defineProps<Props>(), {
    tone: 'default'
})
</script>
