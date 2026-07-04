<template>
    <section id='contact' class='relative overflow-hidden bg-white py-24'>
        <div class='pointer-events-none absolute inset-0'>
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

                    <div class='mt-5 flex flex-col gap-2.5'>
                        <span class='font-mono text-[11px] uppercase tracking-widest text-slate-500'>
                            Interested in <span class='normal-case text-slate-400'>(optional)</span>
                        </span>
                        <div class='flex flex-wrap gap-2'>
                            <button
                                v-for='service in services'
                                :key='service.slug'
                                type='button'
                                class='rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors duration-200'
                                :class="selectedServices.includes(service.slug)
                                    ? 'border-cherry-red bg-cherry-red text-white'
                                    : 'border-cherry-petal bg-cherry-blossom/40 text-slate-600 hover:border-cherry-bloom hover:text-slate-800'"
                                @click='toggleService(service.slug)'
                            >
                                {{ service.title }}
                            </button>
                        </div>
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
                        :disabled='status === "sending"'
                        :while-hover='status === "sending" ? {} : { scale: 1.02, y: -2 }'
                        :while-tap='status === "sending" ? {} : { scale: 0.97 }'
                        :transition='{ type: "spring", stiffness: 400, damping: 17 }'
                        class='mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-cherry-red px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cherry-red/25 disabled:opacity-70'
                    >
                        <ArrowPathIcon v-if='status === "sending"' class='h-4 w-4 animate-spin' aria-hidden='true' />
                        {{ status === 'sending' ? 'Sending...' : 'Send Message' }}
                    </Motion>

                    <AnimatePresence>
                        <Motion
                            v-if='status === "success"'
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
                            Thanks — your message has been sent. I'll get back to you soon.
                        </Motion>

                        <Motion
                            v-else-if='status === "error"'
                            :initial='{ opacity: 0, y: 8, scale: 0.95 }'
                            :animate='{ opacity: 1, y: 0, scale: 1 }'
                            :exit='{ opacity: 0, y: 8, scale: 0.95 }'
                            :transition='{ type: "spring", stiffness: 300, damping: 20 }'
                            class='mt-5 flex items-center gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-700'
                        >
                            <ExclamationCircleIcon class='h-5 w-5 flex-shrink-0' aria-hidden='true' />
                            {{ errorMessage }}
                        </Motion>
                    </AnimatePresence>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup lang='ts'>
import { onMounted, reactive, ref } from 'vue'
import { Motion, AnimatePresence } from 'motion-v'
import { MapPinIcon, CheckCircleIcon, ExclamationCircleIcon, ArrowPathIcon } from '@heroicons/vue/24/outline'
import SectionEyebrow from '~/components/ui/SectionEyebrow.vue'
import { useServices } from '~/composables/useServices'
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
        { label: 'Email', value: 'efondocherryeam@gmail.com', href: 'mailto:efondocherryeam@gmail.com' },
        { label: 'Phone', value: '+63 963 942 5936' }
    ]
})

const services = useServices()

const form = reactive({ name: '', email: '', message: '' })
const selectedServices = ref<string[]>([])
const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const errorMessage = ref('')

const toggleService = (slug: string) => {
    selectedServices.value = selectedServices.value.includes(slug)
        ? selectedServices.value.filter((item) => item !== slug)
        : [...selectedServices.value, slug]
}

const onSubmit = async () => {
    status.value = 'sending'
    errorMessage.value = ''

    const serviceTitles = services
        .filter((service) => selectedServices.value.includes(service.slug))
        .map((service) => service.title)

    try {
        await $fetch('/api/contact', {
            method: 'POST',
            body: {
                name: form.name,
                email: form.email,
                message: form.message,
                services: serviceTitles
            }
        })

        status.value = 'success'
        form.name = ''
        form.email = ''
        form.message = ''
        selectedServices.value = []
    } catch (error) {
        status.value = 'error'
        const fetchError = error as { data?: { statusMessage?: string } }
        errorMessage.value = fetchError.data?.statusMessage || 'Something went wrong. Please try again or email me directly.'
    }
}

onMounted(() => {
    const requested = useRoute().query.service
    const slug = Array.isArray(requested) ? requested[0] : requested
    if (slug && services.some((service) => service.slug === slug)) {
        selectedServices.value = [slug]
    }
})
</script>
