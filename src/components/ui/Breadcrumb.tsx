import { Breadcrumbs, Anchor } from "@mantine/core";

type BreadcrumbItem = {
  title: string;
  href: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
};

const Breadcrumb = ({ items, separator = ">" }: BreadcrumbProps) => {
  const links = items.map((item, index) => (
    <Anchor
      href={item.href}
      key={index}
      className="text-white text-sm md:text-md"
    >
      {item.title}
    </Anchor>
  ));

  return (
    <Breadcrumbs
      separator={separator}
      separatorMargin="5px"
      className="border-solid border-[1px] border-dark-300 py-[6px] px-[20px]  rounded-full bg-[#66626226]"
    >
      {links}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
