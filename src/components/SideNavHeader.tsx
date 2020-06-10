import React from "react"
import styles from "./SideNavHeader.module.css"
import logo from "./logo.svg"

interface Props {
  version: "0.5" | "0.6"
}

const SideNavHeader: React.FC<Props> = ({ version }) => {
  // NOTE: need to use links for versions so that react-snap can crawl
  return (
    <div className={styles.component}>
      <a href="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </a>

      <h3 className={styles.header}>
        <a href="/">Solidity by Example</a>

        <div className={styles.versions}>
          <div className={styles.version}>version</div>
          <a
            href="/0.6"
            className={version === "0.6" ? styles.active : styles.inactive}
          >
            0.6
          </a>
          <div className={styles.bar}> | </div>
          <a
            href="/0.5"
            className={version === "0.5" ? styles.active : styles.inactive}
          >
            0.5
          </a>
        </div>
      </h3>
    </div>
  )
}

export default SideNavHeader
