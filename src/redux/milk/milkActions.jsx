import { buy_milk } from "./milkTypes";

export function buyMilk(milk = 1) {
  return { type: buy_milk, payload: milk };
}
