import { BlogSlug, BlogPost } from "./type";

export const blogData: Record<string, BlogPost> = {
  "top-10": {
    readTime: "22",
    title: "Top 10 places to visit in Norway this summer",
    intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/assets/blog.png",
    author: "Jhon Doe",
    date: "20/Sep/2024",
    category: "Artifical Intelligence",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam labore quod ipsum! Repudiandae, dignissimos et! Ipsum, tempore natus. Necessitatibus nobis id quae nesciunt, cumque quidem nam suscipit voluptate nihil perspiciatis totam quod?",
  },
  "best-forests": {
    readTime: "22",
    title: "Best forests to visit in North America",
    intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/assets/blog.png",
    author: "Jhon Doe",
    date: "20/Sep/2024",
    category: "Sofware Engineering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam labore quod ipsum! Repudiandae, dignissimos et! Ipsum, tempore natus. Necessitatibus nobis id quae nesciunt, cumque quidem nam suscipit voluptate nihil perspiciatis totam quod?",
  },
  "hawaii-beaches": {
    readTime: "22",
    title: "Hawaii beaches review: better than you think",
    intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/assets/blog.png",
    author: "Jhon Doe",
    date: "20/Sep/2024",
    category: "Information Technology",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam labore quod ipsum! Repudiandae, dignissimos et! Ipsum, tempore natus. Necessitatibus nobis id quae nesciunt, cumque quidem nam suscipit voluptate nihil perspiciatis totam quod?",
  },
  "mountains-at-night": {
    readTime: "22",
    title: "Mountains at night: 12 best locations to enjoy the view",
    intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/assets/blog.png",
    author: "Jhon Doe",
    date: "20/Sep/2024",
    category: "Artifical Intelligence",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam labore quod ipsum! Repudiandae, dignissimos et! Ipsum, tempore natus. Necessitatibus nobis id quae nesciunt, cumque quidem nam suscipit voluptate nihil perspiciatis totam quod?",
  },
} as const;
