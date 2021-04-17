import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      px="6"
      align="center"
    >
      <Text
        w="64"
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
      >
        dashgo
        <Text as="span" color="pink.500" ml="1">.</Text>
      </Text>

      <Flex
        as="label"
        pos="relative"
        flex="1"
        alignSelf="center"
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

      <Flex align="center" ml="auto">
        <HStack
          spacing="4"
          mx="8"
          pr="8"
          py="1"
          color="gray.700"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Bruno Farias</Text>
            <Text color="gray.300" fontSize="small">begfarias@gmail.com</Text>
          </Box>
          <Avatar size="md" name="Bruno Farias" src="https://github.com/brunofarias.png" />
        </Flex>
      </Flex>

    </Flex>
  );
}