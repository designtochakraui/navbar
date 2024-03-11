import { Flex, Heading, IconButton, List } from "@chakra-ui/react";
import { MenuProps } from ".";
import { NavItem } from "./nav-item";
import { FaBurger } from "react-icons/fa6";

type LeftContentProps = {
  items: MenuProps;
  onToggle(): void;
};
export function LeftContent({ items, onToggle }: LeftContentProps) {
  return (
    <Flex alignItems="center" justifyContent="space-between" gap={4}>
      <IconButton
        aria-label="menu"
        colorScheme="teal"
        variant="ghost"
        icon={<FaBurger />}
        rounded="full"
        display={{ base: "flex", md: "none" }}
        onClick={onToggle}
      />

      <Heading color="teal" fontWeight="black">
        D2C
      </Heading>

      <List gap={2} display={{ base: "none", md: "flex" }}>
        {items.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </List>
    </Flex>
  );
}
