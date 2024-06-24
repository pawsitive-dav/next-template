import Link from "next/link";

export default function Footer() {
  const nodeEnv = process.env.NODE_ENV;

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h5 className="text-lg font-bold mb-2">Company Name</h5>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>
      <hr className="border-t border-gray-600 my-6" />
      <div className="text-center text-sm">
        © {new Date().getFullYear()} InspectPro. All rights reserved.
        <span className="px-2">{toTitleCase(nodeEnv)}</span>
      </div>
    </footer>
  );
}

function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
