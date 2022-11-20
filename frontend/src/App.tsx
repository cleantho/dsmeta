import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/header";
import PersonButton from "./components/personButton";
import SalesCard from "./components/salesCard";

function App() {
  return (
    <>
    <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <SalesCard />
        </section>
      </main>
    </>
  );
}

export default App;
