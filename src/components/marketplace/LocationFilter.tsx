
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface LocationFilterProps {
  onFilterChange: (location: string) => void;
}

const locations = [
  "All Locations",
  "North Region",
  "South Region",
  "East Region",
  "West Region",
  "Central Region",
];

const LocationFilter = ({ onFilterChange }: LocationFilterProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mt-6">
      <h3 className="font-semibold text-lg mb-4">Location</h3>
      <Select defaultValue="All Locations" onValueChange={onFilterChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select location" />
        </SelectTrigger>
        <SelectContent>
          {locations.map((location) => (
            <SelectItem key={location} value={location}>
              {location}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LocationFilter;
