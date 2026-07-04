<template>
    <footer class='border-t border-cherry-petal bg-white'>
        <div class='mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 py-8 sm:flex-row sm:justify-between'>
            <p class='font-mono text-xs text-slate-500'>
                &copy; {{ year }} Cherry Mae. All Rights Reserved.
            </p>

            <div class='flex items-center gap-4'>
                <div class='flex items-center gap-2'>
                    <Motion
                        v-for='social in socialLinks'
                        :key='social.label'
                        as='a'
                        :href='social.href'
                        target='_blank'
                        rel='noopener'
                        :aria-label='social.label'
                        :while-hover='{ y: -2 }'
                        :while-tap='{ scale: 0.92 }'
                        :transition='{ type: "spring", stiffness: 400, damping: 20 }'
                        class='flex h-9 w-9 items-center justify-center rounded-full bg-cherry-blossom text-cherry-red transition-colors hover:bg-cherry-petal'
                    >
                        <BrandIcon :icon='social.icon' />
                    </Motion>
                </div>

                <Motion
                    as='button'
                    type='button'
                    :while-hover='{ y: -2 }'
                    :while-tap='{ scale: 0.96 }'
                    :transition='{ type: "spring", stiffness: 400, damping: 20 }'
                    class='inline-flex items-center gap-1.5 rounded-full border border-cherry-petal px-4 py-2 text-xs font-semibold text-cherry-red transition-colors hover:border-cherry-red'
                    @click='scrollToTop'
                >
                    Back to top
                    <ArrowUpIcon class='h-3.5 w-3.5' aria-hidden='true' />
                </Motion>
            </div>
        </div>
    </footer>
</template>

<script setup lang='ts'>
import { Motion } from 'motion-v'
import { ArrowUpIcon } from '@heroicons/vue/24/outline'
import { siInstagram, siFacebook } from 'simple-icons'
import BrandIcon from '~/components/ui/BrandIcon.vue'

const year = new Date().getFullYear()

// LinkedIn's logo isn't in the simple-icons package (removed for trademark reasons),
// so this is the standard "in" glyph path (Font Awesome's linkedin-in mark, 448x512 viewBox).
const siLinkedin = {
    title: 'LinkedIn',
    viewBox: '0 0 448 512',
    path: 'M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
}

const socialLinks = [
    { label: 'Instagram', href: '#', icon: siInstagram },
    { label: 'Facebook', href: '#', icon: siFacebook },
    { label: 'LinkedIn', href: '#', icon: siLinkedin }
]

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
