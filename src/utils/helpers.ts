// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getSectionsByType(sections: any[], type: string) {
  return sections.filter((section) => section.type === type);
}
