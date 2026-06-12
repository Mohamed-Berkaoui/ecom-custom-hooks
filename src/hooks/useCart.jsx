import { useContext } from "react";
import { CartStore } from "../contexts/CartContext";

export function useCart() {
  return useContext(CartStore);
}
export default useCart