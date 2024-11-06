import Link from "next/link";

interface NavbarProps {
  showLinks?: boolean;
}

const Navbar = ({ showLinks = true }: NavbarProps) => {
  return (
    <nav className="flex justify-between items-center py-4 px-2">
      <div className="flex items-center gap-[1ch]">
        <div className="w-5 h-5 bg-[#ff5e1a] rounded-full" />
        <span className="text-sm font-semibold tracking-widest">
          <Link href="/">Jamie Say</Link>
        </span>
      </div>
      {showLinks && (
        <div className="hidden lg:flex gap-12 text-md text-zinc-400">
          {/* <Link
            href="#about"
            className="hover:text-[#ff5e1a] active:text-black font-medium"
          >
            About
          </Link>
          <Link href="#projects" className="hover:text-[#ff5e1a] font-medium">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-[#ff5e1a] font-medium">
            Contact
          </Link> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
