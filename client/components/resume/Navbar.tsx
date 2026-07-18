import Credit from "../Credit";

const Navbar = () => {
  return (
    <nav className="h-20 flex items-center justify-between px-6 md:px-8 shrink-0">
      <h1 className="font-bold text-2xl text-slate-900 tracking-tight">
        RefineAi Review
      </h1>
      <Credit />
    </nav>
  );
};

export default Navbar;
