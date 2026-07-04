<template>
    <div class='pointer-events-none absolute inset-x-0 top-0 -bottom-16 overflow-visible' aria-hidden='true'>
        <AnimatePresence>
            <Motion
                v-for='petal in visiblePetals'
                :key='petal.id'
                as='span'
                :initial='{ y: 0, opacity: 0, rotate: petal.rotate }'
                :animate='{ y: 80, opacity: [0, 1, 1, 0], rotate: petal.rotate + 80 }'
                :transition='{ duration: petal.duration, delay: petal.delay, repeat: Infinity, ease: "easeIn" }'
                class='absolute top-full h-2.5 w-2 rounded-t-full rounded-bl-full'
                :class='petal.color'
                :style='{ left: petal.left }'
            />
        </AnimatePresence>
    </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue'
import { Motion, AnimatePresence } from 'motion-v'

interface Props {
    active?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    active: false
})

const colors = ['bg-cherry-petal', 'bg-cherry-bloom', 'bg-cherry-blossom']

const petals = Array.from({ length: 7 }, (_, i) => ({
    id: i,
    left: `${8 + Math.random() * 84}%`,
    duration: 1 + Math.random() * 0.7,
    delay: Math.random() * 1.1,
    rotate: Math.random() * 60 - 30,
    color: colors[i % colors.length]
}))

const visiblePetals = computed(() => (props.active ? petals : []))
</script>
