interface OrderPersonalEventItem {
  color: string
  key: string
  displayName: string
  description: string
}

const orderPersonalEvents: OrderPersonalEventItem[] = [
  {
    color: "text-blue-600 fill-blue-600",
    key: "inpost_a",
    displayName: "InPost A",
    description: "InPost service A",
  },
  {
    color: "text-green-600 fill-green-600",
    key: "inpost_b",
    displayName: "InPost B",
    description: "InPost service B",
  },
  {
    color: "text-green-400 fill-green-400",
    key: "inpost_c",
    displayName: "InPost C",
    description: "InPost service C",
  },
  {
    color: "text-purple-600 fill-purple-600",
    key: "polecona",
    displayName: "Polecona",
    description: "Registered letter service",
  },
  {
    color: "text-pink-600 fill-pink-600",
    key: "mini",
    displayName: "Mini",
    description: "Mini parcel service",
  },
  {
    color: "text-gray-600 fill-gray-600",
    key: "orlen",
    displayName: "Orlen",
    description: "Orlen package service",
  },
  {
    color: "text-orange-600 fill-orange-600",
    key: "allegro",
    displayName: "Allegro",
    description: "Allegro shipping",
  },
  {
    color: "text-green-600 fill-green-600",
    key: "inpost",
    displayName: "InPost",
    description: "InPost standard service",
  },
  {
    color: "text-red-600 fill-red-600",
    key: "dpd",
    displayName: "DPD",
    description: "DPD package delivery",
  },
  {
    color: "text-blue-600 fill-blue-600",
    key: "allegro_2kg",
    displayName: "Allegro 2KG",
    description: "Allegro for 2KG items",
  },
  {
    color: "text-blue-700 fill-blue-700",
    key: "allegro_3kg",
    displayName: "Allegro 3KG",
    description: "Allegro for 3KG items",
  },
  {
    color: "text-blue-400 fill-blue-400",
    key: "dpd_2kg",
    displayName: "DPD 2KG",
    description: "DPD for 2KG items",
  },
  {
    color: "text-blue-500 fill-blue-500",
    key: "dpd_3kg",
    displayName: "DPD 3KG",
    description: "DPD for 3KG items",
  },
  {
    color: "text-purple-700 fill-purple-700",
    key: "pigu",
    displayName: "PIGU",
    description: "PIGU shipping service",
  },
  {
    color: "text-gray-400 fill-gray-400",
    key: "cross_border",
    displayName: "Cross-border",
    description: "Cross-border shipping service",
  },
  {
    color: "text-blue-700 fill-blue-700",
    key: "e_commerce",
    displayName: "E-commerce",
    description: "E-commerce delivery service",
  },
  {
    color: "text-yellow-500 fill-yellow-500",
    key: "erli",
    displayName: "ERLI",
    description: "ERLI delivery service",
  },
  {
    color: "text-gray-500 fill-gray-500",
    key: "erli_kurier",
    displayName: "ERLI Kurier",
    description: "ERLI courier service",
  },
  {
    color: "text-gray-700 fill-gray-700",
    key: "erli_punkty",
    displayName: "ERLI Punkty",
    description: "ERLI pick-up points",
  },
  {
    color: "text-gray-600 fill-gray-600",
    key: "bl_ups",
    displayName: "BL UPS",
    description: "BL UPS delivery service",
  },
]

export { orderPersonalEvents, type OrderPersonalEventItem }
