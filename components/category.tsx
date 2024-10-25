import Image from 'next/image';

const categories = [
  {
    name: 'Cat Food',
    imageSrc: '/category-1.jpg',
    imageAlt: 'Cat Food',
    href: '#',
  },
  {
    name: 'Cat Toys',
    imageSrc: '/category-2.jpg',
    imageAlt: 'Cat Toys',
    href: '#',
  },
  {
    name: 'Dog Food',
    imageSrc: '/category-3.jpg',
    imageAlt: 'Dog Food',
    href: '#',
  },
  {
    name: 'Dog Toys',
    imageSrc: '/category-4.jpg',
    imageAlt: 'Dog Toys',
    href: '#',
  },
  {
    name: 'Dog Supplements',
    imageSrc: '/category-5.jpg',
    imageAlt: 'Dog Supplements',
    href: '#',
  },
];

const CategorySection = () => {
  return (
    <div className="w-full px-8 py-10 lg:py-14">
      <div className="container mx-auto flex flex-col gap-14">
        {/* Header Section */}
        <div className="flex w-full px-4 flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            <span className="text-orange-600">Top</span> Categories
          </h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col gap-4 hover:opacity-75 cursor-pointer"
            >
              <div className="bg-muted rounded-md aspect-square mb-4 relative">
                <Image
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xl tracking-tight">{category.name}</h3>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
