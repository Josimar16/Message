import { Flex, Avatar, Text } from '@chakra-ui/react';

interface ParticipantsProps {
  name: string;
  members: number;
}

export function Participants({ name, members }: ParticipantsProps) {
  return (
    <Flex alignItems="center" w="100%" py="0.5rem">
      <Avatar
        w="3rem"
        h="3rem"
        name={name}
        cursor="pointer"
        marginRight="1rem"
      />
      <Flex
        flexDirection="column"
        justifyContent="space-between"
      >
        <Text fontSize="1rem"> {name}</Text>
        <Text fontSize="0.75rem" lineHeight="1rem" color="#999" whiteSpace="nowrap">
          {members} membros
        </Text>
      </Flex>
    </Flex>
  );
}