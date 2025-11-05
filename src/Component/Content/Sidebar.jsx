function Sidebar({ text }) {
  return (
    <aside className="w-1/4 bg-gray-200 p-4">
      <h2 className="font-semibold">{text}</h2>
    </aside>
  );
}
export default Sidebar;
