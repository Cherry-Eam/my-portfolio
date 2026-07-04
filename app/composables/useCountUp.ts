import { ref, onMounted, onUnmounted } from 'vue'

export const useCountUp = (target: number, duration = 1200) => {
    const current = ref(0)
    const elementRef = ref<HTMLElement | null>(null)
    let started = false
    let observer: IntersectionObserver | null = null

    const animate = () => {
        const start = performance.now()
        const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            current.value = Math.round(target * eased)
            if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
    }

    onMounted(() => {
        observer = new IntersectionObserver((entries) => {
            if (entries[0]?.isIntersecting && !started) {
                started = true
                animate()
            }
        }, { threshold: 0.4 })

        if (elementRef.value) observer.observe(elementRef.value)
    })

    onUnmounted(() => observer?.disconnect())

    return { current, elementRef }
}
