import Link from "next/link";

type NavItem = {
  url: string;
  label: string;
};

const navItems: NavItem[] = [
  { url: "#Hero", label: "zero." },
  { url: "#roles", label: "Start Here" },
  { url: "#courses", label: "Free Courses" },
  { url: "#videos", label: "Videos" },
  { url: "#ContactMe", label: "Contact Me" },
];

function Header() {
  return (
    <div className="pt-4 bottom-4 md:top-0 fixed mx-auto w-full z-10 h-fit text-lightgrey hover:text-white">
      <nav
        className={`flex bg-invert justify-center m-auto items-center gap-8 font-semibold py-4 px-8 rounded-full w-fit bg-darkgrey`}
      >
        {navItems.map((item) => (
          <Link key={item.url} href={item.url}>
            <div className="flex items-center flex-col gap-1">
              <p className={`text-xs md:text-lg bg-darkgrey font-light`}>
                {item.label}
              </p>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export { Header };
