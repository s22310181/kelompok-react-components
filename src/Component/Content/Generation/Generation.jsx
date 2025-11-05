import Gen1 from "./Gen1";
import Gen2 from "./Gen2";
import Gen3 from "./Gen3";
import Gen4 from "./Gen4";

function Generations() {
  return (
    <div className="p-2 bg-blue-400 rounded">
      <p className="font-semibold mb-2">Generations:</p>
      <div className="flex gap-2">
        <Gen1 text="Gen 1" />
        <Gen2 text="Gen 2" />
        <Gen3 text="Gen 3" />
        <Gen4 text="Gen 4" />
      </div>
    </div>
  );
}
export default Generations;
