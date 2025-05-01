
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import CategoryFilter from "@/components/marketplace/CategoryFilter";
import PriceFilter from "@/components/marketplace/PriceFilter";
import LocationFilter from "@/components/marketplace/LocationFilter";
import SortOptions from "@/components/marketplace/SortOptions";
import ProductCard, { Product } from "@/components/marketplace/ProductCard";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { mockProducts } from "@/data/mockProducts";
import { useIsMobile } from "@/hooks/use-mobile";

const Marketplace = () => {
  const isMobile = useIsMobile();
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(!isMobile);
  
  // Filter states
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [sortOption, setSortOption] = useState("recommended");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    filterProducts();
  };

  const filterProducts = () => {
    let filtered = [...mockProducts];
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.farmer.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => selectedCategories.includes(product.category));
    }
    
    // Apply price filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply location filter
    if (selectedLocation !== "All Locations") {
      filtered = filtered.filter(product => product.location === selectedLocation);
    }
    
    // Apply sorting
    switch (sortOption) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        // This would typically use createdAt date, but for demo we'll just randomize
        filtered.sort(() => Math.random() - 0.5);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // 'recommended' - default sorting (could be an algorithm, but we'll leave as is)
        break;
    }
    
    setProducts(filtered);
  };

  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
    setTimeout(filterProducts, 0);
  };

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange([min, max]);
    setTimeout(filterProducts, 0);
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    setTimeout(filterProducts, 0);
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
    setTimeout(filterProducts, 0);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Marketplace</h1>
            <p className="text-gray-600">Browse fresh produce directly from local farmers</p>
          </div>
          <div className="mt-4 md:mt-0 w-full md:w-auto">
            <form onSubmit={handleSearch} className="flex w-full md:w-80 relative">
              <Input 
                placeholder="Search products or farmers..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10"
              />
              <Button 
                type="submit" 
                size="icon" 
                variant="ghost" 
                className="absolute right-0 top-0 h-full"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile filter toggle */}
          <div className="md:hidden w-full mb-4">
            <Button 
              onClick={toggleFilters} 
              variant="outline" 
              className="w-full flex justify-between items-center"
            >
              <span>{showFilters ? "Hide Filters" : "Show Filters"}</span>
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Filters sidebar */}
          {showFilters && (
            <div className="w-full md:w-64 space-y-6 animate-fade-in">
              <CategoryFilter onFilterChange={handleCategoryChange} />
              <PriceFilter onFilterChange={handlePriceChange} />
              <LocationFilter onFilterChange={handleLocationChange} />
            </div>
          )}
          
          {/* Product grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-500">
                Showing <span className="font-medium">{products.length}</span> products
              </p>
              <SortOptions onSortChange={handleSortChange} />
            </div>
            
            {products.length === 0 ? (
              <div className="text-center py-20 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
                <Button onClick={() => {
                  setSearchQuery("");
                  setSelectedCategories([]);
                  setPriceRange([0, 1000]);
                  setSelectedLocation("All Locations");
                  setSortOption("recommended");
                  setProducts(mockProducts);
                }}>
                  Reset all filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Marketplace;
