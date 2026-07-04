<template>
    <section id='services' class='relative overflow-hidden bg-white py-24'>
        <div
            class='pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(theme(colors.cherry.petal/60%)_1px,transparent_1px),linear-gradient(90deg,theme(colors.cherry.petal/60%)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]'
            aria-hidden='true'
        />

        <div class='relative mx-auto max-w-6xl px-6'>
            <Motion
                as='div'
                :initial='{ opacity: 0, y: 24 }'
                :while-in-view='{ opacity: 1, y: 0 }'
                :in-view-options='{ once: true }'
                :transition='{ duration: 0.5, ease: "easeOut" }'
                class='max-w-2xl'
            >
                <SectionEyebrow :label='eyebrow' />
                <h2 class='mt-4 font-display text-3xl font-semibold text-slate-950 sm:text-4xl'>
                    {{ title }}
                </h2>
                <p class='mt-4 text-base leading-7 text-slate-600'>
                    {{ subtitle }}
                </p>
            </Motion>

            <div class='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                <Motion
                    v-for='(service, index) in services'
                    :key='service.title'
                    as='article'
                    :initial='{ opacity: 0, y: 24 }'
                    :while-in-view='{ opacity: 1, y: 0 }'
                    :in-view-options='{ once: true }'
                    :transition='{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }'
                    class='rounded-2xl border border-cherry-petal bg-white p-6 shadow-sm'
                >
                    <div class='flex h-11 w-11 items-center justify-center rounded-xl bg-cherry-blossom'>
                        <BriefcaseIcon class='h-5 w-5 text-cherry-red' aria-hidden='true' />
                    </div>
                    <h3 class='mt-4 font-display text-lg font-semibold text-slate-950'>
                        {{ service.title }}
                    </h3>
                    <p class='mt-2 text-sm leading-6 text-slate-600'>
                        {{ service.description }}
                    </p>
                </Motion>
            </div>

            <div class='mt-20'>
                <div class='flex items-baseline justify-between gap-4'>
                    <h3 class='font-display text-2xl font-semibold text-slate-950'>
                        Portfolio preview
                    </h3>
                    <span class='font-mono text-xs uppercase tracking-widest text-slate-500'>
                        {{ portfolioNote }}
                    </span>
                </div>
                <div class='mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                    <div
                        v-for='item in portfolioItems'
                        :key='item.label'
                        class='flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-cherry-bloom/60 bg-white/60 text-center'
                    >
                        <PhotoIcon class='h-7 w-7 text-cherry-bloom' aria-hidden='true' />
                        <span class='font-mono text-xs font-semibold text-cherry-red'>{{ item.label }}</span>
                        <span class='font-mono text-[11px] text-slate-500'>Sample coming soon</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang='ts'>
import { Motion } from 'motion-v'
import { BriefcaseIcon, PhotoIcon } from '@heroicons/vue/24/outline'
import SectionEyebrow from '~/components/ui/SectionEyebrow.vue'
import type { ServiceItem, PortfolioPlaceholder } from '~/types/service'

interface Props {
    eyebrow?: string
    title?: string
    subtitle?: string
    services?: ServiceItem[]
    portfolioNote?: string
    portfolioItems?: PortfolioPlaceholder[]
}

withDefaults(defineProps<Props>(), {
    eyebrow: 'Services',
    title: 'Placeholder services headline',
    subtitle: 'Placeholder copy describing the range of services offered. Replace with real service details later.',
    services: () => [
        { title: 'Service One', description: 'Placeholder description of this service offering.' },
        { title: 'Service Two', description: 'Placeholder description of this service offering.' },
        { title: 'Service Three', description: 'Placeholder description of this service offering.' },
        { title: 'Service Four', description: 'Placeholder description of this service offering.' },
        { title: 'Service Five', description: 'Placeholder description of this service offering.' },
        { title: 'Service Six', description: 'Placeholder description of this service offering.' }
    ],
    portfolioNote: 'Details to be added',
    portfolioItems: () => [
        { label: 'Project One' },
        { label: 'Project Two' },
        { label: 'Project Three' }
    ]
})
</script>
