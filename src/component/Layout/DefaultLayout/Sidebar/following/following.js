import AccountItem from '~/component/AccountIem'
import styles from './following.module.scss'

function Following(){
    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <span className={styles.title}>Following account</span>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
            </div>
        </div>
    )
}

export default Following