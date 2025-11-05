import Gen1 from "./Gen1";
import Gen2 from "./Gen2";
import Gen3 from "./Gen3";
import Gen4 from "./Gen4";

function Generation({ text }) {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md mt-4 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold text-blue-600 text-center mb-4">
        {text}
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <Gen1 name="Generation 1" />
        <Gen2 name="Generation 2" />
        <Gen3 name="Generation 3" />
        <Gen4 name="Generation 4" />
      </div>
    </div>
  );
}

export default Generation;
