import React from "react"
import { shallow } from "enzyme"
import App from "./App"

test("it renders", () => {
  const component = shallow(<App />)

  expect(component).toMatchSnapshot()
})

test("0.5 side nav", () => {
  expect(true).toEqual(false)
})

test("0.6 side nav", () => {
  expect(true).toEqual(false)
})
