import { getOrders } from "@/lib/actions/actions";

import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

const Orders = async () => {
  const { userId } = auth();
  const orders = await getOrders(userId as string);

  console.log(orders[0]?.products);
  console.log("orders", orders);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto pt-24">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Your Order
          </h1>
          <div>
            <div className="max-w-2xl mx-auto pt-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              {!orders ||
                (orders.length === 0 && (
                  <p className="text-body-bold my-5">You have no orders yet.</p>
                ))}

              {orders.map((order: OrderType) => (
                <div key={order._id} className="mb-8 border-t py-12">
                  <div className="px-4 space-y-2 sm:px-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
                    <div className="flex sm:items-baseline sm:space-x-4">
                      <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                        Order #{order._id}
                      </h1>
                    </div>
                    <p className="text-md text-gray-600">
                      Total Price{" "}
                      <p className="font-medium text-gray-900">
                        ${order.totalAmount}
                      </p>
                    </p>
                  </div>

                  {/* Products */}
                  <div className="mt-6">
                    <h2 className="sr-only">Products purchased</h2>

                    <div className="space-y-8">
                      {order.products.map((orderItem: OrderItemType) => (
                        <div
                          key={orderItem.product._id}
                          className="bg-white border-t border-b border-gray-200 shadow-sm sm:border sm:rounded-lg"
                        >
                          <div className="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                            <div className="sm:flex lg:col-span-12">
                              <div className="flex-shrink-0 w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-none sm:w-40 sm:h-40">
                                <Image
                                  src={orderItem.product.media[0]}
                                  alt={orderItem.product.title}
                                  width={100}
                                  height={100}
                                  className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                                />
                              </div>

                              <div className="mt-6 sm:mt-0 sm:ml-6">
                                <h3 className="text-base font-medium text-gray-900 w-full">
                                  <a>{orderItem.product.title}</a>
                                </h3>

                                <div className="mt-2 flex flex-row items-center">
                                  <p className="text-md text-gray-600 pr-2">
                                    Unit Price:
                                  </p>
                                  <p className="text-sm font-medium text-gray-900 ">
                                    ${orderItem.product.price}
                                  </p>
                                </div>

                                <div className="mt-2 flex flex-row items-center">
                                  <p className="text-md text-gray-600 pr-2">
                                    Quantity:
                                  </p>
                                  <p className="text-sm font-medium text-gray-900 ">
                                    {orderItem.quantity}
                                  </p>
                                </div>

                                {orderItem.color &&
                                  orderItem.color !== "N/A" && (
                                    <div className="mt-2 flex flex-row items-center">
                                      <p className="text-md text-gray-600 pr-2">
                                        Color:
                                      </p>
                                      <p className="text-sm font-medium text-gray-900 ">
                                        {orderItem.color}
                                      </p>
                                    </div>
                                  )}

                                {orderItem.size && orderItem.size !== "N/A" && (
                                  <div className="mt-2 flex flex-row items-center">
                                    <p className="text-md text-gray-600 pr-2">
                                      Size:
                                    </p>
                                    <p className="text-sm font-medium text-gray-900 ">
                                      {orderItem.size}
                                    </p>
                                  </div>
                                )}

                                {orderItem.flavor &&
                                  orderItem.flavor !== "N/A" && (
                                    <div className="mt-2 flex flex-row items-center">
                                      <p className="text-md text-gray-600 pr-2">
                                        Flavor:
                                      </p>
                                      <p className="text-sm font-medium text-gray-900 ">
                                        {orderItem.flavor}
                                      </p>
                                    </div>
                                  )}
                              </div>
                            </div>
                          </div>

                          <div className="border-t border-gray-200 py-6 px-4 sm:px-6 lg:p-8">
                            <h4 className="sr-only">Status</h4>
                            <p className="text-sm font-medium text-gray-900">
                              Delivery Status
                            </p>
                            <div className="mt-6" aria-hidden="true">
                              <div className="bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className="h-2 bg-indigo-600 rounded-full"
                                  style={{
                                    width: `calc((2 * 2 + 1) / 8 * 100%)`,
                                  }}
                                />
                              </div>
                              <div className="hidden sm:grid grid-cols-4 text-sm font-medium text-gray-600 mt-6">
                                <div className="text-indigo-600">
                                  Order placed
                                </div>
                                <div className="text-indigo-600 text-center">
                                  Processing
                                </div>
                                <div className="text-center">Shipped</div>
                                <div className="text-right">Delivered</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;

export const dynamic = "force-dynamic";
