import { Pagination } from "@mantine/core";
import React from "react";
import classes from "./Pagination.module.css";

const PaginationBar = () => {
  return <Pagination total={10} className={classes.control} />;
};

export default PaginationBar;
