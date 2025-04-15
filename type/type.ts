import type { BlogSlug } from "./data";

// Header

export type NavItem = {
  link: string;
  icon?: React.ReactNode;
  name: string;
};

export type FloatingNavProps = {
  navItems: NavItem[];
  className?: string;
};

// Blogs
export type BlogsProp = {
  readTime: string;
  image: string;
  intro: string;
  content: string;
};

export type BlogSlugProp = {
  params: {
    slug: BlogSlug;
  };
};

// UI Components
export type BadgeProp = {
  text: string;
};

export type ItalicTextProp = {
  text: string;
  size?: string;
};

export type GridCardProp = {
  icon: React.ElementType;
  title: string;
  description: string;
};

// BreadCrumbs
export type BreadcrumbItem = {
  title: string;
  href: string;
};

export type BreadcrumbProps = {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
};
