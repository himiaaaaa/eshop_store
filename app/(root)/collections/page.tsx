import Collections from "@/components/collections";

const CollectionsPage = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col items-center text-center border-b border-gray-200 pb-12">
          <h2
            id="details-heading"
            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Collections
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
            Our innovative pet accessory designs ensure your beloved furry
            friends enjoy comfort and style during every adventure, from playful
            park outings to cozy evenings at home.
          </p>
        </div>
        <Collections />
      </div>
    </div>
  );
};

export default CollectionsPage;

export const dynamic = "force-dynamic";
