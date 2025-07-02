import { create } from "zustand"
import { persist } from "zustand/middleware"

type CartItem = {
  _id: string
  title: string
  price: number
  quantity: number
  image?: string
}

type CartState = {
  items: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (_id: string) => void
  clearCart: () => void
  increment: (_id: string) => void
  decrement: (_id: string) => void
  total: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (item) => {
        const existing = get().items.find((i) => i._id === item._id)
        if (existing) {
          set({
            items: get().items.map((i) =>
              i._id === item._id
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          })
        } else {
          set({ items: [...get().items, { ...item, quantity: item.quantity }] })
        }
      },

      removeFromCart: (_id) =>
        set({ items: get().items.filter((i) => i._id !== _id) }),

      increment: (_id) =>
        set({
          items: get().items.map((i) =>
            i._id === _id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        }),

      decrement: (_id) =>
        set({
          items: get()
            .items.map((i) =>
              i._id === _id ? { ...i, quantity: i.quantity - 1 } : i
            )
            .filter((i) => i.quantity > 0),
        }),

      clearCart: () => set({ items: [] }),

      total: () =>
        get().items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    }),
    {
      name: "cart-storage", // saves to localStorage
    }
  )
)
