import type { CartItem } from "@/typefile";

/** Sample pricing rules shared by the cart, the checkout and the sample orders. */
export const FREE_SHIPPING_ABOVE = 3000;
const SHIPPING_FEE = 299;
export const DEMO_PROMO = { code: "MINAB20", rate: 0.2 };

export function cartTotals(items: CartItem[], promoCode = "") {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > FREE_SHIPPING_ABOVE ? 0 : SHIPPING_FEE;
  const discount = promoCode === DEMO_PROMO.code ? subtotal * DEMO_PROMO.rate : 0;
  return { subtotal, shipping, discount, total: subtotal + shipping - discount };
}
