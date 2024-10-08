import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"

function getOrderName(order: Order): string {
  const buyer = order?.buyer

  if (buyer?.first_name || buyer?.last_name) {
    return `${buyer?.first_name || ""} ${buyer?.last_name || ""}`
  }

  if (buyer?.company_name) {
    return buyer?.company_name
  }

  return buyer?.login || ""
}

export { getOrderName }
