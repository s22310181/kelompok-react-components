import Sidebar from "./Sidebar";
import Article from "./Article";

function Content() {
  return (
    <main className="flex flex-1">
      <Sidebar text="Menu Navigasi" />
      <Article text="Ini adalah isi artikel utama." />
    </main>
  );
}
export default Content;
