export interface Media {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
}

export interface Instructor {
  name: string;
  short_description: string;
  image?: string;
  slug?: string;
  description?: string;
}

export interface Checklist {
  id: string;
  icon: string;
  text: string;
}

export interface CtaText {
  name: string;
  value: string;
}

export interface Section {
  type: string;
  name?: string;
  description?: string;
  order_idx?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  values?: any[];
}

export interface SeoMeta {
  content: string;
  type: string;
  value: string;
}

export interface SchemaMeta {
  meta_name: string;
  meta_value: string;
  type: string;
}

export interface Seo {
  defaultMeta: SeoMeta[];
  description: string;
  keywords: string[];
  schema: SchemaMeta[];
  title: string;
}

export interface ProductData {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  media: Media[];
  checklist: ChecklistItem[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
}

export interface ChecklistItem {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface MediaItem {
  name: string;
  resource_type: "video" | "image";
  resource_value: string;
  thumbnail_url?: string;
}

export interface MediaPlayerProps {
  media: MediaItem;
  className?: string;
}
