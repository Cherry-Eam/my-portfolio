<template>
    <div v-if='service' class='bg-white'>
        <section class='relative overflow-hidden bg-cherry-blossom pb-16 pt-40'>
            <div class='pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_1px_1px,theme(colors.cherry.bloom/30%)_1px,transparent_0)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]' aria-hidden='true' />

            <div class='relative mx-auto max-w-4xl px-6'>
                <NuxtLink to='/#services' class='inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-cherry-red'>
                    <ArrowLeftIcon class='h-3.5 w-3.5' aria-hidden='true' />
                    Back to Services
                </NuxtLink>

                <div class='mt-6 flex items-center gap-4'>
                    <div class='flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm'>
                        <component :is='icon' class='h-7 w-7 text-cherry-red' aria-hidden='true' />
                    </div>
                    <h1 class='font-display text-3xl font-semibold text-slate-950 sm:text-4xl'>
                        {{ service.title }}
                    </h1>
                </div>
                <p class='mt-5 max-w-2xl text-lg leading-7 text-slate-600'>
                    {{ service.tagline }}
                </p>
            </div>
        </section>

        <section class='py-16'>
            <div class='mx-auto grid max-w-4xl gap-12 px-6'>
                <div>
                    <SectionEyebrow label='What I Do' />
                    <ul class='mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2'>
                        <li v-for='item in service.items' :key='item' class='flex items-center gap-2.5 text-sm text-slate-600'>
                            <span class='h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cherry-bloom' aria-hidden='true' />
                            {{ item }}
                        </li>
                    </ul>
                </div>

                <div v-if='service.tools?.length'>
                    <SectionEyebrow label='Tools & Platforms' />
                    <div class='mt-5 flex flex-wrap gap-2'>
                        <span v-for='tool in service.tools' :key='tool' class='rounded-full bg-cherry-blossom px-3.5 py-1.5 text-sm font-medium text-slate-700'>
                            {{ tool }}
                        </span>
                    </div>
                </div>

                <div v-if='service.caseStudy' class='rounded-3xl border border-cherry-petal bg-cherry-blossom/30 p-8 sm:p-10'>
                    <SectionEyebrow label='Sample Case Study' />
                    <h2 class='mt-3 font-display text-2xl font-semibold text-slate-950'>
                        {{ service.caseStudy.title }}
                    </h2>
                    <p class='mt-4 text-base leading-7 text-slate-600'>
                        <span class='font-semibold text-slate-800'>Challenge:</span> {{ service.caseStudy.challenge }}
                    </p>
                    <p class='mt-3 text-base leading-7 text-slate-600'>
                        <span class='font-semibold text-slate-800'>Solution:</span> {{ service.caseStudy.solution }}
                    </p>
                    <div class='mt-5 flex flex-wrap gap-2'>
                        <span
                            v-for='result in service.caseStudy.results'
                            :key='result'
                            class='inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-cherry-red'
                        >
                            <CheckCircleIcon class='h-4 w-4' aria-hidden='true' />
                            {{ result }}
                        </span>
                    </div>
                </div>

                <div>
                    <div class='flex items-baseline justify-between gap-4'>
                        <SectionEyebrow label='Portfolio' />
                        <span class='font-mono text-xs uppercase tracking-widest text-slate-400'>Samples coming soon</span>
                    </div>
                    <div class='mt-5 grid gap-4 sm:grid-cols-3'>
                        <div
                            v-for='n in 3'
                            :key='n'
                            class='flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-cherry-bloom/60 bg-cherry-blossom/20 text-center'
                        >
                            <PhotoIcon class='h-7 w-7 text-cherry-bloom' aria-hidden='true' />
                            <span class='font-mono text-[11px] text-slate-500'>Work sample placeholder</span>
                        </div>
                    </div>
                </div>

                <div class='flex flex-col items-start gap-4 border-t border-cherry-blossom pt-8 sm:flex-row sm:items-center sm:justify-between'>
                    <p class='text-sm text-slate-600'>
                        Interested in {{ service.title }}?
                    </p>
                    <NuxtLink
                        :to="{ path: '/', hash: '#contact', query: { service: service.slug } }"
                        class='inline-flex items-center justify-center gap-1.5 rounded-full bg-cherry-red px-6 py-3 text-sm font-semibold text-white'
                    >
                        Get in touch
                        <ArrowRightIcon class='h-4 w-4' aria-hidden='true' />
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>

    <div v-else class='flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-white px-6 pt-24 text-center'>
        <p class='font-display text-2xl font-semibold text-slate-950'>Service not found</p>
        <NuxtLink to='/#services' class='text-sm font-semibold text-cherry-red'>Back to Services</NuxtLink>
    </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue'
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, PhotoIcon } from '@heroicons/vue/24/outline'
import SectionEyebrow from '~/components/ui/SectionEyebrow.vue'
import { useServices, serviceIcons } from '~/composables/useServices'

const route = useRoute()
const services = useServices()

const serviceIndex = computed(() => services.findIndex((item) => item.slug === route.params.slug))
const service = computed(() => (serviceIndex.value === -1 ? null : services[serviceIndex.value]))
const icon = computed(() => serviceIcons[serviceIndex.value % serviceIcons.length])
</script>
