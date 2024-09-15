export const routePaths = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
  },
  user: {
    list: "/users",
    add: "/user/add",
    edit: (id: number) => `/user/${id}/edit`,
    delete: (id: number) => `/user/${id}/delete`,
  },
  home: "/",
}
