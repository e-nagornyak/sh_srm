import { Button } from "@/components/ui/button"

interface OrderViewShipmentsProvidersProps {}

export function OrderViewShipmentsProviders(
  props: OrderViewShipmentsProvidersProps
) {
  return (
    <div className={"flex gap-2 pt-2"}>
      {["Allegro", "BLPaczka", "DPD PL"]?.map((p) => (
        <Button variant="outline" size="sm">
          {p}
        </Button>
      ))}
    </div>
  )
}
