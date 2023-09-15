import Link from 'next/link'
import Image from 'next/image'

import styles from './Footer.module.css'
import logoSVG from '@public/icons/logo.svg'
import { PAGE_SLUGS } from '@constants/pages'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <Image src={logoSVG} width={50} height={50} className={styles.footerLogo} alt='Logo' />
                <nav className={styles.footerNavigation}>
                    <Link href={PAGE_SLUGS.home} className={styles.footerNavigationLink}>
                        Home
                    </Link>
                    <Link href={PAGE_SLUGS.contacts} className={styles.footerNavigationLink}>
                        Contact
                    </Link>
                    <Link href={PAGE_SLUGS.login} className={styles.footerNavigationLink}>
                        Login
                    </Link>
                    <Link href={PAGE_SLUGS.register} className={styles.footerNavigationLink}>
                        Register
                    </Link>
                </nav>
            </div>
        </footer>
    )
}

export default Footer