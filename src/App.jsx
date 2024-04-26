import A from "./components/A"
import { CounterProvider } from "./utils/CounterContext"
function App() {
  return (
    <>
      <CounterProvider>
        <A/>
      </CounterProvider>
    </>
  )
}

export default App
