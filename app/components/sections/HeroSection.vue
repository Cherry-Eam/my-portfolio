<template>
    <section id='home' class='relative overflow-hidden bg-white pb-20 pt-40'>
        <div class='pointer-events-none absolute inset-0'>
            <div class='absolute inset-0 bg-gradient-to-br from-cherry-blossom via-white to-cherry-petal/50' />
            <div class='absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_1px_1px,theme(colors.cherry.bloom/30%)_1px,transparent_0)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]' />
            <div class='absolute -top-32 right-[-8%] h-[26rem] w-[26rem] rounded-full bg-cherry-red/20 blur-3xl' />
            <div class='absolute -bottom-40 left-[-10%] h-[26rem] w-[26rem] rounded-full bg-cherry-bloom/25 blur-3xl' />
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
                    <em class='font-medium not-italic text-cherry-red italic'>{{ highlight }}</em>
                </h1>
                <p class='mt-6 max-w-lg text-lg leading-7 text-slate-600'>
                    {{ subtitle }}
                </p>
                <div class='mt-8 flex flex-wrap gap-4'>
                    <a
                        :href='primaryCtaHref'
                        class='inline-flex items-center justify-center rounded-full bg-cherry-red px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5'
                    >
                        {{ primaryCtaLabel }}
                    </a>
                    <a
                        :href='secondaryCtaHref'
                        class='inline-flex items-center justify-center rounded-full border border-cherry-bloom px-7 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:border-cherry-red hover:text-cherry-red'
                    >
                        {{ secondaryCtaLabel }}
                    </a>
                </div>
            </Motion>

            <Motion
                as='div'
                :initial='{ opacity: 0, scale: 0.96 }'
                :animate='{ opacity: 1, scale: 1 }'
                :transition='{ duration: 0.5, ease: "easeOut", delay: 0.15 }'
                class='mx-auto aspect-[4/5] w-full max-w-sm rounded-3xl border border-white/80 bg-white/70 shadow-xl shadow-cherry-bloom/10 backdrop-blur-sm'
            >
                <div class='flex h-full w-full flex-col items-center justify-center gap-3 text-cherry-bloom'>
                    <PhotoIcon class='h-16 w-16' aria-hidden='true' />
                    <span class='font-mono text-xs uppercase tracking-widest'>Photo placeholder</span>
                </div>
            </Motion>
        </div>
    </section>
</template>

<script setup lang='ts'>
import { Motion } from 'motion-v'
import { PhotoIcon } from '@heroicons/vue/24/outline'
import SectionEyebrow from '~/components/ui/SectionEyebrow.vue'

interface Props {
    eyebrow?: string
    title?: string
    highlight?: string
    subtitle?: string
    primaryCtaLabel?: string
    primaryCtaHref?: string
    secondaryCtaLabel?: string
    secondaryCtaHref?: string
}

withDefaults(defineProps<Props>(), {
    eyebrow: 'Placeholder tagline',
    title: 'A bold headline goes ',
    highlight: 'right here.',
    subtitle: 'Placeholder subtitle copy describing the offer. Replace with real messaging once content is ready.',
    primaryCtaLabel: 'Primary Action',
    primaryCtaHref: '#contact',
    secondaryCtaLabel: 'Secondary Action',
    secondaryCtaHref: '#services'
})
</script>
