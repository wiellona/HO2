import Link from "next/link";

type FooterItem = {
  url: string;
  label: string;
};

const footerItems: FooterItem[] = [
  { url: "#Hero", label: "zero. by Wiellona" },
  { url: "https://github.com/wiellona", label: "Github" },
  { url: "https://linkedin.com/in/wiellonasaragih/", label: "LinkedIn" },
  { url: "https://instagram.com/wiellonasaragih", label: "Instagram" },
];

function Footer() {
  return (
    <footer className="bg-darkgrey py-2 fixed bottom-0 left-0 w-full flex justify-center">
      <nav className="footer-container flex justify-center bg-darkgrey">
        {footerItems.map((item) => (
          <Link key={item.url} href={item.url}>
            <div className="flex flex-col items-center px-8 bg-darkgrey">
              <p
                className={`text-xs md:text-xl font-normal bg-darkgrey text-white text-center`}
              >
                {item.label}
              </p>
            </div>
          </Link>
        ))}
      </nav>
    </footer>
  );
}

export { Footer };
