interface StatusItem {
  color: string
  key: string
  displayName: string
}

interface StatusGroup {
  group: string
  items: StatusItem[]
}

const orderStatuses: StatusGroup[] = [
  {
    group: "No Group",
    items: [
      { color: "bg-blue-600", key: "new_orders", displayName: "New Orders" },
    ],
  },
  {
    group: "In Progress",
    items: [
      { color: "bg-green-400", key: "inpost", displayName: "InPost" },
      {
        color: "bg-green-600",
        key: "poczta_polska",
        displayName: "Poczta Polska",
      },
      { color: "bg-green-400", key: "dpd", displayName: "DPD" },
      { color: "bg-green-700", key: "orlen", displayName: "ORLEN" },
      { color: "bg-yellow-600", key: "dhl", displayName: "DHL" },
      { color: "bg-green-400", key: "ups", displayName: "UPS" },
      { color: "bg-green-600", key: "pigu", displayName: "PIGU" },
      {
        color: "bg-blue-400",
        key: "blpaczka_cross_border",
        displayName: "BLpaczka Cross-border",
      },
      {
        color: "bg-gray-600",
        key: "odbior_osobisty",
        displayName: "Personal Pickup",
      },
      {
        color: "bg-gray-600",
        key: "zwrot_zgloszony",
        displayName: "Return Reported",
      },
    ],
  },
  {
    group: "Processed",
    items: [
      { color: "bg-blue-600", key: "do_wyslania", displayName: "To Send" },
      { color: "bg-green-600", key: "wyslane", displayName: "Sent" },
      { color: "bg-gray-600", key: "zrealizowane", displayName: "Completed" },
    ],
  },
  {
    group: "Problem",
    items: [
      {
        color: "bg-red-600",
        key: "blad_nadania",
        displayName: "Shipment Error",
      },
      {
        color: "bg-orange-600",
        key: "problem_w_dostawie",
        displayName: "Delivery Issue",
      },
      { color: "bg-red-600", key: "reklamacja", displayName: "Complaint" },
    ],
  },
  {
    group: "Return",
    items: [
      { color: "bg-red-600", key: "anulowane", displayName: "Canceled" },
      { color: "bg-red-600", key: "zwrot", displayName: "Return" },
    ],
  },
]

export { orderStatuses, type StatusItem }
