import Header from "./components/header"
import PersonButton from "./components/personButton"
import SalesCard from "./components/salesCard"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <SalesCard />
        </section>
      </main>
    </>
  )
}

export default App
