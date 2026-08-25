import Credit from "../Credit";

const Navbar = () => {
  return (
    <nav className="h-20 flex items-center justify-between px-6 md:px-8 shrink-0 border-b border-transparent dark:border-slate-800/50 transition-colors">
      <h1 className="font-bold text-2xl text-slate-900 dark:text-white tracking-tight">
        Resume Review
      </h1>
      <Credit />
    </nav>
  );
};

export default Navbar;  