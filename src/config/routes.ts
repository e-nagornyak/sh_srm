export const routePaths = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
  },
  private: {
    dashboard: "/dashboard",
    order: {
      base: "/orders",
      list: `/orders/list`,
    },
    product: {
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
