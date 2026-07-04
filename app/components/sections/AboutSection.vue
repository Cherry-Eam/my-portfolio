<template>
    <section id='about' class='relative overflow-hidden bg-white py-24'>
        <div class='pointer-events-none absolute -left-24 top-10 h-72 w-72 rotate-12 rounded-[3rem] bg-cherry-blossom/70 blur-2xl' aria-hidden='true' />

        <div class='relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[0.8fr_1.2fr]'>
            <Motion
                as='div'
                :initial='{ opacity: 0, y: 24 }'
                :while-in-view='{ opacity: 1, y: 0 }'
                :in-view-options='{ once: true }'
                :transition='{ duration: 0.5, ease: "easeOut" }'
                class='relative mx-auto w-full max-w-sm [perspective:800px]'
                @mousemove='onMouseMove'
                @mouseleave='onMouseLeave'
            >
                <Motion
                    as='div'
                    :animate='{ rotateX, rotateY }'
                    :transition='{ type: "spring", stiffness: 150, damping: 14 }'
                    class='relative [transform-style:preserve-3d]'
                >
                    <div class='absolute -inset-3 -rotate-3 rounded-[2rem] bg-cherry-petal/60' aria-hidden='true' />
                    <div class='relative aspect-[4/5] w-full rounded-3xl border border-cherry-petal bg-cherry-blossom shadow-lg shadow-cherry-bloom/10'>
                        <div class='flex h-full w-full flex-col items-center justify-center gap-3 text-cherry-bloom'>
                            <UserCircleIcon class='h-16 w-16' aria-hidden='true' />
                            <span class='font-mono text-xs uppercase tracking-widest'>Photo placeholder</span>
                        </div>
                    </div>
                    <div class='absolute -bottom-5 -right-5 flex h-16 w-16 rotate-6 items-center justify-center rounded-2xl border border-cherry-petal bg-white font-mono text-[10px] font-semibold uppercase tracking-widest text-cherry-red shadow-md'>
                        Hi!
                    </div>
                </Motion>
            </Motion>

            <Motion
                as='div'
                :initial='{ opacity: 0, y: 24 }'
                :while-in-view='{ opacity: 1, y: 0 }'
                :in-view-options='{ once: true }'
                :transition='{ duration: 0.5, ease: "easeOut", delay: 0.1 }'
            >
                <SectionEyebrow :label='eyebrow' />
                <h2 class='mt-4 font-display text-3xl font-semibold text-slate-950 sm:text-4xl'>
                    {{ title }}
                </h2>
                <p
                    v-for='(paragraph, index) in paragraphs'
                    :key='index'
                    class='mt-5 text-base leading-7 text-slate-600'
                >
                    {{ paragraph }}
                </p>
                <blockquote class='mt-7 border-l-2 border-cherry-red pl-6 font-display text-xl italic text-slate-800'>
                    {{ quote }}
                </blockquote>

                <div class='mt-9 flex flex-wrap gap-10 border-t border-cherry-petal pt-8'>
                    <StatCounter v-for='stat in stats' :key='stat.label' :value='stat.value' :suffix='stat.suffix' :label='stat.label' />
                </div>
            </Motion>
        </div>
    </section>
</template>

<script setup lang='ts'>
import { Motion } from 'motion-v'
import { UserCircleIcon } from '@heroicons/vue/24/outline'
import SectionEyebrow from '~/components/ui/SectionEyebrow.vue'
import StatCounter from '~/components/ui/StatCounter.vue'
import { useTilt } from '~/composables/useTilt'
import type { StatItem } from '~/types/stat'

interface Props {
    eyebrow?: string
    title?: string
    paragraphs?: string[]
    quote?: string
    stats?: StatItem[]
}

withDefaults(defineProps<Props>(), {
    eyebrow: 'About',
    title: 'Placeholder section title',
    paragraphs: () => [
        'Placeholder paragraph introducing the person or business. Real bio content will replace this once provided.',
        'A second placeholder paragraph can expand on experience, focus areas, or approach.'
    ],
    quote: 'Placeholder pull-quote goes here — a short line that captures the value proposition.',
    stats: () => [
        { value: 3, suffix: '+', label: 'Placeholder stat' },
        { value: 50, suffix: '+', label: 'Placeholder stat' },
        { value: 100, suffix: '%', label: 'Placeholder stat' }
    ]
})

const { rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt()
</script>
