<template>
    <section
        id='skills'
        class='relative bg-cherry-red py-28 [clip-path:polygon(0_40px,100%_0,100%_calc(100%-40px),0_100%)] sm:[clip-path:polygon(0_64px,100%_0,100%_calc(100%-64px),0_100%)]'
    >
        <div class='pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,theme(colors.white/25%)_1px,transparent_0)] [background-size:28px_28px]' aria-hidden='true' />

        <div class='relative mx-auto max-w-6xl px-6'>
            <Motion
                as='div'
                :initial='{ opacity: 0, y: 24 }'
                :while-in-view='{ opacity: 1, y: 0 }'
                :in-view-options='{ once: true }'
                :transition='{ duration: 0.5, ease: "easeOut" }'
                class='max-w-2xl'
            >
                <SectionEyebrow :label='eyebrow' tone='inverted' />
                <h2 class='mt-4 font-display text-3xl font-semibold text-white sm:text-4xl'>
                    {{ title }}
                </h2>
                <p class='mt-4 text-base leading-7 text-white/80'>
                    {{ subtitle }}
                </p>
            </Motion>

            <div class='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                <Motion
                    v-for='(group, index) in groups'
                    :key='group.category'
                    as='article'
                    :initial='{ opacity: 0, y: 24 }'
                    :while-in-view='{ opacity: 1, y: 0 }'
                    :in-view-options='{ once: true }'
                    :transition='{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }'
                    class='rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm'
                >
                    <h3 class='font-display text-lg font-semibold text-white'>
                        {{ group.category }}
                    </h3>
                    <div class='mt-4 flex flex-wrap gap-2'>
                        <span
                            v-for='item in group.items'
                            :key='item'
                            class='rounded-full bg-white px-3 py-1 text-xs font-medium text-cherry-red'
                        >
                            {{ item }}
                        </span>
                    </div>
                </Motion>
            </div>
        </div>
    </section>
</template>

<script setup lang='ts'>
import { Motion } from 'motion-v'
import SectionEyebrow from '~/components/ui/SectionEyebrow.vue'
import type { SkillGroup } from '~/types/skill'

interface Props {
    eyebrow?: string
    title?: string
    subtitle?: string
    groups?: SkillGroup[]
}

withDefaults(defineProps<Props>(), {
    eyebrow: 'Skills',
    title: 'Placeholder skills headline',
    subtitle: 'Placeholder copy describing key skill areas. Replace with the real skill set later.',
    groups: () => [
        { category: 'Category One', items: ['Skill', 'Skill', 'Skill'] },
        { category: 'Category Two', items: ['Skill', 'Skill', 'Skill'] },
        { category: 'Category Three', items: ['Skill', 'Skill', 'Skill'] }
    ]
})
</script>
