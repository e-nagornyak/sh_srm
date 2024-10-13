/**
 * Checks if any property of the object has a truthy value.
 *
 * @param obj - The object to check.
 * @returns `true` if at least one property has a truthy value, otherwise `false`.
 */
export function hasAnyPropertyValue<T extends object>(obj: T): boolean {
  return Object.values(obj).some((value) => {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return hasAnyPropertyValue(value)
    }
    return Boolean(value)
  })
}
