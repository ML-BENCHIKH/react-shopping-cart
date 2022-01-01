import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { words } from "./words";

function App() {
  return (
    <div className="layout">
      <Header />
      <main>{words.Content}</main>
      <Footer />
    </div>
  );
}

export default App;
