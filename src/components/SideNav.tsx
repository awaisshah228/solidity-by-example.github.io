import React from "react"
import { useLocation } from "react-router-dom"
import SideNavHeader from "./SideNavHeader"
import styles from "./SideNav.module.css"
import { ROUTES_BY_CATEGORY as ROUTES_BY_CATEGORY_ver_0_5 } from "../pages/0.5"
import { ROUTES_BY_CATEGORY as ROUTES_BY_CATEGORY_ver_0_6 } from "../pages/0.6"

interface Route {
  path: string
  title: string
}

interface RoutesByCategory {
  title: string
  routes: Route[]
}

type Version = "0.5" | "0.6"

function getVersion(location: { pathname: string }): Version {
  const { pathname } = location
  const version = pathname.split("/")[1]

  if (version === "0.5" || version === "0.6") {
    return version
  } else {
    console.error(`Invalid version ${version}`)
    return "0.6"
  }
}

function getRoutes(version: Version): RoutesByCategory[] {
  if (version === "0.5") {
    return ROUTES_BY_CATEGORY_ver_0_5
  }
  return ROUTES_BY_CATEGORY_ver_0_6
}

interface Props {}

const SideNav: React.FC<Props> = (props) => {
  const location = useLocation()
  const version = getVersion(location)
  const routesByCategory = getRoutes(version)

  // TODO scroll active link to top

  return (
    <div className={styles.component}>
      <SideNavHeader version={version} />
      {routesByCategory.map(({ routes, title }, i) => (
        <div key={i}>
          {title && <h3>{title}</h3>}

          <ul>
            {routes.map(({ path, title }) => (
              <li key={path} className={styles.li}>
                <a
                  href={path}
                  className={
                    location.pathname === path ? styles.active : styles.inactive
                  }
                >
                  {title}
                </a>
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
