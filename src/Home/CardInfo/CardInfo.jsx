import Evolution from "./Evolution";
import TypeEffect from "./TypeEffect";
import Logo from "./Logo";

function CardInfo() {
  return (
    <div className="p-4 bg-gray-200 rounded flex gap-4">
      <Evolution text="Evolusi Pokemon" />
      <TypeEffect text="Tipe Pokemon" />
      <Logo text="Logo di Card" />
    </div>
  );
}
export default CardInfo;
