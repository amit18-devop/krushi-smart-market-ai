
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface Category {
  id: string;
  name: string;
}

const categories: Category[] = [
  { id: "vegetables", name: "Vegetables" },
  { id: "fruits", name: "Fruits" },
  { id: "dairy", name: "Dairy Products" },
  { id: "grains", name: "Grains & Cereals" },
  { id: "herbs", name: "Herbs & Spices" },
  { id: "organic", name: "Organic Certified" },
];

interface CategoryFilterProps {
  onFilterChange: (selectedCategories: string[]) => void;
}

const CategoryFilter = ({ onFilterChange }: CategoryFilterProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) => {
      const newSelection = prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId];
      
      onFilterChange(newSelection);
      return newSelection;
    });
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    onFilterChange([]);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Categories</h3>
        {selectedCategories.length > 0 && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearFilters}
            className="text-xs text-krushi-purple hover:text-krushi-purple/90"
          >
            Clear
          </Button>
        )}
      </div>
      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center space-x-2">
            <Checkbox
              id={`category-${category.id}`}
              checked={selectedCategories.includes(category.id)}
              onCheckedChange={() => toggleCategory(category.id)}
            />
            <label
              htmlFor={`category-${category.id}`}
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {category.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
