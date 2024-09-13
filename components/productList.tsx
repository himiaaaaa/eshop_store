import { MoveRight } from "lucide-react"
import { Button } from "./ui/button"
import { link } from "fs"

const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: '/product1_catfood.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: '/product2_catfood.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: '/product3_cattoy.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: '/product4_cattoy.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        imageSrc: '/product5_dogfood.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 6,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: '/product6_dogfood.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 7,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: '/product7_dogtoy.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 8,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '/product8_dogtoy.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 9,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: '/product9_dogsupplies.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 10,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '/product10_dogsupplies.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
  ]
  
  export default function Example() {
    return (
      <div className="w-full px-8 py-10 lg:py-14">
        <div className="container mx-auto flex flex-col gap-14">
        
        <div className="flex w-full px-4 flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            <span className="text-orange-500">Best</span> Seller
          </h2>
          <Button className="gap-4" variant='ghost'>
            View all products <MoveRight className="w-4 h-4" />
          </Button>
        </div>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="bg-white h-full w-full aspect-square object-contain object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  