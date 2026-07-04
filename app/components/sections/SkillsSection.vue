<template>
    <section id='skills' class='bg-white py-24'>
        <div class='mx-auto max-w-6xl px-6'>
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
                    v-for='(group, index) in groups'
                    :key='group.category'
                    as='article'
                    :initial='{ opacity: 0, y: 24 }'
                    :while-in-view='{ opacity: 1, y: 0 }'
                    :in-view-options='{ once: true }'
                    :transition='{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }'
                    class='rounded-2xl border border-cherry-petal bg-cherry-blossom/40 p-6'
                >
                    <h3 class='font-display text-lg font-semibold text-slate-950'>
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
