import Credit from "../Credit"

const Navbar = () => {
    return (
        <nav className="flex h-16 shrink-0 items-center justify-between bg-white/10 px-6 md:px-8">
            <h1 className="text-3xl font-semibold text-slate-900">Interview</h1>
            <Credit />
        </nav>
    )
}

export default Navbar