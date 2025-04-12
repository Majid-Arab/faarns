import { Container, Text } from "@mantine/core";
import classes from "./Footer.module.css";
import Image from "next/image";

const data = [
  {
    title: "Services",
    links: [
      { label: "Features", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Support", link: "#" },
      { label: "Forums", link: "#" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Contribute", link: "#" },
      { label: "Media assets", link: "#" },
      { label: "Changelog", link: "#" },
      { label: "Releases", link: "#" },
    ],
  },
];

const Footer = () => {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        // onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container fluid className={classes.inner}>
        <div className={classes.groups}>
          <div className={classes.logo}>
            <Text className={classes.title}>Contact</Text>
            <Text className={classes.description}>
              Suite A 82 James Carter Road, Mildenhall, Bury St. Edmunds,
              England, United Kingdom, IP28 7DE
            </Text>
            <div className="flex items-center gap-1 text-lg underline underline-offset-8">
              <Image
                src="/assets/mail.svg"
                alt="Mail"
                width={500}
                height={500}
                className="w-[25px] h-[25px] md:w-2 md:h-2"
              />
              Faisal@Faarns.Com
            </div>
            <div className="flex items-center gap-1 text-lg">
              <Image
                src="/assets/phone.svg"
                alt="Mail"
                width={500}
                height={500}
                className="w-[25px] h-[25px] md:w-2 md:h-2"
              />
              +932524635252
            </div>
          </div>
          {groups}
        </div>
      </Container>
      <Container fluid className={classes.afterFooter}>
        <Text size="sm">Terms & Conditions</Text>
        <Text size="sm">© 2020 Faarns. All rights reserved.</Text>
        <Text size="sm">Privacy Policy</Text>
      </Container>

      <Container fluid>
        <h1 className="text-7xl text-center sm:text-8xl md:text-[200px] lg:text-[300px] font-bold uppercase m-0 p-0">
          Faarns
        </h1>
      </Container>
    </footer>
  );
};

export default Footer;
