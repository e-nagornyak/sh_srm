import { env } from "@/env"

class RoutePaths {
  private static readonly baseAuth: string = "/auth"
  private static readonly baseOrders: string = "/orders"
  private static readonly baseProducts: string = "/products"
  private static readonly baseUser: string = "/user"
  private static readonly baseResult: string = "/result"

  public static readonly auth = {
    login: `${RoutePaths.baseAuth}/login`,
    register: `${RoutePaths.baseAuth}/register`,
  }

  public static readonly private = {
    dashboard: "/dashboard",
    orders: {
      base: RoutePaths.baseOrders,
      list: `${RoutePaths.baseOrders}/list`,
      order: (id: number) => ({
        add: `${RoutePaths.baseOrders}/order/add`,
        view: `${RoutePaths.baseOrders}/order/${id}`,
      }),
    },
    products: {
      base: RoutePaths.baseProducts,
      product: (id: number) => ({
        add: `${RoutePaths.baseProducts}/product/add`,
        view: `${RoutePaths.baseProducts}/product/${id}`,
      }),
    },
    user: {
      list: `${RoutePaths.baseUser}s`,
      add: `${RoutePaths.baseUser}/add`,
      edit: (id: number) => `${RoutePaths.baseUser}/${id}/edit`,
      delete: (id: number) => `${RoutePaths.baseUser}/${id}/delete`,
    },
  }

  public static readonly public = {
    home: "/",
    result: {
      order: (id: string) => `${RoutePaths.baseResult}/order/${id}`,
    },
  }

  public static getFullPath(path: string): string {
    return `${env.NEXT_PUBLIC_FRONTEND_URL}${path}`
  }
}

export { RoutePaths }
