export const useSmoothScrollTo = (offset = 88) => {
    const scrollToHash = (hash: string) => {
        const id = hash.replace('#', '')
        const el = document.getElementById(id)
        if (!el) return

        const top = el.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: 'smooth' })
    }

    return { scrollToHash }
}
