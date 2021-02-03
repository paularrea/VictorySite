import React from "react"
import HomeOne from "./homeOne"
import styles from "./intro.module.scss"
import MediaQuery from "react-responsive"
import DesktopIntro from "./desktopIntro"

const Intro = () => {
  return (
    <>
      <MediaQuery maxWidth={700}>
        <div id='home' name='scrollMark' className={styles.container}>
          <HomeOne />
          <div className={styles.intro_container}>
            <h2>B2B Unternehmen auf dem schweizer Markt</h2>
            <h4>Wir verkaufen spezifische Lösungen.</h4>
            <div className={styles.btn_container}>
              <button>RUFEN SIE UNS AN</button>
              <button>DEN SHOP BESUCHEN</button>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={700}>
        <DesktopIntro />
      </MediaQuery>
    </>
  )
}

export default Intro
