
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl bg-gradient-to-r from-krushi-green-dark to-krushi-purple bg-clip-text text-transparent">
              KRUSHI
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link to="/" className="hover:text-krushi-purple">Home</Link>
            <Link to="/marketplace" className="hover:text-krushi-purple font-medium">Marketplace</Link>
            <Link to="/farmers" className="hover:text-krushi-purple">Farmers</Link>
            <Link to="/about" className="hover:text-krushi-purple">About</Link>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-2 relative max-w-sm w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            className="pl-10 pr-4 py-2 w-full rounded-full bg-gray-50" 
            placeholder="Search products, farmers..."
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/profile">
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <div className="hidden sm:block">
            <Button className="bg-krushi-purple hover:bg-krushi-purple/90 ml-2">
              Sell Products
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
