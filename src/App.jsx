import Header from "./components/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header title="Selamat Datang di Website Kami" />
      <Content />
      <Footer text="© 2025 Kelompok React" />
    </div>
  );
}

export default App;