"use client";

import { Check, MinusCircle, PlusCircle } from "lucide-react";
import useCart from "@/lib/hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


const policies = [
  {
    name: "Free returns",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg",
    description:
      "Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.",
  },
  {
    name: "Same day delivery",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg",
    description:
      "We offer a delivery service that has never been done before. Checkout today and receive your products within hours.",
  },
  {
    name: "All year discount",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg",
    description:
      'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
  },
  {
    name: "For the planet",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg",
    description:
      "We’ve pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];

export default function Cart() {
  const cart = useCart();
  const router = useRouter();
  const { user } = useUser();

  console.log("cart", cart);

  const total = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0
  );
  const totalRounded = parseFloat(total.toFixed(2));

  let totalPlus;

  if (totalRounded < 300) {
    totalPlus = totalRounded + 8 + totalRounded * 0.255;
  } else {
    totalPlus = totalRounded + totalRounded * 0.255;
  }

  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[0].emailAddress,
    name: user?.fullName,
  };

  const handleCheckout = async () => {
    try {
      if (!user) {

        router.push("sign-in");

      } else {

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
          method: "POST",
          body: JSON.stringify({ cartItems: cart.cartItems, customer }),
        });

        const data = await res.json();

        window.location.href = data.url;

        console.log('data', data);
      }
    } catch (err) {
      console.log("[checkout_POST]", err);
    }
  };

  return (
    <div className="bg-white">
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto pt-24">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Shopping Cart
            </h1>

            <div className="mt-12">
              {cart.cartItems.length === 0 ? (
                <p className="text-body-bold">No item in cart</p>
              ) : (
                <section aria-labelledby="cart-heading">
                  <ul
                    role="list"
                    className="border-t border-b border-gray-200 divide-y divide-gray-200"
                  >
                    {cart.cartItems.map((cartItem, index) => (
                      <li key={index} className="flex py-6 sm:py-10">
                        <div className="flex-shrink-0">
                          <Image
                            width={100}
                            height={100}
                            src={cartItem.item.media[0]}
                            alt="product"
                            className="w-24 h-24 rounded-lg object-center object-cover sm:w-32 sm:h-32"
                          />
                        </div>

                        {/* ITEM INFO */}
                        <div className="relative ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                          <div>
                            <div className="flex justify-between sm:grid sm:grid-cols-2">
                              <div className="pr-6">
                                <h3 className="text-sm">
                                  <a
                                    href={`/products/${cartItem.item._id}`}
                                    className="font-medium text-gray-700 hover:text-gray-800"
                                  >
                                    {cartItem.item.title}
                                  </a>
                                </h3>

                                {cartItem.color && (
                                  <p className="mt-1 text-sm text-gray-500">
                                    {cartItem.color}
                                  </p>
                                )}
                                {cartItem.flavor && (
                                  <p className="mt-1 text-sm text-gray-500">
                                    {cartItem.flavor}
                                  </p>
                                )}
                                {cartItem.size ? (
                                  <p className="mt-1 text-sm text-gray-500">
                                    {cartItem.size}
                                  </p>
                                ) : null}
                              </div>

                              <p className="text-sm font-medium text-gray-900 text-right">
                                $ {cartItem.item.price}
                              </p>
                            </div>

                            <div className="flex items-center sm:block sm:absolute sm:top-0 sm:left-1/2 sm:mt-0">
                              <label
                                htmlFor={`quantity-${index}`}
                                className="sr-only"
                              >
                                Quantity, {cartItem.quantity}
                              </label>

                              <div className="flex flex-col gap-2 mt-3 md:mt-0">
                                <div className="flex gap-4 items-start justify-start">
                                  <MinusCircle
                                    className="hover:text-orange-600 cursor-pointer"
                                    onClick={() =>
                                      cart.decreaseQuantity(cartItem.item._id)
                                    }
                                  />
                                  <p className="text-body-bold">
                                    {cartItem.quantity}
                                  </p>
                                  <PlusCircle
                                    className="hover:text-orange-600 cursor-pointer"
                                    onClick={() =>
                                      cart.increaseQuantity(cartItem.item._id)
                                    }
                                  />
                                </div>

                                <button
                                  type="button"
                                  className="ml-4 text-sm font-medium text-orange-600 hover:text-orange-500 sm:ml-0 sm:mt-5"
                                  onClick={() => cart.removeItem(cartItem.item._id)}
                                  aria-label={`Remove ${cartItem.item._id} from cart`}
                                >
                                  <span>Remove</span>
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* In stock */}
                          <div className="mt-6 flex items-center">
                            <Check
                              className="flex-shrink-0 w-5 h-5 text-green-500"
                              aria-hidden="true"
                            />
                            <p className="ml-2 text-sm text-gray-500">
                              In stocks
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Order summary */}
              <section
                aria-labelledby="summary-heading"
                className="mt-10 sm:ml-32 sm:pl-6"
              >
                <div className="bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8">
                  <h2 id="summary-heading" className="sr-only">
                    Order summary
                  </h2>

                  <div className="flow-root">
                    <dl className="-my-4 text-sm divide-y divide-gray-200">
                      <div className="py-4 flex items-center justify-between">
                        <dt className="text-gray-600">Subtotal</dt>
                        <dd className="font-medium text-gray-900">
                          ${totalRounded}
                        </dd>
                      </div>
                      <div className="py-4 flex items-center justify-between">
                        <dt className="text-gray-600">Shipping</dt>
                        <dd className="font-medium text-gray-900">
                          ${totalRounded < 300 ? "8.00" : "0"}
                        </dd>
                      </div>
                      <div className="py-4 flex items-center justify-between">
                        <dt className="text-gray-600">Tax</dt>
                        <dd className="font-medium text-gray-900">
                          ${(totalRounded * 0.255).toFixed(2)}
                        </dd>
                      </div>
                      <div className="py-4 flex items-center justify-between">
                        <dt className="text-base font-medium text-gray-900">
                          Order total
                        </dt>
                        <dd className="text-base font-medium text-gray-900">
                          ${totalPlus.toFixed(2)}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    className="w-full bg-orange-500 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                    onClick={handleCheckout}
                    type="submit"
                    aria-label="Proceed to checkout"
                  >
                    Checkout
                  </button>
                </div>

                <div className="mt-6 text-sm text-center text-gray-500">
                  <p>
                    or{" "}
                    <Link
                      href="#"
                      className="text-orange-600 font-medium hover:text-orange-500"
                    >
                      Continue Shopping<span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Policy grid */}
        <section
          aria-labelledby="policies-heading"
          className="mt-24 bg-white border-t border-gray-200"
        >
          <h2 id="policies-heading" className="sr-only">
            Our policies
          </h2>

          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
              {policies.map((policy) => (
                <div
                  key={policy.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="md:flex-shrink-0">
                    <div className="flow-root">
                      <Image
                        className="-my-1 h-24 w-auto mx-auto"
                        src={policy.imageSrc}
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-900">
                      {policy.name}
                    </h3>
                    <p className="mt-3 text-sm text-gray-500">
                      {policy.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export const dynamic = "force-dynamic";
