import {
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
import type { ServiceItem } from '~/types/service'

export const useServices = (): ServiceItem[] => [
    {
        title: 'Executive Assistant',
        slug: 'executive-assistant',
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
        slug: 'social-media-manager',
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
        slug: 'digital-marketing-specialist',
        tagline: 'I help businesses grow through strategic digital marketing campaigns focused on attracting, nurturing, and converting customers using multiple online channels.',
        items: ['Marketing Strategy', 'Lead Generation', 'Analytics Reporting', 'Competitor Analysis', 'Campaign Planning', 'Marketing Automation', 'CRM Management'],
        tools: ['Meta Ads Manager', 'Canva', 'GoHighLevel'],
        caseStudy: {
            title: 'Built an Integrated Marketing Workflow',
            challenge: 'The business had multiple marketing tools but no streamlined process.',
            solution: 'Connected lead forms, email automation, CRM management, and reporting dashboards into one workflow.',
            results: ['Faster lead management', 'Better campaign tracking', 'Improved customer journey', 'More organized marketing operations']
        }
    },
    {
        title: 'Bookkeeping',
        slug: 'bookkeeping',
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
        slug: 'cold-calling-sales-calling',
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
        slug: 'account-success-manager',
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
        slug: 'video-editing-graphic-design',
        tagline: 'I create professional visual content that helps brands communicate effectively across social media, websites, advertisements, and marketing campaigns.',
        items: ['Short-form Videos', 'Reels & TikTok Videos', 'YouTube Shorts', 'Promotional Videos', 'Motion Graphics', 'Social Media Posts', 'Banners & Flyers', 'Presentations & Pitch Decks', 'Brand Templates', 'Infographics'],
        tools: ['Canva Pro', 'CapCut', 'Adobe Photoshop'],
        caseStudy: {
            title: 'Developed Consistent Visual Branding',
            challenge: 'The client lacked cohesive branding across marketing materials.',
            solution: 'Created branded templates, edited promotional videos, and designed consistent social media graphics.',
            results: ['Stronger brand recognition', 'Professional visual identity', 'Faster content production', 'Consistent marketing materials']
        }
    },
    {
        title: 'Email Marketing & Newsletter',
        slug: 'email-marketing-newsletter',
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
        slug: 'copywriting',
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

export const serviceIcons = [CalendarDaysIcon, MegaphoneIcon, ChartBarIcon, BanknotesIcon, PhoneIcon, UserGroupIcon, FilmIcon, EnvelopeIcon, PencilSquareIcon]
