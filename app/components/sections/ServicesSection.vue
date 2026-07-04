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

            <Motion
                as='div'
                :initial='{ opacity: 0, y: 24 }'
                :while-in-view='{ opacity: 1, y: 0 }'
                :in-view-options='{ once: true }'
                :transition='{ duration: 0.5, ease: "easeOut", delay: 0.1 }'
                class='mt-14'
            >
                <div class='relative'>
                    <div class='overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
                        <div class='flex w-max gap-x-1 border-b border-cherry-petal' role='tablist' aria-label='Services'>
                            <button
                                v-for='(service, index) in services'
                                :key='service.title'
                                type='button'
                                role='tab'
                                :aria-selected='index === activeIndex'
                                class='relative -mb-px shrink-0 rounded-t-lg border border-b-0 px-5 py-3 font-mono text-xs font-medium tracking-wide transition-colors duration-200'
                                :class="index === activeIndex
                                    ? 'z-10 border-cherry-petal bg-white text-cherry-red'
                                    : 'border-transparent bg-cherry-blossom/70 text-slate-500 hover:border-cherry-petal/60 hover:text-slate-700'"
                                @click='activeIndex = index'
                            >
                                {{ String(index + 1).padStart(2, '0') }} &middot; {{ service.title }}
                            </button>
                        </div>
                    </div>
                    <div class='pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent' aria-hidden='true' />
                </div>

                <div class='relative'>
                    <div class='pointer-events-none absolute inset-x-5 -bottom-2.5 h-10 rounded-b-3xl bg-cherry-petal/50' aria-hidden='true' />
                    <div class='pointer-events-none absolute inset-x-10 -bottom-5 h-10 rounded-b-3xl bg-cherry-blossom/70' aria-hidden='true' />

                    <div class='relative min-h-[26rem] rounded-b-3xl rounded-tr-3xl border-x border-b border-cherry-petal bg-white p-8 shadow-xl shadow-cherry-bloom/10 sm:p-12'>
                        <AnimatePresence mode='wait'>
                            <Motion
                                :key='activeIndex'
                                as='div'
                                :initial='{ opacity: 0, y: 12 }'
                                :animate='{ opacity: 1, y: 0 }'
                                :exit='{ opacity: 0, y: -12 }'
                                :transition='{ duration: 0.3, ease: "easeOut" }'
                                class='flex h-full flex-col'
                            >
                                <div class='grid gap-8 sm:grid-cols-[auto_1fr]'>
                                    <div class='flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-cherry-blossom'>
                                        <component :is='icons[activeIndex % icons.length]' class='h-7 w-7 text-cherry-red' aria-hidden='true' />
                                    </div>
                                    <div>
                                        <h3 class='font-display text-2xl font-semibold text-slate-950'>
                                            {{ activeService.title }}
                                        </h3>
                                        <p class='mt-2 text-sm text-slate-500'>
                                            {{ activeService.tagline }}
                                        </p>
                                        <ul class='mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2'>
                                            <li
                                                v-for='item in activeService.items'
                                                :key='item'
                                                class='flex items-center gap-2.5 text-sm text-slate-600'
                                            >
                                                <span class='h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cherry-bloom' aria-hidden='true' />
                                                {{ item }}
                                            </li>
                                        </ul>

                                        <div v-if='activeService.tools?.length' class='mt-6'>
                                            <span class='font-mono text-[10px] uppercase tracking-widest text-slate-400'>
                                                Tools &amp; Platforms
                                            </span>
                                            <div class='mt-2.5 mb-2.5 flex flex-wrap gap-2'>
                                                <span
                                                    v-for='tool in activeService.tools'
                                                    :key='tool'
                                                    class='rounded-full bg-cherry-blossom px-3 py-1 text-xs font-medium text-slate-700'
                                                >
                                                    {{ tool }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class='mt-auto flex items-center justify-between gap-4 border-t border-cherry-blossom pt-6 sm:ml-24'>
                                    <span class='font-mono text-[11px] uppercase tracking-widest text-slate-400'>
                                        {{ String(activeIndex + 1).padStart(2, '0') }} / {{ String(services.length).padStart(2, '0') }}
                                    </span>
                                    <NuxtLink
                                        :to='`/services/${activeService.slug}`'
                                        class='group inline-flex items-center gap-1.5 text-sm font-semibold text-cherry-red'
                                    >
                                        See case study &amp; portfolio
                                        <ArrowRightIcon class='h-4 w-4 transition-transform duration-200 group-hover:translate-x-1' aria-hidden='true' />
                                    </NuxtLink>
                                </div>
                            </Motion>
                        </AnimatePresence>
                    </div>
                </div>
            </Motion>
        </div>
    </section>
</template>

<script setup lang='ts'>
import { computed, ref } from 'vue'
import { Motion, AnimatePresence } from 'motion-v'
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import SectionEyebrow from '~/components/ui/SectionEyebrow.vue'
import { useServices, serviceIcons } from '~/composables/useServices'
import type { ServiceItem } from '~/types/service'

interface Props {
    eyebrow?: string
    title?: string
    subtitle?: string
    services?: ServiceItem[]
}

const props = withDefaults(defineProps<Props>(), {
    eyebrow: 'Services',
    title: 'Nine ways I keep your business moving',
    subtitle: 'From executive support to content and campaigns, here is where I can plug in and take work off your plate. Click through for the full case study and portfolio samples.',
    services: () => useServices()
})

const icons = serviceIcons
const activeIndex = ref(0)
const activeService = computed(() => props.services[activeIndex.value] ?? props.services[0]!)
</script>
