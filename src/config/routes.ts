export const routePaths = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
  },
  private: {
    dashboard: "/dashboard",
    orders: {
      base: "/orders",
      list: `/orders/list`,
      order: (id: number) => ({
        add: "/orders/order/add",
        view: `/orders/order/${id}`,
      }),
    },
    products: {
      base: "/products",
    },
    user: {
      list: "/users",
      add: "/user/add",
      edit: (id: number) => `/user/${id}/edit`,
      delete: (id: number) => `/user/${id}/delete`,
    },
  },
  public: {
    home: "/",
  },
}
