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
                    <div class='relative flex aspect-[4/5] w-full flex-col rounded-3xl border border-cherry-petal bg-white p-7 shadow-lg shadow-cherry-bloom/10'>
                        <div class='flex items-center gap-3'>
                            <div class='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-cherry-blossom font-display text-sm font-semibold text-cherry-red'>
                                CE
                            </div>
                            <div class='min-w-0'>
                                <p class='truncate font-display text-base font-semibold text-slate-950'>
                                    Cherry Efondo
                                </p>
                                <p class='font-mono text-[10px] uppercase tracking-widest text-slate-500'>
                                    Virtual Assistant
                                </p>
                            </div>
                        </div>

                        <div class='mt-7 flex-1 space-y-5'>
                            <div v-for='section in resumeSections' :key='section.label' class='space-y-2'>
                                <div class='h-1.5 w-16 rounded-full bg-cherry-bloom/70' aria-hidden='true' />
                                <div
                                    v-for='(width, index) in section.lines'
                                    :key='index'
                                    class='h-2 rounded-full bg-cherry-blossom'
                                    :class='width'
                                    aria-hidden='true'
                                />
                            </div>
                        </div>

                        <a
                            :href='resumeHref'
                            target='_blank'
                            rel='noopener'
                            download
                            class='mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-cherry-red px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-cherry-red/90'
                        >
                            <ArrowDownTrayIcon class='h-4 w-4' aria-hidden='true' />
                            Download Resume
                        </a>
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
import { ArrowDownTrayIcon } from '@heroicons/vue/24/outline'
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
    resumeHref?: string
}

withDefaults(defineProps<Props>(), {
    eyebrow: 'About Me',
    title: "Hi, I'm Cherry Efondo",
    paragraphs: () => [
        'A dedicated and results-driven Virtual Assistant based in Davao City, Philippines. With over three years of professional experience, I have partnered with entrepreneurs, executives, agencies, and growing businesses to streamline operations, improve productivity, and support business growth.',
        "I graduated Cum Laude with a Bachelor of Secondary Education, Major in English — a distinction that reflects my commitment to excellence, discipline, and effective communication, and equips me to manage complex administrative tasks and adapt quickly to the evolving needs of modern businesses.",
        'My goal is simple: to help business owners reclaim their time by handling the day-to-day operations that keep their businesses running smoothly — as a dependable partner who anticipates needs, solves problems proactively, and contributes to long-term success.'
    ],
    quote: "Let's work together to build smarter systems, stronger operations, and lasting success.",
    stats: () => [
        { value: 3, suffix: '+', label: 'Years Experience' },
        { value: 9, suffix: '', label: 'Core Services' },
        { value: 5, suffix: '', label: 'Core Values' }
    ],
    resumeHref: '/resume.pdf'
})

const resumeSections = [
    { label: 'Experience', lines: ['w-full', 'w-4/5', 'w-full'] },
    { label: 'Education', lines: ['w-3/4', 'w-1/2'] },
    { label: 'Skills', lines: ['w-full', 'w-2/3'] }
]

const { rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt()
</script>
