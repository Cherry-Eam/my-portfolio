<template>
    <header
        class='fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-colors duration-300'
        :class="isScrolled ? 'border-cherry-petal/70 bg-white/90 shadow-sm shadow-cherry-bloom/5' : 'border-transparent bg-white/60'"
    >
        <div class='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
            <a href='#home' class='flex items-center gap-2.5' @click.prevent='onNavClick("#home")'>
                <img src='/img/cherry-logo.png' alt='Cherry Mae' class='h-10 w-10 rounded-xl object-cover'>
                <span class='font-display text-lg font-semibold text-cherry-red'>Cherry Mae</span>
            </a>

            <nav class='relative hidden items-center gap-8 md:flex' aria-label='Primary'>
                <a
                    v-for='link in links'
                    :key='link.href'
                    :href='link.href'
                    class='relative py-1.5 text-sm font-medium transition-colors'
                    :class="isActive(link.href) ? 'text-cherry-red' : 'text-slate-600 hover:text-slate-900'"
                    @click.prevent='onNavClick(link.href)'
                    @mouseenter='hoveredHref = link.href'
                    @mouseleave='hoveredHref = null'
                >
                    {{ link.label }}
                    <Motion
                        v-if='isActive(link.href)'
                        layout-id='nav-pill'
                        :transition='{ type: "spring", stiffness: 500, damping: 32 }'
                        class='absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-cherry-red'
                    />
                </a>
            </nav>

            <div class='flex items-center gap-3'>
                <div
                    class='relative hidden sm:block'
                    @mouseenter='isHireHovered = true'
                    @mouseleave='isHireHovered = false'
                >
                    <FallingPetals :active='isHireHovered' />
                    <PetalBurst :burst-count='hireBurstCount' />
                    <Motion
                        as='a'
                        href='#contact'
                        :while-hover='{ scale: 1.04, y: -2 }'
                        :while-tap='{ scale: 0.96 }'
                        :transition='{ type: "spring", stiffness: 400, damping: 17 }'
                        class='inline-flex items-center rounded-full bg-cherry-red px-5 py-2 text-sm font-semibold text-white shadow-md shadow-cherry-red/20'
                        @click='onHireClick'
                    >
                        Hire Me
                    </Motion>
                </div>
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
                    class='rounded-lg px-2 py-2 font-display text-base font-medium transition-colors'
                    :class="isActive(link.href) ? 'bg-cherry-blossom text-cherry-red' : 'text-slate-800 hover:bg-cherry-blossom'"
                    @click.prevent='onNavClick(link.href, true)'
                >
                    {{ link.label }}
                </a>
                <a
                    href='#contact'
                    class='mt-2 inline-flex items-center justify-center rounded-full bg-cherry-red px-5 py-2 text-sm font-semibold text-white'
                    @click.prevent='onNavClick("#contact", true)'
                >
                    Hire Me
                </a>
            </div>
        </Motion>
    </header>
</template>

<script setup lang='ts'>
import { onMounted, onUnmounted, ref } from 'vue'
import { Motion } from 'motion-v'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useNavigation } from '~/composables/useNavigation'
import { useActiveSection } from '~/composables/useActiveSection'
import { useSmoothScrollTo } from '~/composables/useSmoothScrollTo'
import FallingPetals from '~/components/ui/FallingPetals.vue'
import PetalBurst from '~/components/ui/PetalBurst.vue'

const { links } = useNavigation()
const isOpen = ref(false)
const hoveredHref = ref<string | null>(null)
const isScrolled = ref(false)
const isHireHovered = ref(false)
const hireBurstCount = ref(0)

const activeId = useActiveSection(links.map((link) => link.href.replace('#', '')))
const { scrollToHash } = useSmoothScrollTo()

const isActive = (href: string) => {
    if (hoveredHref.value) return hoveredHref.value === href
    return `#${activeId.value}` === href
}

const onNavClick = (href: string, closeMenu = false) => {
    scrollToHash(href)
    if (closeMenu) isOpen.value = false
}

const onHireClick = () => {
    hireBurstCount.value += 1
    onNavClick('#contact')
}

const onScroll = () => {
    isScrolled.value = window.scrollY > 24
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
