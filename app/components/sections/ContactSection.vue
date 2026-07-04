<template>
    <section id='contact' class='relative overflow-hidden bg-white py-24'>
        <div class='pointer-events-none absolute inset-0'>
            <div class='absolute inset-0 bg-gradient-to-tl from-cherry-blossom via-white to-cherry-petal/40' />
            <div class='absolute -bottom-32 right-[-8%] h-[24rem] w-[24rem] rounded-full bg-cherry-bloom/25 blur-3xl' />
            <div class='absolute -top-24 left-[-8%] h-[22rem] w-[22rem] rounded-full bg-cherry-red/15 blur-3xl' />
        </div>

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

            <div class='mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]'>
                <div class='rounded-3xl bg-cherry-red p-9 text-white'>
                    <h3 class='font-display text-xl font-semibold'>
                        Get in touch
                    </h3>
                    <ul class='mt-7 flex flex-col gap-6'>
                        <li v-for='detail in details' :key='detail.label' class='group flex items-start gap-4'>
                            <span class='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/15 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/25'>
                                <MapPinIcon class='h-5 w-5' aria-hidden='true' />
                            </span>
                            <span>
                                <span class='block font-mono text-[11px] uppercase tracking-widest text-white/70'>
                                    {{ detail.label }}
                                </span>
                                <a
                                    v-if='detail.href'
                                    :href='detail.href'
                                    target='_blank'
                                    rel='noopener'
                                    class='text-sm font-medium hover:underline'
                                >
                                    {{ detail.value }}
                                </a>
                                <span v-else class='text-sm font-medium'>{{ detail.value }}</span>
                            </span>
                        </li>
                    </ul>
                </div>

                <form class='rounded-3xl border border-cherry-petal bg-white p-9 shadow-sm' @submit.prevent='onSubmit'>
                    <div class='grid gap-5 sm:grid-cols-2'>
                        <label class='flex flex-col gap-2'>
                            <span class='font-mono text-[11px] uppercase tracking-widest text-slate-500'>Name</span>
                            <input
                                v-model='form.name'
                                type='text'
                                required
                                placeholder='Your full name'
                                class='border-b border-cherry-petal bg-transparent pb-2 text-sm text-slate-900 outline-none focus:border-cherry-red'
                            >
                        </label>
                        <label class='flex flex-col gap-2'>
                            <span class='font-mono text-[11px] uppercase tracking-widest text-slate-500'>Email</span>
                            <input
                                v-model='form.email'
                                type='email'
                                required
                                placeholder='you@company.com'
                                class='border-b border-cherry-petal bg-transparent pb-2 text-sm text-slate-900 outline-none focus:border-cherry-red'
                            >
                        </label>
                    </div>

                    <label class='mt-5 flex flex-col gap-2'>
                        <span class='font-mono text-[11px] uppercase tracking-widest text-slate-500'>Message</span>
                        <textarea
                            v-model='form.message'
                            required
                            rows='4'
                            placeholder='Tell me a bit about what you need help with...'
                            class='resize-y border-b border-cherry-petal bg-transparent pb-2 text-sm text-slate-900 outline-none focus:border-cherry-red'
                        />
                    </label>

                    <Motion
                        as='button'
                        type='submit'
                        :while-hover='{ scale: 1.02, y: -2 }'
                        :while-tap='{ scale: 0.97 }'
                        :transition='{ type: "spring", stiffness: 400, damping: 17 }'
                        class='mt-6 w-full rounded-full bg-cherry-red px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cherry-red/25'
                    >
                        Send Message
                    </Motion>

                    <AnimatePresence>
                        <Motion
                            v-if='submitted'
                            :initial='{ opacity: 0, y: 8, scale: 0.95 }'
                            :animate='{ opacity: 1, y: 0, scale: 1 }'
                            :exit='{ opacity: 0, y: 8, scale: 0.95 }'
                            :transition='{ type: "spring", stiffness: 300, damping: 20 }'
                            class='mt-5 flex items-center gap-2 rounded-xl bg-cherry-blossom p-4 text-sm text-slate-700'
                        >
                            <Motion
                                as='span'
                                :initial='{ scale: 0 }'
                                :animate='{ scale: 1 }'
                                :transition='{ type: "spring", stiffness: 500, damping: 12, delay: 0.1 }'
                                class='inline-flex'
                            >
                                <CheckCircleIcon class='h-5 w-5 flex-shrink-0 text-cherry-red' aria-hidden='true' />
                            </Motion>
                            Thanks — your message has been noted. I'll get back to you soon.
                        </Motion>
                    </AnimatePresence>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup lang='ts'>
import { reactive, ref } from 'vue'
import { Motion, AnimatePresence } from 'motion-v'
import { MapPinIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'
import SectionEyebrow from '~/components/ui/SectionEyebrow.vue'
import type { ContactDetail } from '~/types/contact'

interface Props {
    eyebrow?: string
    title?: string
    subtitle?: string
    details?: ContactDetail[]
}

withDefaults(defineProps<Props>(), {
    eyebrow: 'Contact',
    title: "Let's work together",
    subtitle: "I'm always excited to help businesses become more organized and efficient. If you're looking for a dependable Virtual Assistant, I'd love to connect.",
    details: () => [
        { label: 'Location', value: 'Davao City, Philippines' },
        { label: 'Email', value: 'placeholder@example.com', href: 'mailto:placeholder@example.com' },
        { label: 'Phone', value: '+00 000 000 0000' }
    ]
})

const form = reactive({ name: '', email: '', message: '' })
const submitted = ref(false)

const onSubmit = () => {
    submitted.value = true
    form.name = ''
    form.email = ''
    form.message = ''
}
</script>
