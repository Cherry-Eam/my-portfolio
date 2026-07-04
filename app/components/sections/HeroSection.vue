<template>
    <section id='home' class='relative overflow-hidden bg-white pb-24 pt-40'>
        <div class='pointer-events-none absolute inset-0'>
            <div class='absolute inset-0 bg-gradient-to-br from-cherry-blossom via-white to-cherry-petal/50' />
            <div class='absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_1px_1px,theme(colors.cherry.bloom/30%)_1px,transparent_0)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]' />
            <Motion
                as='div'
                :animate='{ y: [0, 22, 0], x: [0, -12, 0] }'
                :transition='{ duration: 9, repeat: Infinity, ease: "easeInOut" }'
                class='absolute -top-32 right-[-8%] h-[26rem] w-[26rem] rounded-full bg-cherry-red/20 blur-3xl'
            />
            <Motion
                as='div'
                :animate='{ y: [0, -18, 0], x: [0, 14, 0] }'
                :transition='{ duration: 11, repeat: Infinity, ease: "easeInOut" }'
                class='absolute -bottom-40 left-[-10%] h-[26rem] w-[26rem] rounded-full bg-cherry-bloom/25 blur-3xl'
            />
        </div>

        <div class='relative z-10 mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]'>
            <Motion
                as='div'
                :initial='{ opacity: 0, y: 24 }'
                :animate='{ opacity: 1, y: 0 }'
                :transition='{ duration: 0.5, ease: "easeOut" }'
            >
                <SectionEyebrow :label='eyebrow' />
                <h1 class='mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl'>
                    {{ title }}
                    <span class='relative inline-block align-baseline' :style='{ perspective: "600px" }'>
                        <AnimatePresence mode='wait'>
                            <Motion
                                :key='wordIndex'
                                as='em'
                                :initial='{ opacity: 0, y: 14, rotateX: -50 }'
                                :animate='{ opacity: 1, y: 0, rotateX: 0 }'
                                :exit='{ opacity: 0, y: -14, rotateX: 50 }'
                                :transition='{ duration: 0.45, ease: "easeOut" }'
                                class='inline-block font-medium italic text-cherry-red'
                            >
                                {{ highlightWords[wordIndex] }}
                            </Motion>
                        </AnimatePresence>
                    </span>
                </h1>
                <p class='mt-6 max-w-lg text-lg leading-7 text-slate-600'>
                    {{ subtitle }}
                </p>
                <div class='mt-8 flex flex-wrap gap-4'>
                    <Motion
                        as='a'
                        :href='primaryCtaHref'
                        :while-hover='{ scale: 1.04, y: -3 }'
                        :while-tap='{ scale: 0.96 }'
                        :transition='{ type: "spring", stiffness: 400, damping: 17 }'
                        class='inline-flex items-center justify-center rounded-full bg-cherry-red px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cherry-red/25'
                    >
                        {{ primaryCtaLabel }}
                    </Motion>
                    <Motion
                        as='a'
                        :href='secondaryCtaHref'
                        :while-hover='{ scale: 1.04, y: -3 }'
                        :while-tap='{ scale: 0.96 }'
                        :transition='{ type: "spring", stiffness: 400, damping: 17 }'
                        class='inline-flex items-center justify-center rounded-full border border-cherry-bloom px-7 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:border-cherry-red hover:text-cherry-red'
                    >
                        {{ secondaryCtaLabel }}
                    </Motion>
                </div>
            </Motion>

            <Motion
                as='div'
                :initial='{ opacity: 0, scale: 0.96 }'
                :animate='{ opacity: 1, scale: 1 }'
                :transition='{ duration: 0.5, ease: "easeOut", delay: 0.15 }'
                class='relative mx-auto aspect-[4/5] w-full max-w-sm'
            >
                <div class='h-full w-full rounded-3xl border border-white/80 bg-white/70 shadow-xl shadow-cherry-bloom/10 backdrop-blur-sm'>
                    <div class='flex h-full w-full flex-col items-center justify-center gap-3 text-cherry-bloom'>
                        <PhotoIcon class='h-16 w-16' aria-hidden='true' />
                        <span class='font-mono text-xs uppercase tracking-widest'>Photo placeholder</span>
                    </div>
                </div>

                <Motion
                    v-for='(chip, index) in statusChips'
                    :key='chip'
                    as='div'
                    :initial='{ opacity: 0, y: 10, scale: 0.9 }'
                    :animate='{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10], scale: [0.9, 1, 1, 0.9] }'
                    :transition='{ duration: 3, repeat: Infinity, delay: index * 1.2, times: [0, 0.15, 0.85, 1] }'
                    class='absolute right-[-12%] flex items-center gap-2 rounded-xl border border-cherry-petal bg-white px-3 py-2 font-mono text-[11px] font-medium text-slate-700 shadow-md'
                    :class="index === 0 ? 'top-[10%]' : index === 1 ? 'top-1/2 -translate-y-1/2 right-[-18%]' : 'bottom-[10%]'"
                >
                    <CheckCircleIcon class='h-3.5 w-3.5 text-cherry-red' aria-hidden='true' />
                    {{ chip }}
                </Motion>
            </Motion>
        </div>
    </section>
</template>

<script setup lang='ts'>
import { ref, onMounted, onUnmounted } from 'vue'
import { Motion, AnimatePresence } from 'motion-v'
import { PhotoIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'
import SectionEyebrow from '~/components/ui/SectionEyebrow.vue'

interface Props {
    eyebrow?: string
    title?: string
    highlightWords?: string[]
    subtitle?: string
    primaryCtaLabel?: string
    primaryCtaHref?: string
    secondaryCtaLabel?: string
    secondaryCtaHref?: string
    statusChips?: string[]
}

const props = withDefaults(defineProps<Props>(), {
    eyebrow: 'Placeholder tagline',
    title: 'A bold headline goes',
    highlightWords: () => ['right here.', 'like this.', 'for you.'],
    subtitle: 'Placeholder subtitle copy describing the offer. Replace with real messaging once content is ready.',
    primaryCtaLabel: 'Primary Action',
    primaryCtaHref: '#contact',
    secondaryCtaLabel: 'Secondary Action',
    secondaryCtaHref: '#services',
    statusChips: () => ['Placeholder update', 'Task completed', 'Message sent']
})

const wordIndex = ref(0)
let interval: ReturnType<typeof setInterval>

onMounted(() => {
    interval = setInterval(() => {
        wordIndex.value = (wordIndex.value + 1) % props.highlightWords.length
    }, 2200)
})

onUnmounted(() => clearInterval(interval))
</script>
