import React from "react"
import SideNavHeader from "./SideNavHeader"
import styles from "./SideNav.module.css"

interface Route {
  path: string
  title: string
}

interface Props {
  routesByCategory: { title: string; routes: Route[] }[]
}

const SideNav: React.FC<Props> = ({ routesByCategory }) => {
  return (
    <div className={styles.component}>
      <SideNavHeader />
      {routesByCategory.map(({ routes, title }, i) => (
        <div key={i}>
          {title && <h3>{title}</h3>}

          <ul>
            {routes.map(({ path, title }) => (
              <li key={path}>
                <a href={path}>{title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className={styles.footer}></div>
    </div>
  )
}

export default SideNav
