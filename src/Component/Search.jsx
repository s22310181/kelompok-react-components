function Search({ text }) {
  return (
    <div className="p-2 bg-blue-400 rounded">
      {text} <input type="text" className="ml-2 p-1 rounded text-black" />
    </div>
  );
}
export default Search;
