import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface CountrySelectProps {}

export function CountrySelect(props: CountrySelectProps) {
  return (
    <Select defaultValue="sheibar">
      <SelectTrigger size="xs">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">1</SelectItem>
      </SelectContent>
    </Select>
  )
}
