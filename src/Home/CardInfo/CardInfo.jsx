import Evolution from "./Evolution";
import TypeEffect from "./TypeEffect";
import Logo from "./Logo";

function CardInfo({ text }) {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md mt-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold text-green-600 text-center mb-4">
        {text}
      </h2>

      <div className="flex flex-col gap-3">
        <Evolution info="This is the Evolution component" />
        <TypeEffect info="This is the Type Effect component" />
        <Logo info="This is the Logo component inside CardInfo" />
      </div>
    </div>
  );
}

export default CardInfo;
