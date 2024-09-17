export const routePaths = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
  },
  private: {
    dashboard: "/dashboard",
    order: {
      list: "/orders",
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
