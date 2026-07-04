<template>
    <section id='about' class='bg-white py-24'>
        <div class='mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[0.8fr_1.2fr]'>
            <Motion
                as='div'
                :initial='{ opacity: 0, y: 24 }'
                :while-in-view='{ opacity: 1, y: 0 }'
                :in-view-options='{ once: true }'
                :transition='{ duration: 0.5, ease: "easeOut" }'
                class='mx-auto aspect-[4/5] w-full max-w-sm rounded-3xl border border-cherry-petal bg-cherry-blossom'
            >
                <div class='flex h-full w-full flex-col items-center justify-center gap-3 text-cherry-bloom'>
                    <UserCircleIcon class='h-16 w-16' aria-hidden='true' />
                    <span class='font-mono text-xs uppercase tracking-widest'>Photo placeholder</span>
                </div>
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
            </Motion>
        </div>
    </section>
</template>

<script setup lang='ts'>
import { Motion } from 'motion-v'
import { UserCircleIcon } from '@heroicons/vue/24/outline'
import SectionEyebrow from '~/components/ui/SectionEyebrow.vue'

interface Props {
    eyebrow?: string
    title?: string
    paragraphs?: string[]
    quote?: string
}

withDefaults(defineProps<Props>(), {
    eyebrow: 'About',
    title: 'Placeholder section title',
    paragraphs: () => [
        'Placeholder paragraph introducing the person or business. Real bio content will replace this once provided.',
        'A second placeholder paragraph can expand on experience, focus areas, or approach.'
    ],
    quote: 'Placeholder pull-quote goes here — a short line that captures the value proposition.'
})
</script>
