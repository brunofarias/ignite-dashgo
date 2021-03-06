import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  return (
    <Flex
      as="label"
      pos="relative"
      flex="1"
      align="center"
      maxW={400}
      ml="6"
      py="4"
      px="8"
      bg="gray.800"
      borderRadius="full"
      color="gray.200"
    >
      <Input
        color="gray.500"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: 'gray.400' }}
      />

      <Icon as={RiSearchLine} fontSize="20" />

    </Flex>
  );
}