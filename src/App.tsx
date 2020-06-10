import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import styles from "./App.module.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SideNav from "./components/SideNav"
import routes from "./routes"

function App() {
  return (
    <div className={styles.component}>
      <SideNav routes={routes} />
      <div className={styles.main}>
        <div className={styles.content}>
          <Header />
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
