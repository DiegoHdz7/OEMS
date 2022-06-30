import React from 'react'
import styles from '/styles/Header.module.scss'
import Head from 'next/head'
import NavItem from './NavItem'

//ontario-icon-critical-alert-warning

//Imported styles

//NOTE!!!!!!!!! for using kebab-case scss classes we need to use styles['login-button'] notation


//Imported Logos
import OntarioDesktopLogo from '/public/ontario-design-system/logos/ontario-logo--desktop.svg'
import OntarioSearchIcon from '/public/ontario-design-system/icons/svg/ontario-icon-search.svg'
import MenuIcon from '/public/ontario-design-system/icons/svg/ontario-icon-menu.svg'


export default function header() {
  return (

    <div>


      <div className={styles['ontario-header']}>


        <div className={styles['ontario-header__logo-container']}>

          <a href="#" >
            <img src='/ontario-design-system/logos/ontario-logo--desktop.svg' alt="Ontario Logo"></img>
          </a>

        </div>

        <div className={styles['ontario-row']}>

          <div className={styles['ontario-header__search-container']}>
            <form >
              <label for="search-input-field"></label>
              <input required type={'text'} name="query" className={styles['ontario-header__search-input']} id="search-input-field" />
              <input type={'reset'} className={styles['ontario-header__search-reset']} id="search-reset" />


              <button className={styles['ontario-header__search-submit']}>
                <img src='/ontario-design-system/icons/svg/ontario-icon-search.svg' alt='Search Button Icon' />

              </button>

            </form>

          </div>

        </div>




        <div className={styles['ontario-header__nav-right-container']}>
          <div className={styles['ontario-header__language-toggler']}>
            <a href="#" class="language-link" hreflang="fr" data-drupal-link-system-path="node/9945">Français</a>
          </div>



          <button class={styles['ontario-header-button--with-outline']} id="header-menu-toggler" aria-controls="navigation" aria-label="open menu" type="button">

            <div className={styles['ontario-row']}>
              <MenuIcon className={styles['svg']} />
              <span>Menu</span>

            </div>


          </button>

        </div>


      </div>

    </div>








  )
}
