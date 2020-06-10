import React from "react"
import { Switch, Route, Redirect, useLocation } from "react-router-dom"
import styles from "./App.module.css"
import Footer from "./components/Footer"
import SideNav from "./components/SideNav"
import routes from "./routes"
import { ROUTES_BY_CATEGORY as ROUTES_BY_CATEGORY_ver_0_5 } from "./pages/0.5"
import { ROUTES_BY_CATEGORY as ROUTES_BY_CATEGORY_ver_0_6 } from "./pages/0.6"

function getSideNavRoutes(version: string) {
  if (version === "0.5") {
    return ROUTES_BY_CATEGORY_ver_0_5
  }
  return ROUTES_BY_CATEGORY_ver_0_6
}

interface Props {}

const App: React.FC<Props> = () => {
  const { pathname } = useLocation()
  const version = pathname.split("/")[0]

  const sideNavRoutes = getSideNavRoutes(version)

  return (
    <div className={styles.component}>
      <SideNav routesByCategory={sideNavRoutes} />
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.routes}>
            <Switch>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  exact
                  component={route.component}
                />
              ))}
              <Redirect path="/" to="/0.6" />
            </Switch>
          </div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
