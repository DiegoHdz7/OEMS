import React from 'react'
import Head  from 'next/head'

//Imported Styles
import styles from '/styles/NavItem.module.scss'


//Imported Logos
import OntarioDesktopLogo from '/public/ontario-design-system/logos/ontario-logo--desktop.svg'
import OntarioSearchIcon from '/public/ontario-design-system/icons/svg/ontario-icon-search.svg'

export default function NavItem() {
    return (
        <div className=''>

            <Head>

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
            </Head>

            <a className="navbar-brand" href="#" > <OntarioDesktopLogo className={styles.ontarioLogo}/></a>
           
           <div>
           <input type={"text"}></input>
            <button> <OntarioSearchIcon/> </button>

           </div>
            
           
        </div>
    )
}


/**
  <nav className="navbar navbar-expand-lg" id={styles.navbar}>

            
                <div className="container-fluid navBar" >
                    <a className="navbar-brand" href="#" > <OntarioDesktopLogo className={styles.ontarioLogo}/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div class="container-fluid">
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div />


    
                    </div>
                </div>
            </nav>
 */
