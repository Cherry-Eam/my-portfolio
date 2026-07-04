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
                class='mt-14 grid overflow-hidden rounded-3xl border border-cherry-petal bg-white shadow-xl shadow-cherry-bloom/10 md:grid-cols-[300px_1fr]'
            >
                <div class='flex flex-col gap-1.5 border-b border-cherry-petal bg-cherry-blossom/40 p-3 md:border-b-0 md:border-r md:p-4' role='tablist' aria-label='Services'>
                    <Motion
                        v-for='(service, index) in services'
                        :key='service.title'
                        as='button'
                        type='button'
                        role='tab'
                        :aria-selected='index === activeIndex'
                        :while-hover='index === activeIndex ? {} : { x: 4 }'
                        :transition='{ type: "spring", stiffness: 400, damping: 25 }'
                        class='group relative flex items-center gap-3 rounded-xl border-l-4 py-3 pl-3.5 pr-4 text-left transition-colors duration-200'
                        :class="index === activeIndex
                            ? 'z-10 border-cherry-red bg-white shadow-md shadow-cherry-bloom/10 md:translate-x-2'
                            : 'border-transparent text-slate-500 hover:bg-white/70 hover:text-slate-700'"
                        @click='activeIndex = index'
                    >
                        <span
                            class='flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg transition-colors duration-200'
                            :class="index === activeIndex ? 'bg-cherry-red text-white' : 'bg-white text-cherry-bloom'"
                        >
                            <component :is='icons[index % icons.length]' class='h-4.5 w-4.5' aria-hidden='true' />
                        </span>
                        <span class='min-w-0'>
                            <span class='block font-mono text-[10px] uppercase tracking-widest opacity-60'>
                                {{ String(index + 1).padStart(2, '0') }}
                            </span>
                            <span
                                class='block truncate font-display text-sm font-semibold'
                                :class="index === activeIndex ? 'text-cherry-red' : 'text-slate-700'"
                            >
                                {{ service.title }}
                            </span>
                        </span>
                    </Motion>
                </div>

                <div class='relative min-h-[26rem] p-8 sm:p-12'>
                    <AnimatePresence mode='wait'>
                        <Motion
                            :key='activeIndex'
                            as='div'
                            :initial='{ opacity: 0, x: 16 }'
                            :animate='{ opacity: 1, x: 0 }'
                            :exit='{ opacity: 0, x: -16 }'
                            :transition='{ duration: 0.3, ease: "easeOut" }'
                            class='flex h-full flex-col'
                        >
                            <Motion
                                as='div'
                                :initial='{ scale: 0.6, opacity: 0 }'
                                :animate='{ scale: 1, opacity: 1 }'
                                :transition='{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }'
                                class='flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-cherry-blossom'
                            >
                                <component :is='icons[activeIndex % icons.length]' class='h-7 w-7 text-cherry-red' aria-hidden='true' />
                            </Motion>
                            <h3 class='mt-6 font-display text-2xl font-semibold text-slate-950'>
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

                            <div v-if='activeService.tools?.length' class='mt-7'>
                                <span class='font-mono text-[10px] uppercase tracking-widest text-slate-400'>
                                    Tools &amp; Platforms
                                </span>
                                <div class='mt-2.5 flex flex-wrap gap-2'>
                                    <span
                                        v-for='tool in activeService.tools'
                                        :key='tool'
                                        class='rounded-full bg-cherry-blossom px-3 py-1 text-xs font-medium text-slate-700'
                                    >
                                        {{ tool }}
                                    </span>
                                </div>
                            </div>

                            <div v-if='activeService.caseStudy' class='mt-7 rounded-2xl border border-cherry-petal bg-cherry-blossom/30 p-5'>
                                <span class='font-mono text-[10px] uppercase tracking-widest text-cherry-red'>
                                    Sample Case Study
                                </span>
                                <h4 class='mt-1.5 font-display text-base font-semibold text-slate-950'>
                                    {{ activeService.caseStudy.title }}
                                </h4>
                                <p class='mt-2.5 text-sm leading-6 text-slate-600'>
                                    <span class='font-semibold text-slate-700'>Challenge:</span> {{ activeService.caseStudy.challenge }}
                                </p>
                                <p class='mt-1.5 text-sm leading-6 text-slate-600'>
                                    <span class='font-semibold text-slate-700'>Solution:</span> {{ activeService.caseStudy.solution }}
                                </p>
                                <div class='mt-3.5 flex flex-wrap gap-2'>
                                    <span
                                        v-for='result in activeService.caseStudy.results'
                                        :key='result'
                                        class='inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-cherry-red'
                                    >
                                        <CheckCircleIcon class='h-3.5 w-3.5' aria-hidden='true' />
                                        {{ result }}
                                    </span>
                                </div>
                            </div>

                            <div class='mt-7 flex items-center justify-between gap-4 border-t border-cherry-blossom pt-6'>
                                <span class='font-mono text-[11px] uppercase tracking-widest text-slate-400'>
                                    {{ String(activeIndex + 1).padStart(2, '0') }} / {{ String(services.length).padStart(2, '0') }}
                                </span>
                                <a
                                    href='#contact'
                                    class='group inline-flex items-center gap-1.5 text-sm font-semibold text-cherry-red'
                                >
                                    Interested in this service?
                                    <ArrowRightIcon class='h-4 w-4 transition-transform duration-200 group-hover:translate-x-1' aria-hidden='true' />
                                </a>
                            </div>
                        </Motion>
                    </AnimatePresence>
                </div>
            </Motion>
        </div>
    </section>
</template>

<script setup lang='ts'>
import { computed, ref } from 'vue'
import { Motion, AnimatePresence } from 'motion-v'
import {
    ArrowRightIcon,
    CheckCircleIcon,
    CalendarDaysIcon,
    MegaphoneIcon,
    ChartBarIcon,
    BanknotesIcon,
    PhoneIcon,
    UserGroupIcon,
    FilmIcon,
    EnvelopeIcon,
    PencilSquareIcon
} from '@heroicons/vue/24/outline'
import SectionEyebrow from '~/components/ui/SectionEyebrow.vue'
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
    subtitle: 'From executive support to content and campaigns, here is where I can plug in and take work off your plate.',
    services: () => [
        {
            title: 'Executive Assistant',
            tagline: 'I help founders, CEOs, and business owners stay organized by handling administrative tasks, calendar management, communication, documentation, and day-to-day operations.',
            items: ['Calendar Management', 'Appointment Scheduling', 'Inbox Management', 'Travel Planning', 'Meeting Coordination', 'CRM Updates', 'Document Preparation', 'SOP Documentation', 'Research', 'Data Entry', 'File Organization', 'Project Coordination', 'Team Communication', 'Task Management', 'Client Follow-ups'],
            tools: ['Google Workspace', 'Microsoft Office', 'Slack', 'Zoom', 'Calendly', 'Canva', 'ChatGPT', 'Claude AI'],
            caseStudy: {
                title: 'Organized Daily Operations for a Growing Agency',
                challenge: 'The business owner was overwhelmed with emails, meetings, and administrative work, leaving little time for business development.',
                solution: 'Implemented a structured calendar, organized inbox workflows, documented internal SOPs, prioritized daily tasks, and streamlined communication.',
                results: ['Reduced scheduling conflicts', 'Faster email response times', 'Improved task visibility', 'More time for strategic growth']
            }
        },
        {
            title: 'Social Media Manager',
            tagline: 'I manage social media accounts by creating engaging content, planning posting schedules, monitoring performance, and building a strong online presence.',
            items: ['Content Planning', 'Content Calendar', 'Caption Writing', 'Canva Design', 'Carousel Creation', 'Reels Planning', 'Community Management', 'Hashtag Research', 'Analytics Reporting', 'Competitor Research', 'Scheduling Posts', 'Brand Consistency'],
            tools: ['Facebook', 'Instagram', 'LinkedIn', 'X', 'TikTok', 'Threads', 'YouTube', 'Canva', 'Meta Business Suite', 'CapCut', 'ChatGPT'],
            caseStudy: {
                title: 'Improved Brand Consistency Through Strategic Content Planning',
                challenge: "The client's social media lacked consistency, resulting in low engagement and irregular posting.",
                solution: 'Developed a monthly content calendar, created branded templates, scheduled posts, and monitored analytics to optimize performance.',
                results: ['Consistent posting schedule', 'Improved audience engagement', 'Stronger brand identity', 'Better content organization']
            }
        },
        {
            title: 'Digital Marketing Specialist',
            tagline: 'I help businesses grow through strategic digital marketing campaigns focused on attracting, nurturing, and converting customers using multiple online channels.',
            items: ['Marketing Strategy', 'Lead Generation', 'Analytics Reporting', 'Competitor Analysis', 'Campaign Planning', 'Marketing Automation', 'CRM Management'],
            tools: ['Google Analytics', 'Google Search Console', 'Meta Ads Manager', 'Canva', 'GoHighLevel'],
            caseStudy: {
                title: 'Built an Integrated Marketing Workflow',
                challenge: 'The business had multiple marketing tools but no streamlined process.',
                solution: 'Connected lead forms, email automation, CRM management, and reporting dashboards into one workflow.',
                results: ['Faster lead management', 'Better campaign tracking', 'Improved customer journey', 'More organized marketing operations']
            }
        },
        {
            title: 'Bookkeeping',
            tagline: 'I assist businesses with organizing financial records, maintaining accurate transactions, and preparing reports that support informed business decisions.',
            items: ['Expense Tracking', 'Income Recording', 'Invoice Management', 'Accounts Payable', 'Accounts Receivable', 'Bank Reconciliation', 'Financial Reports', 'Monthly Bookkeeping', 'Data Accuracy', 'Record Organization'],
            tools: ['QuickBooks', 'Excel', 'Google Sheets'],
            caseStudy: {
                title: 'Organized Monthly Financial Records',
                challenge: 'Financial records were spread across multiple spreadsheets and receipts.',
                solution: 'Consolidated transactions, categorized expenses, reconciled accounts, and prepared monthly reports.',
                results: ['Improved financial accuracy', 'Easier reporting', 'Better expense visibility', 'Organized bookkeeping workflow']
            }
        },
        {
            title: 'Cold Calling / Sales Calling',
            tagline: 'I help businesses generate opportunities by engaging prospects through professional outbound calls, qualifying leads, scheduling appointments, and maintaining positive customer interactions.',
            items: ['Cold Calling', 'Appointment Setting', 'Lead Qualification', 'CRM Updates', 'Follow-up Calls', 'Sales Scripts', 'Discovery Calls', 'Customer Support', 'Pipeline Management'],
            tools: ['Zoom Phone', 'RingCentral', 'GoHighLevel', 'CloudTalk Phone'],
            caseStudy: {
                title: 'Increased Qualified Appointments',
                challenge: 'The company needed more qualified meetings with potential clients.',
                solution: 'Followed structured call scripts, qualified leads, updated CRM records, and scheduled appointments for the sales team.',
                results: ['More qualified appointments', 'Better CRM accuracy', 'Improved customer experience', 'Consistent follow-up process']
            }
        },
        {
            title: 'Account Success Manager',
            tagline: 'I help businesses strengthen client relationships by ensuring customers receive excellent support, achieve their goals, and continue using company services successfully.',
            items: ['Client Onboarding', 'Customer Success', 'Account Management', 'Relationship Building', 'Client Communication', 'Product Training', 'Retention Strategies', 'Renewal Management', 'Issue Resolution', 'Customer Reporting'],
            tools: ['Google Meet', 'Slack', 'Zoom', 'CloudTalk Phone', 'Spreadsheet'],
            caseStudy: {
                title: 'Improved Client Communication',
                challenge: 'Clients experienced delayed responses and inconsistent communication.',
                solution: 'Created standardized onboarding processes, regular check-ins, and organized communication channels.',
                results: ['Faster response times', 'Improved client satisfaction', 'Better account organization', 'Stronger long-term relationships']
            }
        },
        {
            title: 'Video Editing & Graphic Design',
            tagline: 'I create professional visual content that helps brands communicate effectively across social media, websites, advertisements, and marketing campaigns.',
            items: ['Short-form Videos', 'Reels & TikTok Videos', 'YouTube Shorts', 'Promotional Videos', 'Motion Graphics', 'Social Media Posts', 'Banners & Flyers', 'Presentations & Pitch Decks', 'Brand Templates', 'Infographics'],
            tools: ['Canva Pro', 'CapCut', 'Adobe Premiere Pro', 'Adobe Photoshop', 'Adobe Illustrator'],
            caseStudy: {
                title: 'Developed Consistent Visual Branding',
                challenge: 'The client lacked cohesive branding across marketing materials.',
                solution: 'Created branded templates, edited promotional videos, and designed consistent social media graphics.',
                results: ['Stronger brand recognition', 'Professional visual identity', 'Faster content production', 'Consistent marketing materials']
            }
        },
        {
            title: 'Email Marketing & Newsletter',
            tagline: 'I help businesses connect with customers through strategic email campaigns that educate, nurture, and encourage action while maintaining consistent brand communication.',
            items: ['Newsletter Creation', 'Campaign Setup', 'Email Copywriting', 'Email Design', 'List Segmentation', 'Automation', 'Welcome Sequences', 'Promotional Campaigns', 'Performance Reporting'],
            tools: ['Mailchimp', 'Beehiiv', 'LinkedIn Newsletter'],
            caseStudy: {
                title: 'Built a Customer Email Workflow',
                challenge: 'The business had no structured email communication.',
                solution: 'Designed branded newsletters, created automated email sequences, and organized subscriber segmentation.',
                results: ['Consistent customer communication', 'Better audience engagement', 'Organized email marketing process', 'Improved campaign management']
            }
        },
        {
            title: 'Copywriting',
            tagline: 'I write persuasive, clear, and engaging content that helps businesses communicate their message, strengthen their brand, and encourage customer action.',
            items: ['Website Copy', 'Landing Pages', 'Sales Pages', 'Social Media Captions', 'Email Copy', 'Newsletters', 'Product Descriptions', 'Blog Articles', 'Ad Copy', 'Call-to-Action Writing'],
            caseStudy: {
                title: 'Strengthened Marketing Messaging',
                challenge: 'The business needed clearer messaging to communicate its value proposition.',
                solution: 'Rewrote website copy, email campaigns, and social media captions with a consistent brand voice and stronger calls to action.',
                results: ['Clearer messaging', 'Improved brand consistency', 'More engaging content', 'Better customer communication']
            }
        }
    ]
})

const icons = [CalendarDaysIcon, MegaphoneIcon, ChartBarIcon, BanknotesIcon, PhoneIcon, UserGroupIcon, FilmIcon, EnvelopeIcon, PencilSquareIcon]
const activeIndex = ref(0)
const activeService = computed(() => props.services[activeIndex.value] ?? props.services[0]!)
</script>
