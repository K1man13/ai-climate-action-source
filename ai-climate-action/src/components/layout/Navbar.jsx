import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">AI for Climate Action</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-accent transition-colors">Home</a>
          <a href="#about" className="hover:text-accent transition-colors">About SDG 13</a>
          <a href="#energy" className="hover:text-accent transition-colors">Energy Optimization</a>
          <a href="#weather" className="hover:text-accent transition-colors">Weather Prediction</a>
          <a href="#renewable" className="hover:text-accent transition-colors">Renewable Energy</a>
          <a href="#resources" className="hover:text-accent transition-colors">Resources</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#home" className="hover:text-accent transition-colors" onClick={toggleMenu}>Home</a>
            <a href="#about" className="hover:text-accent transition-colors" onClick={toggleMenu}>About SDG 13</a>
            <a href="#energy" className="hover:text-accent transition-colors" onClick={toggleMenu}>Energy Optimization</a>
            <a href="#weather" className="hover:text-accent transition-colors" onClick={toggleMenu}>Weather Prediction</a>
            <a href="#renewable" className="hover:text-accent transition-colors" onClick={toggleMenu}>Renewable Energy</a>
            <a href="#resources" className="hover:text-accent transition-colors" onClick={toggleMenu}>Resources</a>
            <a href="#contact" className="hover:text-accent transition-colors" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

