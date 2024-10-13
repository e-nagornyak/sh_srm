import { createEndpoint } from "@/lib/api/@request/helpers"
import { createApi, type ApiSide } from "@/lib/api/@request/request"
import type { BaseQueryResponse } from "@/lib/api/@request/types"
import { allegroApiPaths } from "@/lib/api/allegro/helpers"
import {
  type AllegroIntegration,
  type AllegroIntegrationRequest,
} from "@/lib/api/allegro/integration/allegro-integration-types"
import { type Order } from "@/lib/api/allegro/orders/orders-types"

export const getAllegroOrdersApi = (side: ApiSide) => {
  const isDevMode = process.env.NODE_ENV === "development"

  const api = createApi(side)

  return {
    // Allegro Integration operations
    getAllegroIntegration: api.createMethod<AllegroIntegration>(() =>
      createEndpoint(allegroApiPaths.integration.base, "GET")
    ),

    createOrUpdateAllegroIntegration: api.createMethod<
      { [key: string]: string },
      [AllegroIntegrationRequest]
    >((data) =>
      createEndpoint(allegroApiPaths.integration.createOrUpdate, "POST", data)
    ),

    deleteAllegroIntegration: api.createMethod<void>(() =>
      createEndpoint(allegroApiPaths.integration.delete, "DELETE")
    ),

    // Allegro Orders operations
    listAllegroOrders: api.createMethod<BaseQueryResponse<Order[]>, [string]>(
      (params) => createEndpoint(allegroApiPaths.orders.list(params), "GET"),
      { cache: isDevMode ? "force-cache" : "no-cache" }
    ),

    getAllegroOrderById: api.createMethod<Order, [number]>((id) =>
      createEndpoint(allegroApiPaths.orders.byId(id).get, "GET")
    ),

    // TODO FIX THIS TYPE OF DATA
    updateAllegroOrder: api.createMethod<Order, [number, any]>((id, data) =>
      createEndpoint(allegroApiPaths.orders.byId(id).update, "PUT", data)
    ),

    sendShippingLabel: api.createMethod<
      { label_url: string; label_id: string },
      [string]
    >((id) => createEndpoint(allegroApiPaths.orders.shippingLabel(id), "POST")),

    createFacture: api.createMethod<null, [string]>((id) =>
      createEndpoint(allegroApiPaths.orders.factura(id), "POST")
    ),
  }
}
