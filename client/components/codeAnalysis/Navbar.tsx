import Credit from "../Credit";

const Navbar = () => {
  return (
    <nav className="h-20 bg-transparent flex items-center justify-between px-6 md:px-8 shrink-0">
      <div>
        <h1 className="font-bold text-2xl text-slate-900 dark:text-white tracking-tight">
          Code Analysis
        </h1>
        <p className="hidden md:text-gray-600 dark:text-slate-400 sm:block">
          Get AI feedback and improvement for your code.
        </p>
      </div>
      <Credit />
    </nav>
  );
};

export default Navbar;