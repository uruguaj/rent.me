import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 bg-zinc-900">
      <div className="container mx-auto flex flex-col items-center">
        <nav className="mb-4">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Rent A Car
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Packages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Contact Information</h4>
          <p>Email: info@rentme.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-3">
            <a
              href="https://uruguaj.com"
              className="text-blue-400 hover:text-blue-600"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/uruguaj"
              className="text-blue-400 hover:text-blue-600"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/uruguaj"
              className="text-blue-400 hover:text-blue-600"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Rent.Me Car Rental. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
