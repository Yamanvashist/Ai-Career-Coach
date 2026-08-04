import Credit from "../Credit";

const Navbar = () => {
  return (
    <nav className="flex h-16 shrink-0 items-center justify-between bg-transparent px-6 md:px-8">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
        Interview
      </h1>
      <Credit />
    </nav>
  );
};

export default Navbar;