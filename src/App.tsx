import React, { useState } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import styles from "./App.module.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SideNav from "./components/SideNav"
import routes from "./routes"

interface Props {}

const App: React.FC<Props> = () => {
  const [showSideNav, setSideNav] = useState(true)

  return (
    <div className={styles.component}>
      {showSideNav && <SideNav />}
      <div className={styles.main}>
        <div className={styles.content}>
          <Header onClick={() => setSideNav(!showSideNav)} />
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
