import { type Order } from "@/lib/api/allegro/orders/orders-types"

function getOrderName(order: Order): string {
  const buyer = order?.buyer

  if (
    (buyer?.first_name && buyer?.first_name !== "unknown") ||
    (buyer?.last_name && buyer?.last_name !== "unknown")
  ) {
    return `${buyer?.first_name || ""} ${buyer?.last_name || ""}`
  }

  if (buyer?.company_name) {
    return buyer?.company_name
  }

  return buyer?.login || ""
}

export { getOrderName }
