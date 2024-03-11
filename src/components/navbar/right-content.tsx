import {
  Avatar,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaBell, FaSearch } from "react-icons/fa";

export function RightContent() {
  return (
    <Flex alignItems="center" gap={2}>
      <IconButton
        aria-label="search"
        icon={<FaSearch />}
        variant="ghost"
        colorScheme="teal"
        display={{ base: "flex", md: "none" }}
        rounded="full"
        size="sm"
      />
      <InputGroup size="sm" display={{ base: "none", md: "flex" }}>
        <Input variant="filled" placeholder="Search..." />
        <InputRightElement>
          <FaSearch color="teal" />
        </InputRightElement>
      </InputGroup>

      <IconButton
        aria-label="search"
        icon={<FaBell />}
        variant="ghost"
        colorScheme="teal"
        rounded="full"
        size="sm"
      />

      <Avatar size="sm" name="D C" bg="teal" />
    </Flex>
  );
}
