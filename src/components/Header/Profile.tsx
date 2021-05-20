import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileDate?: boolean;
}

export function Profile({ showProfileDate = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileDate && (
        <Box mr="4" textAlign="right">
          <Text>Bruno Farias</Text>
          <Text color="gray.300" fontSize="small">
            begfarias@gmail.com
          </Text>
        </Box>
      )}
      
      <Avatar size="md" name="Bruno Farias" src="https://github.com/brunofarias.png" />
    </Flex>
  );
}