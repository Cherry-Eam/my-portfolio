export interface ServiceCaseStudy {
    title: string
    challenge: string
    solution: string
    results: string[]
}

export interface ServiceItem {
    title: string
    slug: string
    tagline: string
    items: string[]
    tools?: string[]
    caseStudy?: ServiceCaseStudy
}
