
import { Slider } from "@/components/ui/slider";
import { useState, useEffect } from "react";

interface PriceFilterProps {
  onFilterChange: (min: number, max: number) => void;
  maxPriceLimit?: number;
}

const PriceFilter = ({ onFilterChange, maxPriceLimit = 1000 }: PriceFilterProps) => {
  const [priceRange, setPriceRange] = useState([0, maxPriceLimit]);
  
  useEffect(() => {
    // Initial filter setup
    onFilterChange(priceRange[0], priceRange[1]);
  }, []);

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
    onFilterChange(values[0], values[1]);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 mt-6">
      <h3 className="font-semibold text-lg mb-4">Price Range</h3>
      <Slider
        defaultValue={priceRange}
        min={0}
        max={maxPriceLimit}
        step={10}
        value={priceRange}
        onValueChange={handlePriceChange}
        className="my-6"
      />
      <div className="flex justify-between items-center mt-2">
        <div className="bg-gray-50 px-2 py-1 rounded text-sm">
          ${priceRange[0]}
        </div>
        <div className="bg-gray-50 px-2 py-1 rounded text-sm">
          ${priceRange[1]}
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
