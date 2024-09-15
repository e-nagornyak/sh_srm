/**
 * Checks if any property of the object has a truthy value.
 *
 * @param obj - The object to check.
 * @returns `true` if at least one property has a truthy value, otherwise `false`.
 */
export function hasAnyPropertyValue<T extends object>(obj: T): boolean {
  return Object.values(obj)?.some((value) => Boolean(value))
}
