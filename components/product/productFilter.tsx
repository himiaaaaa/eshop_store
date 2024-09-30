"use client";

import { ChevronDownIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

const sortOptions = [
  { name: "Price: Low to High", value: "Price: Low to High" },
  { name: "Price: High to Low", value: "Price: High to Low" },
  { name: "Newest", value: "Newest" },
];

const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "Dog Supplies", label: "Dog Supplies" },
      { value: "Cat Food", label: "Cat Food" },
      { value: "Dog Food", label: "Dog Food" },
      { value: "Dog Toy", label: "Dog Toy" },
      { value: "Cat Toy", label: "Cat Toy" },
    ],
  },
];

interface ProductFilterProps {
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
}

export default function ProductFilter({
  selectedCategories,
  setSelectedCategories,
  sortOption,
  setSortOption,
}: ProductFilterProps) {

    const handleCategoryChange = (value: string): void => {
        
        let updatedCategories: string[];
        
        if (selectedCategories.includes(value)) {
         
          updatedCategories = selectedCategories.filter((category) => category !== value);
        } else {
          
          updatedCategories = [...selectedCategories, value];
        }
    
        setSelectedCategories(updatedCategories);
      };

  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="py-24">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            New Arrivals
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
            Thoughtfully crafted essentials for the comfort and joy of your pets.
          </p>
        </div>

        <section
          aria-labelledby="filter-heading"
          className="border-t border-gray-200 py-6"
        >
          <h2 id="filter-heading" className="sr-only">
            Product filters
          </h2>

          <div className="flex items-center justify-between">
            {/* Sort Dropdown */}
            <div className="relative z-10 inline-block text-left">
              <DropdownMenu>
                <DropdownMenuTrigger className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort by: {sortOption}
                  <ChevronDownIcon
                    className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {sortOptions.map((option) => (
                    <DropdownMenuItem
                      key={option.value}
                      onClick={() => setSortOption(option.value)} // Set selected sort option
                    >
                      <span className="block px-4 py-2 text-sm font-medium text-gray-900">
                        {option.name}
                      </span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Category Filters */}
            <div className="hidden sm:flex sm:items-baseline sm:space-x-8">
              {filters.map((section) => (
                <DropdownMenu key={section.name}>
                  <DropdownMenuTrigger className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    <span>{section.name}</span>
                    <ChevronDownIcon
                      className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="p-4">
                    <form className="space-y-4">
                      {section.options.map((option, optionIdx) => (
                        <DropdownMenuItem key={option.value}>
                          <div className="flex items-center">
                            <input
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              value={option.value}
                              type="checkbox"
                              checked={selectedCategories.includes(option.value)}
                              onChange={() => handleCategoryChange(option.value)} 
                              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                            >
                              {option.label}
                            </label>
                          </div>
                        </DropdownMenuItem>
                      ))}
                    </form>
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

