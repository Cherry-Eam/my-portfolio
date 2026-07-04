<template>
    <footer class='border-t border-cherry-petal bg-cherry-blossom'>
        <div class='mx-auto max-w-6xl px-6 py-14'>
            <div class='flex flex-wrap items-start justify-between gap-10 border-b border-cherry-petal pb-10'>
                <div class='max-w-xs'>
                    <p class='font-display text-lg font-semibold text-slate-950'>
                        Cherry
                    </p>
                    <p class='mt-3 text-sm leading-6 text-slate-600'>
                        Placeholder tagline — details about the business and its promise go here.
                    </p>
                </div>

                <div class='flex gap-14'>
                    <div>
                        <h5 class='font-mono text-xs font-semibold uppercase tracking-widest text-slate-500'>
                            Navigate
                        </h5>
                        <ul class='mt-4 flex flex-col gap-2'>
                            <li v-for='link in links' :key='link.href'>
                                <a :href='link.href' class='text-sm text-slate-700 hover:text-cherry-red'>
                                    {{ link.label }}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 class='font-mono text-xs font-semibold uppercase tracking-widest text-slate-500'>
                            Connect
                        </h5>
                        <ul class='mt-4 flex flex-col gap-2'>
                            <li>
                                <span class='text-sm text-slate-700'>Placeholder — WhatsApp</span>
                            </li>
                            <li>
                                <span class='text-sm text-slate-700'>Placeholder — Facebook</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class='flex flex-wrap items-center justify-between gap-3 pt-6 font-mono text-xs text-slate-500'>
                <span>&copy; {{ year }} Cherry. All Rights Reserved.</span>
                <span>Placeholder footer note.</span>
            </div>
        </div>
    </footer>
</template>

<script setup lang='ts'>
import { useNavigation } from '~/composables/useNavigation'

const { links } = useNavigation()
const year = new Date().getFullYear()
</script>
