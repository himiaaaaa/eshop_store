"use client";
import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  RadioGroup,
  Radio,
  Label,
  Tab,
  TabGroup,
  TabList,
  TabPanels,
  TabPanel,
  Description,
} from "@headlessui/react";
import { Check, Minus, MinusCircle, Plus, PlusCircle } from "lucide-react";
import Image from "next/image";
import ClickableHeart from "../clickableHeart";
import useCart from "@/lib/hooks/useCart";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const ProductOverview = ({ productInfo }: { productInfo: ProductType }) => {
  const [selectedColor, setSelectedColor] = useState(productInfo?.colors[0]);
  const [selectedFlavor, setSelectedFlavor] = useState(productInfo?.flavors[0]);
  const [selectedSize, setSelectedSize] = useState(productInfo?.sizes[0]);
  const [quantity, setQuantity] = useState<number>(1);

  const cart = useCart();

  console.log("productinfo", productInfo);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <TabGroup as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <TabList className="grid grid-cols-4 gap-6">
                {productInfo.media.map((image) => (
                  <Tab
                    key={image}
                    className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                  >
                    {({ selected }) => (
                      <>
                        <span className="absolute inset-0 rounded-md overflow-hidden">
                          <Image
                            width={500}
                            height={500}
                            src={image}
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </span>
                        <span
                          className={classNames(
                            selected ? "ring-orange-500" : "ring-transparent",
                            "absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </TabList>
            </div>

            <TabPanels className="w-full aspect-w-1 aspect-h-1">
              {productInfo.media.map((image) => (
                <TabPanel key={image}>
                  <Image
                    width={500}
                    height={500}
                    src={image}
                    alt="productPic"
                    className="w-full h-full object-center object-cover sm:rounded-lg"
                  />
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {productInfo.title}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">${productInfo.price}</p>
            </div>

            {/* In stock and ready to ship */}
            <div className="mt-6 flex items-center">
              <Check
                className="flex-shrink-0 w-5 h-5 text-green-500"
                aria-hidden="true"
              />
              <p className="ml-2 text-sm text-gray-500">
                In stock and ready to ship
              </p>
            </div>

            <form className="mt-6">
              <div>
                {/* Colors */}

                {productInfo.colors.length > 0 && (
                  <div className="mt-5">
                    <RadioGroup
                      value={selectedColor}
                      onChange={setSelectedColor}
                    >
                      <Label className="block text-sm font-medium text-gray-700 mb-3">
                        Colors
                      </Label>
                      <div className="mt-1 grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {productInfo.colors?.map((color) => (
                          <Radio
                            as="div"
                            key={color}
                            value={color}
                            className={({ checked }) =>
                              classNames(
                                checked ? "ring-2 ring-orange-500" : "",
                                "relative block border border-gray-300 rounded-lg p-2 cursor-pointer focus:outline-none"
                              )
                            }
                          >
                            {({ checked }) => (
                              <>
                                <Label
                                  as="p"
                                  className="text-base font-medium text-gray-900"
                                >
                                  {color}
                                </Label>
                                <div
                                  className={classNames(
                                    checked
                                      ? "border-orange-500"
                                      : "border-transparent",
                                    "absolute -inset-px rounded-lg pointer-events-none border-2"
                                  )}
                                  aria-hidden="true"
                                />
                              </>
                            )}
                          </Radio>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                )}

                {/* flavor */}
                {productInfo.flavors.length > 0 && (
                  <div className="mt-5">
                    <RadioGroup
                      value={selectedFlavor}
                      onChange={setSelectedFlavor}
                    >
                      <Label className="block text-sm font-medium text-gray-700">
                        Flavor
                      </Label>
                      <div className="mt-1 grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {productInfo.flavors?.map((flavor) => (
                          <Radio
                            as="div"
                            key={flavor}
                            value={flavor}
                            className={({ checked }) =>
                              classNames(
                                checked ? "ring-2 ring-orange-500" : "",
                                "relative block border border-gray-300 rounded-lg p-2 cursor-pointer focus:outline-none"
                              )
                            }
                          >
                            {({ checked }) => (
                              <>
                                <Label
                                  as="p"
                                  className="text-base font-medium text-gray-900"
                                >
                                  {flavor}
                                </Label>
                                <div
                                  className={classNames(
                                    checked
                                      ? "border-orange-500"
                                      : "border-transparent",
                                    "absolute -inset-px rounded-lg pointer-events-none border-2"
                                  )}
                                  aria-hidden="true"
                                />
                              </>
                            )}
                          </Radio>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                )}

                {/* Sizes */}
                {productInfo.sizes.length > 0 && (
                  <div className="mt-5">
                    <RadioGroup value={selectedSize} onChange={setSelectedSize}>
                      <Label className="block text-sm font-medium text-gray-700">
                        Size
                      </Label>
                      <div className="mt-1 grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {productInfo.sizes?.map((size) => (
                          <Radio
                            as="div"
                            key={size}
                            value={size}
                            className={({ checked }) =>
                              classNames(
                                checked ? "ring-2 ring-indigo-500" : "",
                                "relative block border border-gray-300 rounded-lg p-2 cursor-pointer focus:outline-none"
                              )
                            }
                          >
                            {({ checked }) => (
                              <>
                                <Label
                                  as="p"
                                  className="text-base font-medium text-gray-900"
                                >
                                  {size}
                                </Label>
                                <Description
                                  as="p"
                                  className="mt-1 text-sm text-gray-500"
                                ></Description>
                                <div
                                  className={classNames(
                                    checked
                                      ? "border-orange-500"
                                      : "border-transparent",
                                    "absolute -inset-px rounded-lg pointer-events-none border-2"
                                  )}
                                  aria-hidden="true"
                                />
                              </>
                            )}
                          </Radio>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2 mt-5">
                <p className="block text-sm font-medium text-gray-700">
                  Quantity
                </p>
                <div className="flex gap-4 items-center">
                  <MinusCircle
                    className="hover:text-red-1 cursor-pointer"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  />
                  <p className="text-body-bold">{quantity}</p>
                  <PlusCircle
                    className="hover:text-red-1 cursor-pointer"
                    onClick={() => setQuantity(quantity + 1)}
                  />
                </div>
              </div>

              <div className="mt-10 flex sm:flex-col1">
                <button
                  className="max-w-xs flex-1 bg-orange-400 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-orange-400/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                  onClick={() => {
                    cart.addItem({
                      item: productInfo,
                      quantity,
                      color: selectedColor,
                      flavor: selectedFlavor,
                      size: selectedSize,
                    });
                  }}
                  aria-label="Add to bag"
                >
                  Add to bag
                </button>

                <div className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                  <ClickableHeart product={productInfo} />
                </div>
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="border-t divide-y divide-gray-200">
                {/* description */}
                <Disclosure as="div">
                  {({ open }) => (
                    <>
                      <h3>
                        <DisclosureButton className="group relative w-full py-6 flex justify-between items-center text-left">
                          <span
                            className={classNames(
                              open ? "text-orange-400" : "text-gray-900",
                              "text-sm font-medium"
                            )}
                          >
                            Description
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <Minus
                                className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                aria-hidden="true"
                              />
                            ) : (
                              <Plus
                                className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel as="div" className="pb-6 prose prose-sm">
                        <ul role="list">
                          {productInfo.description
                            .split("\n")
                            .map((line, index) => (
                              <li key={index} className="mb-2">
                                {line}
                              </li>
                            ))}
                        </ul>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                {/* shipping */}
                <Disclosure as="div">
                  {({ open }) => (
                    <>
                      <h3>
                        <DisclosureButton className="group relative w-full py-6 flex justify-between items-center text-left">
                          <span
                            className={classNames(
                              open ? "text-orange-400" : "text-gray-900",
                              "text-sm font-medium"
                            )}
                          >
                            Shipping
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <Minus
                                className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                aria-hidden="true"
                              />
                            ) : (
                              <Plus
                                className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel as="div" className="pb-6 prose prose-sm">
                        <ul role="list">
                          <li>• Free shipping on orders over $300</li>
                          <li>• International shipping available</li>
                          <li>• Expedited shipping options</li>
                          <li>• Signature required upon delivery</li>
                        </ul>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                {/* returns */}
                <Disclosure as="div">
                  {({ open }) => (
                    <>
                      <h3>
                        <DisclosureButton className="group relative w-full py-6 flex justify-between items-center text-left">
                          <span
                            className={classNames(
                              open ? "text-orange-400" : "text-gray-900",
                              "text-sm font-medium"
                            )}
                          >
                            Returns
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <Minus
                                className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                aria-hidden="true"
                              />
                            ) : (
                              <Plus
                                className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel as="div" className="pb-6 prose prose-sm">
                        <ul role="list">
                          <li>• Easy return requests</li>
                          <li>• Pre-paid shipping label included</li>
                          <li>• 10% restocking fee for returns</li>
                          <li>• 60 day return window</li>
                        </ul>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
