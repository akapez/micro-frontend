import { mount as productsMounts } from "products/ProductsIndex";
import { mount as cartMounts } from "cart/CartShow";

console.log('Container');

productsMounts(document.querySelector("#my-products"));
cartMounts(document.querySelector("#my-cart"));