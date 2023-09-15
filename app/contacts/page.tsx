import { Metadata } from 'next'

import { Header } from '@components/layout'
import { Contacts } from 'components/contacts'

export const metadata: Metadata = {
    title: 'Welcome to Contacts Page',
    description: 'Contacts'
}

const ContactsPage = () => <Contacts />

export default ContactsPage
