export function sortAlphabet<T>(
  getValue: (item: T) => string
): (a: T, b: T) => number {
  const collator = new Intl.Collator("ru");
  return (a: T, b: T) => collator.compare(getValue(a), getValue(b));
}
