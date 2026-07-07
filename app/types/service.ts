export interface ServiceCaseStudy {
    title: string
    challenge: string
    solution: string
    results: string[]
}

export interface PortfolioSample {
    title: string
    type: 'image' | 'video' | 'embed'
    src: string
}

export interface PortfolioCategory {
    label: string
    samples: PortfolioSample[]
}

export interface ServiceItem {
    title: string
    slug: string
    tagline: string
    items: string[]
    tools?: string[]
    caseStudy?: ServiceCaseStudy
    portfolioCategories?: PortfolioCategory[]
}
