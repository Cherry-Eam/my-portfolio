import { onMounted, onUnmounted, ref } from 'vue'

export const useActiveSection = (ids: string[]) => {
    const activeId = ref(ids[0] ?? '')
    let observer: IntersectionObserver | null = null

    onMounted(() => {
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) activeId.value = entry.target.id
                })
            },
            { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
        )

        ids.forEach((id) => {
            const el = document.getElementById(id)
            if (el) observer?.observe(el)
        })
    })

    onUnmounted(() => observer?.disconnect())

    return activeId
}
