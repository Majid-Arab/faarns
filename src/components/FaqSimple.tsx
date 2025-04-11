import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Container,
} from "@mantine/core";
import { Icon123, IconChevronDown } from "@tabler/icons-react";

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.";

const faqData = [
  {
    value: "reset-password",
    question: "How can I reset my password?",
    answer: placeholder,
  },
  {
    value: "another-account",
    question: "Can I create more than one account?",
    answer: placeholder,
  },
  {
    value: "newsletter",
    question: "How can I subscribe to monthly newsletter?",
    answer: placeholder,
  },
  {
    value: "credit-card",
    question: "Do you store credit card information securely?",
    answer: placeholder,
  },
];

export function FaqSimple() {
  return (
    <Accordion
      chevronPosition="right"
      defaultValue="reset-password"
      chevronSize={50}
      className="text[#242424]"
      chevron={<IconChevronDown style={{ width: "60%", height: "60%" }} />}
    >
      {faqData.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="border-[#363434]"
        >
          <AccordionControl
            // py={20}
            px={0}
            className="py-1 md:py-2 text-xl md:text-2xl text-white hover:bg-[#242424] rounded-md"
          >
            <b>{item.question}</b>
          </AccordionControl>
          <AccordionPanel className="text-md md:text-xl">
            {item.answer}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
