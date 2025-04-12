import { Button, Group, Textarea, TextInput } from "@mantine/core";
import React from "react";
import classes from "./Form.module.css";

const Form = () => {
  return (
    <form action="" className={classes.form}>
      <TextInput
        placeholder="Name"
        required
        classNames={{ input: classes.input }}
      />
      <TextInput
        placeholder="Email Address"
        required
        mt={50}
        classNames={{ input: classes.input }}
      />
      <TextInput
        placeholder="Phone Number (Optional)"
        mt={50}
        classNames={{ input: classes.input }}
      />
      <Textarea
        required
        placeholder="Tell us about your business"
        minRows={8}
        rows={4}
        mt={50}
        classNames={{ input: classes.input }}
      />

      <Group justify="center">
        <Button className={classes.control} size="xl" radius="md">
          Send application
        </Button>
      </Group>
    </form>
  );
};

export default Form;
