
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  image: string;
  farmer: string;
  farmerId: string;
  location: string;
  rating: number;
  category: string;
  organic: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="product-card overflow-hidden border border-gray-200">
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-48 w-full object-cover"
          />
        </Link>
        {product.organic && (
          <Badge className="absolute top-2 right-2 bg-krushi-green-dark text-white">
            Organic
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Link to={`/farmer/${product.farmerId}`} className="text-xs text-gray-500 hover:text-krushi-purple">
            {product.farmer} • {product.location}
          </Link>
          <div className="flex items-center">
            <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
            <span className="text-xs ml-1">{product.rating}</span>
          </div>
        </div>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-medium text-lg truncate hover:text-krushi-purple transition-colors">
            {product.name}
          </h3>
          <div className="flex items-baseline mt-1">
            <span className="text-lg font-bold">${product.price}</span>
            <span className="text-xs text-gray-500 ml-1">/{product.unit}</span>
          </div>
        </Link>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2 bg-krushi-purple hover:bg-krushi-purple/90">
          <ShoppingCart className="h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
