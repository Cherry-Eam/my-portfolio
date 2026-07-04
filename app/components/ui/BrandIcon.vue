<template>
    <svg role='img' :viewBox='icon.viewBox || "0 0 24 24"' class='h-4 w-4 fill-current' aria-hidden='true'>
        <path :d='icon.path' />
    </svg>
</template>

<script setup lang='ts'>
interface SimpleIconData {
    title: string
    path: string
    viewBox?: string
}

interface Props {
    icon: SimpleIconData
}

defineProps<Props>()
</script>
