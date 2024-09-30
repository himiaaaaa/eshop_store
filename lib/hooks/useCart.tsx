import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartItem {
  item: ProductType;
  quantity: number;
  color?: string; 
  size?: string;
  flavor?: string
}

interface CartStore {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (idToRemove: string) => void;
  increaseQuantity: (idToIncrease: string) => void;
  decreaseQuantity: (idToDecrease: string) => void;
  clearCart: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      cartItems: [],
      addItem: (data: CartItem) => {

        const { item, quantity, color, size, flavor } = data;

        const currentItems = get().cartItems; 

        const isExisting = currentItems.find(
          (cartItem) => cartItem.item._id === item._id
        );

        if (isExisting) {
          return toast("Item already in cart");
        }

        set({ cartItems: [...currentItems, { item, quantity, color, size, flavor }] });
        toast.success("Item added to cart", { icon: "🛒" });

      },
      removeItem: (idToRemove: string) => {

        const filteredCartItems = get().cartItems.filter(
          (cartItem) => cartItem.item._id !== idToRemove
        );

        set({ cartItems: filteredCartItems });
        toast.success("Item removed from cart");

      },
      increaseQuantity: (idToIncrease: string) => {

        const newCartItems = get().cartItems.map((cartItem) =>

          cartItem.item._id === idToIncrease
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem

        );

        set({ cartItems: newCartItems });
        toast.success("Item quantity +1");
      },
      decreaseQuantity: (idToDecrease: string) => {

        const newCartItems = get().cartItems.map((cartItem) =>
          cartItem.item._id === idToDecrease
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
        set({ cartItems: newCartItems });
        toast.success("Item quantity -1");
      },
      clearCart: () => set({ cartItems: [] }),
    }),

    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;

