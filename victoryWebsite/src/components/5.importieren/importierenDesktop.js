import React from "react"
import styles from "./importieren.module.scss"
import ImportierenImg from "./importierenImg"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Importieren = () => {
  return (
    <div className={styles.container}>
      <h2>IMPORTIEREN</h2>
      <h5>
        Es gibt viele Möglichkeiten, Ihr Produkt von Punkt A nach Punkt B zu
        transportieren. Die echte Frage ist, ob Ihr Spediteur dies effizient
        tut. Wir tun, was nötig ist, um jede Lieferung zu optimieren.
      </h5>
      <ImportierenImg />
      <div className={styles.text_container}>
        <p className={styles.big_p}>
          Wenn Sie in die Schweiz oder ein anderes Land importieren, muss Ihr
          Produkt bestimmten Vorschriften entsprechen.
        </p>
        <br />
        <p>
          Es besteht das Risiko, dass die Ware beim Zoll verbleibt. Um dies zu
          vermeiden, stellen wir vor dem Verladen sicher, dass es alle
          Konformitätsanforderungen erfüllt.
        </p>
      </div>
      <AnchorLink to="/#contact">
        <button>IMPORT VERWALTEN</button>
      </AnchorLink>
    </div>
  )
}

export default Importieren
