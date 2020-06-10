import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import styles from "./App.module.css"
import Footer from "./components/Footer"
import SideNav from "./components/SideNav"
import routes from "./routes"

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className={styles.component}>
      <SideNav />
      <div className={styles.main}>
        <div className={styles.content}>
          {/* TODO Header */}
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
