import { TagObject } from "../types/tag";

export function sortTags(tags: TagObject[]): TagObject[] {
  const collator = new Intl.Collator("ru");
  return tags.sort((a, b) => collator.compare(a.label, b.label));
}
