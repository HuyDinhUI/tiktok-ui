import styles from './sidebar.module.scss'

function Sidebar(){

    return(
        <div class={styles.divSideNavPlaceHolderConaiter}>
            <div class={styles.divSideNavConainer}>
                <div class={styles.divAnimationCover}>
                </div>
                <div class={styles.divFixedContentContainer}>
                    <div class={styles.divLogoWrapper}>
                        <a style={{position:'relative'}} class={styles.StylesLinkLogo} aria-label='Go to my feed'>
                            <img class={styles.styleLogoLight} src={require('~/assest/img/1200px-TikTok_logo.svg.png')}></img>
                        </a>
                    </div>
                </div>
                <div class={styles.divSrollingContentContainer}></div>

            </div>

        </div>
    )
}

export default Sidebar