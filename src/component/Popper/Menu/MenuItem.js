import Button from '~/component/Button'
import styles from './Menu.module.scss'

function MenuItem({key,data}){
    return (
    
            <Button className={styles['menu-items']} leftIcon={data.icon}>
                {data.title}
            </Button>
        
    )
}

export default MenuItem