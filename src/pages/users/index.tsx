import { Box, Button, Checkbox, Flex, Heading, Icon, IconButton, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Pagination } from '../../components/Pagination';
import Link from 'next/link';
import { ActiveLink } from '../../components/ActiveLink';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>

      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["4", "6", "8"]}>
          <Flex mb="8" justify="space-between" align="center">

            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <ActiveLink href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar Novo
            </Button>
            </ActiveLink>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["2", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuários</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["2", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Bruno Farias</Text>
                    <Text fontSize="sm" color="gray.300">begfarias@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>27 de Abril, 2021</Td>}
                <Td px={["2", "4", "6"]}>
                  {isWideVersion
                    ? (
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        Editar
                      </Button>
                    )
                    : (
                      <IconButton
                        as="a"
                        aria-label="Editar usuário"
                        colorScheme="purple"
                        icon={<Icon as={RiPencilLine} />}
                      />
                    )
                  }
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />

        </Box>
      </Flex>

    </Box>
  );
}