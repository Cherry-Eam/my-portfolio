import type { NavLink } from '~/types/navigation'

export const useNavigation = () => {
    const links: NavLink[] = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Skills', href: '#skills' },
        { label: 'Contact', href: '#contact' }
    ]

    return { links }
}
