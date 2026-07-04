<template>
    <div class='pointer-events-none absolute inset-0 overflow-visible' aria-hidden='true'>
        <AnimatePresence>
            <Motion
                v-for='petal in petals'
                :key='`${burstCount}-${petal.id}`'
                as='span'
                :initial='{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }'
                :animate='{ x: petal.x, y: petal.y, opacity: 0, scale: 0.4, rotate: petal.rotate }'
                :transition='{ duration: 0.7, ease: "easeOut" }'
                class='absolute left-1/2 top-1/2 h-2.5 w-2 -translate-x-1/2 -translate-y-1/2 rounded-t-full rounded-bl-full'
                :class='petal.color'
            />
        </AnimatePresence>
    </div>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue'
import { Motion, AnimatePresence } from 'motion-v'

interface Props {
    burstCount: number
}

const props = defineProps<Props>()

const colors = ['bg-cherry-petal', 'bg-cherry-bloom', 'bg-cherry-blossom', 'bg-cherry-red']
const petalCount = 10

const generatePetals = () =>
    Array.from({ length: petalCount }, (_, i) => {
        const angle = (i / petalCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.4
        const distance = 28 + Math.random() * 26
        return {
            id: i,
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
            rotate: Math.random() * 180 - 90,
            color: colors[i % colors.length]
        }
    })

const petals = ref(props.burstCount > 0 ? generatePetals() : [])

watch(
    () => props.burstCount,
    (value) => {
        if (value > 0) petals.value = generatePetals()
    }
)
</script>
