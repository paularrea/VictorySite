import React from "react"
import styles from "./produktDesign.module.scss"
import PDImg from "./pdImg"
import MediaQuery from "react-responsive"
import PDDesktopImg from "./pdDesktopImg"
import { Parallax } from "react-scroll-parallax"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const ProduktDesign = () => {
  return (
    <div id="services" className={styles.container}>
      <div data-sal="fade" data-sal-delay="200" data-sal-duration="800">
        <h2>PRODUKTDESIGN</h2>
        <h4>Non-Food Konzept</h4>
        <h5>
          Ein erfolgreicher Verkauf beginnt mit einem guten Design. Victory
          Switzerland bringt Ihr Produkt direkt zum Markt.
        </h5>
      </div>
      <hr />
      <div className={styles.flex_container}>
        <Parallax className={styles.parallax} x={[-10, 12]} tagOuter="figure">
          <MediaQuery maxWidth={800}>
            <PDImg />
          </MediaQuery>
          <MediaQuery minWidth={800}>
            <PDDesktopImg />
          </MediaQuery>
        </Parallax>
        <div
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-duration="800"
          data-sal-easing="ease"
          className={styles.text_container}
        >
          <p className={styles.big_p}>
            Wir begleiten Sie von A bis Z und verwandeln Ihre Idee in ein
            handfestes Produkt. Folgen Sie dem Prozess Schritt für Schritt. Sie
            bringen den Wahnsinn, wir bringen die Technik.
          </p>
          <br />
          <p>
            Unsere Designer-Community ist in der Lage, aus einer Idee, die einem
            einfachen Stück Papier entspringt, oder aus einem tiefer gehenden
            Konzept ein Produkt zu entwickeln.
          </p>
          <br />
          <p>
            Haben Sie ein trendiges Produkt auf dem Markt entdeckt? Machen Sie
            es besser und überflügeln Sie Ihr Konkurrent.
          </p>
          <AnchorLink to="/#contact">
            <button>PLANUNG STARTEN</button>
          </AnchorLink>
        </div>
      </div>
    </div>
  )
}

export default ProduktDesign
