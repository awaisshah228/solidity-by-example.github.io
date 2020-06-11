import React from "react"
import styles from "./Header.module.css"

interface Props {
  onClick: () => void
}

const Header: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.component}>
      <button className={styles.icon} onClick={(_e) => onClick()}>
        <i className="fas fa-bars" />
      </button>
    </div>
  )
}

export default Header
