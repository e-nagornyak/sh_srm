const allegroApiPaths = {
  integration: {
    base: "/api/allegro/allegro-integration/",
    createOrUpdate: "/api/allegro/allegro-integration/", // POST
    delete: "/api/allegro/allegro-integration/", // DELETE
  },
  orders: {
    base: "/api/allegro/orders/",
    list: "/api/allegro/orders/", // GET (with pagination)
    byId: (id: number) => ({
      get: `/api/allegro/orders/${id}/`, // GET by ID
      update: `/api/allegro/orders/${id}/`, // PUT by ID
    }),
  },
}

export { allegroApiPaths }
