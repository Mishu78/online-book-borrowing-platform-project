import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="relative mt-24">
      {/* Top Divider */}
      <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.jpg"
                alt="book platform logo"
                width={32}
                height={32}
              />
              <h2 className="text-xl font-semibold text-black dark:text-white">
                Borrow&Connect
              </h2>
            </div>

            <p className="text-xs text-gray-600 dark:text-gray-400 max-w-xs">
              Discover, explore, and borrow books easily. <br /> Your digital library experience made simple.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/" className="hover:text-black dark:hover:text-white">Home</Link></li>
              <li><Link href="/all-books" className="hover:text-black dark:hover:text-white">All Books</Link></li>
              <li><Link href="/profile" className="hover:text-black dark:hover:text-white">My Profile</Link></li>
            </ul>
          </div>

          {/* Contact Us (REQUIRED) */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>Email: support@bookborrow.com</li>
              <li>Phone: +880 1234-567890</li>
              <li>Location: Dhaka, Bangladesh</li>
            </ul>
          </div>

          {/* Social Links (REQUIRED) */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
              <Link href="#" className="hover:text-black dark:hover:text-white"><FaFacebook /> Facebook</Link>
              <Link href="#" className="hover:text-black dark:hover:text-white"><FaTwitter /> Twitter</Link>
              <Link href="#" className="hover:text-black dark:hover:text-white"><FaLinkedin /> LinkedIn</Link>
            </div>
          </div>

        </div>

        {/* Bottom Divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} BookBorrow. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-black dark:hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-black dark:hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;