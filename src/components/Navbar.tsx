import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-secondary py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-playfair text-primary">
            Villa Gourmet
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-primary transition-colors">
              Início
            </Link>
            <Link to="/cardapio" className="text-white hover:text-primary transition-colors">
              Cardápio
            </Link>
            <Link to="/admin" className="text-white hover:text-primary transition-colors">
              Área Administrativa
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-secondary">
            <div className="flex flex-col space-y-4 py-4">
              <Link
                to="/"
                className="text-white hover:text-primary transition-colors px-4"
                onClick={() => setIsOpen(false)}
              >
                Início
              </Link>
              <Link
                to="/cardapio"
                className="text-white hover:text-primary transition-colors px-4"
                onClick={() => setIsOpen(false)}
              >
                Cardápio
              </Link>
              <Link
                to="/admin"
                className="text-white hover:text-primary transition-colors px-4"
                onClick={() => setIsOpen(false)}
              >
                Área Administrativa
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;