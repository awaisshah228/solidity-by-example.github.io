import React from "react"

interface Props {
  routes: { path: string }[]
}

const SideNav: React.FC<Props> = ({ routes }) => {
  return (
    <div
      style={{
        width: 300,
        backgroundColor: "#fafafa",
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <ul>
        {routes.map((route) => (
          <li key={route.path}>{route.path}</li>
        ))}
      </ul>
    </div>
  )
}

export default SideNav
