import Styles from './Header.module.scss'
import classNames from 'classnames'
function Header(){

    return(
        <header className={Styles.Wrapper}>
            <div className={Styles.inner}></div>
        </header>
    )
}

export default Header