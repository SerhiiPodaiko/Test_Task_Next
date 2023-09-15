'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import classnames from 'classnames'

import styles from './Header.module.css'
import logoSVG from '@public/icons/logo.svg'
import { PAGE_SLUGS } from '@constants/pages'
import { useTheme } from '@hooks/useTheme'
import DarkMoonSVG from '@public/icons/moon.svg'
import LightSunSVG from '@public/icons/sun.svg'

const links = [
    { title: 'Home', path: PAGE_SLUGS.home },
    { title: 'Contacts', path: PAGE_SLUGS.contacts },
    { title: 'Login', path: PAGE_SLUGS.login },
    { title: 'Register', path: PAGE_SLUGS.register }
]

const Header = () => {
    const pathname = usePathname()
    const { setTheme } = useTheme()

    return (
        <header className={styles.header}>
            <div className={classnames('container', styles.headerContainer)}>
                <Link href={PAGE_SLUGS.home} className={styles.headerLogo}>
                    <Image src={logoSVG} alt='Logo' width={50} height={50} />
                </Link>
                <div className={styles.headerTheme}>
                    <Image
                        src={DarkMoonSVG}
                        width={30}
                        height={50}
                        className={styles.headerThemeToggle}
                        onClick={() => setTheme('dark')} alt='Dark' />
                    <Image
                        src={LightSunSVG}
                        width={30}
                        height={50}
                        className={styles.headerThemeToggle}
                        onClick={() => setTheme('light')} alt='Light' />
                </div>
                <nav className={styles.headerNavigation}>
                    {links?.map((link) => (
                        <Link
                            key={link.title}
                            href={link.path}
                            className={`${pathname === link.path && styles.headerNavigationLinkActive} ${styles.headerNavigationLink}`}>
                            {link.title}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Header