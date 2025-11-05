import Logo from "./Logo";
import Search from "./Search";
import Generations from "./Generations/Generations";

function Header({ title }) {
  return (
    <header className="bg-blue-600 text-white p-4 text-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex justify-around mt-4">
        <Logo text="Logo dari Header" />
        <Search text="Search Bar" />
        <Generations />
      </div>
    </header>
  );
}

export default Header;
