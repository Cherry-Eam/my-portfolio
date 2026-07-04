<template>
    <header class='fixed inset-x-0 top-0 z-50 border-b border-cherry-petal/70 bg-white/80 backdrop-blur-md'>
        <div class='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
            <a href='#home' class='font-display text-lg font-semibold text-slate-950'>
                Cherry
            </a>

            <nav class='hidden items-center gap-8 md:flex' aria-label='Primary'>
                <a
                    v-for='link in links'
                    :key='link.href'
                    :href='link.href'
                    class='text-sm font-medium text-slate-600 transition-colors hover:text-cherry-red'
                >
                    {{ link.label }}
                </a>
            </nav>

            <div class='flex items-center gap-3'>
                <a
                    href='#contact'
                    class='hidden items-center rounded-full bg-cherry-red px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-cherry-red/90 sm:inline-flex'
                >
                    Hire Me
                </a>
                <button
                    type='button'
                    class='inline-flex h-10 w-10 items-center justify-center rounded-full border border-cherry-petal text-slate-700 md:hidden'
                    :aria-expanded='isOpen'
                    aria-label='Toggle navigation menu'
                    @click='isOpen = !isOpen'
                >
                    <Bars3Icon v-if='!isOpen' class='h-5 w-5' aria-hidden='true' />
                    <XMarkIcon v-else class='h-5 w-5' aria-hidden='true' />
                </button>
            </div>
        </div>

        <Motion
            v-if='isOpen'
            as='nav'
            :initial='{ opacity: 0, height: 0 }'
            :animate='{ opacity: 1, height: "auto" }'
            :exit='{ opacity: 0, height: 0 }'
            class='overflow-hidden border-t border-cherry-petal/70 bg-white md:hidden'
            aria-label='Mobile'
        >
            <div class='flex flex-col gap-1 px-6 py-4'>
                <a
                    v-for='link in links'
                    :key='link.href'
                    :href='link.href'
                    class='rounded-lg px-2 py-2 font-display text-base font-medium text-slate-800 hover:bg-cherry-blossom'
                    @click='isOpen = false'
                >
                    {{ link.label }}
                </a>
                <a
                    href='#contact'
                    class='mt-2 inline-flex items-center justify-center rounded-full bg-cherry-red px-5 py-2 text-sm font-semibold text-white'
                    @click='isOpen = false'
                >
                    Hire Me
                </a>
            </div>
        </Motion>
    </header>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { Motion } from 'motion-v'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useNavigation } from '~/composables/useNavigation'

const { links } = useNavigation()
const isOpen = ref(false)
</script>
