import { getCollections } from "@/lib/actions/actions";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="w-full px-8 py-10 lg:py-24">
      <div className="container mx-auto flex flex-col gap-14">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections?.map((collection: CollectionType) => (
            <li key={collection._id} className="relative bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: `url(${collection.image})` }}>
              <div className="p-8 bg-white bg-opacity-0 rounded-lg flex flex-col justify-center items-start space-y-4">
                <p className="text-sm font-bold uppercase">{collection.subtitle}</p>
                <h3 className="text-2xl font-bold text-gray-900">
                  {collection.title.split(' ').slice(0, -1).join(' ')}{' '}
                  <span className="text-orange-500">{collection.title.split(' ').slice(-1)}</span>
                </h3>
                <Link href={`/collections/${collection._id}`} className="btn bg-black text-white py-2 px-4 rounded-lg hover:bg-black transition-all">
                  Read More
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Collections;
