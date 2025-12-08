export const toURLFriendlySlug = (slug: string) => {
  return slug.toLowerCase().trim().replace(/\s+/g, '-');
}