import { createEndpoint } from "@/lib/api/@request/helpers"
import { createApi, type ApiSide } from "@/lib/api/@request/request"
import type { BaseQueryResponse } from "@/lib/api/@request/types"
import { allegroApiPaths } from "@/lib/api/allegro/helpers"
import {
  type AllegroIntegration,
  type AllegroIntegrationRequest,
} from "@/lib/api/allegro/integration/allegro-integration-types"
import { type Order } from "@/lib/api/allegro/orders/allegro-orders-types"

export const getAllegroOrdersApi = (side: ApiSide) => {
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
      (params) => createEndpoint(allegroApiPaths.orders.list(params), "GET")
      // { cache: "force-cache" }
    ),

    getAllegroOrderById: api.createMethod<Order, [number]>((id) =>
      createEndpoint(allegroApiPaths.orders.byId(id).get, "GET")
    ),

    // TODO FIX THIS TYPE OF DATA
    updateAllegroOrder: api.createMethod<Order, [number, any]>((id, data) =>
      createEndpoint(allegroApiPaths.orders.byId(id).update, "PUT", data)
    ),
  }
}
