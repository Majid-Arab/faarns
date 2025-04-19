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
export type BlogProps = {
  readTime: string;
  image: string;
  intro: string;
  description: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  intro: string;
  description: string;
  featured_image: string;
};

export type BlogSlugProp = {
  title: string;
  image: string;
  slug: string;
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
