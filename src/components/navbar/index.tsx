import { HStack, VStack, useDisclosure } from "@chakra-ui/react";
import { RightContent } from "./right-content";
import { LeftContent } from "./left-content";
import { MobileNav } from "./mobile-nav";

export type MenuProps = Array<{
  label: string;
  uri: string;
  subitems?: Array<{ label: string; uri: string }>;
}>;

const menuItems: MenuProps = [
  {
    label: "Home",
    uri: "#",
  },
  {
    label: "Info",
    uri: "#",
  },
  {
    label: "Blog",
    uri: "#",
    subitems: [
      {
        label: "React",
        uri: "#",
      },
      {
        label: "JavaScript",
        uri: "#",
      },
      {
        label: "Next.js",
        uri: "#",
      },
    ],
  },
  {
    label: "Contact",
    uri: "#",
  },
];

export function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <VStack w="full" spacing={0}>
      <HStack
        w="full"
        alignItems="center"
        p={2}
        justifyContent="space-between"
        borderBottomWidth={1}
      >
        {/* left content */}
        <LeftContent items={menuItems} onToggle={onToggle} />
        {/* right content */}

        <RightContent />
      </HStack>
      {/* mobile content */}
      <MobileNav items={menuItems} isOpen={isOpen} />
    </VStack>
  );
}
