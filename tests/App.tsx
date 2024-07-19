import * as fs from "fs"
import { parse } from "json5"
import React, {
  useState as _useState,
  useCallback,
  useDebugValue,
  useEffect,
} from "react"
import { Operator, Comparator } from "semver"

const white = "#fff"

console.log(fs)

type styles = {
  container: React.CSSProperties
}

const styles: styles = {
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "center",
  },
}

const anObject = { name: "John" }
console.log(anObject)
const _expectedIsNotUsed = { name: "John" }

const App = function () {
  return (
    <div style={styles.container}>
      <h1>Hola, I&lsquo;m formatted by ESLint</h1>
    </div>
  )
}

export default App
