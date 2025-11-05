import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header title="Ini Header" />
      <Home title="Ini Halaman Home" />
      <Footer title="Ini Footer" />
    </div>
  );
}

export default App;
