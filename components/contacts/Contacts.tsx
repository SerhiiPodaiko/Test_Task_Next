import classnames from 'classnames'
import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <div className={classnames('container', styles.contactsContainer)}>
                <h1>My Contacts:</h1>
                <p>
                    My experience -&nbsp;
                    <a href={process.env.NEXT_MY_EXPERIENCE} className={styles.contactsLink} target='_blank' title='Click me'>
                        here
                    </a>
                </p>
            </div>
        </section>
    )
}

export default Contacts