import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-16 mr-4 cursor-pointer"
            />
          </Link>
          <h1 className="text-4xl font-bold text-white">NEXTLEVEL FOOD</h1>
        </div>
        <nav>
          <Link
            href="/browse-meals"
            className="mr-6 text-white hover:text-orange-500"
          >
            Browse Meals
          </Link>
          <Link
            href="/foodies-community"
            className="text-white hover:text-orange-500"
          >
            Foodies Community
          </Link>
        </nav>
      </div>
    </header>
  );
}
