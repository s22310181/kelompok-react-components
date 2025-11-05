import CardInfo from "./CardInfo/CardInfo.jsx";

function Home({ title }) {
  return (
    <main className="flex-1 p-4 bg-white">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <CardInfo />
    </main>
  );
}
export default Home;
