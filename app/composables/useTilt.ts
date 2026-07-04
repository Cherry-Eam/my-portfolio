import { ref } from 'vue'

export const useTilt = (maxDegrees = 8) => {
    const rotateX = ref(0)
    const rotateY = ref(0)

    const onMouseMove = (event: MouseEvent) => {
        const target = event.currentTarget as HTMLElement
        const bounds = target.getBoundingClientRect()
        const x = (event.clientX - bounds.left) / bounds.width - 0.5
        const y = (event.clientY - bounds.top) / bounds.height - 0.5
        rotateY.value = x * maxDegrees * 2
        rotateX.value = -y * maxDegrees * 2
    }

    const onMouseLeave = () => {
        rotateX.value = 0
        rotateY.value = 0
    }

    return { rotateX, rotateY, onMouseMove, onMouseLeave }
}
