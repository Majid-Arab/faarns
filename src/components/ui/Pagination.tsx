import { Pagination } from "@mantine/core";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./Pagination.module.css";

const PaginationBar = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Pagination
      total={10}
      classNames={classes}
      gap={isMobile ? 2 : 8}
      size={isMobile ? "sm" : "md"}
    />
  );
};

export default PaginationBar;
