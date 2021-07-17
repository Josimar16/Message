import { Flex, Box, Avatar, AvatarBadge, Text } from '@chakra-ui/react';

interface ItemProps {
  chat_id: number;
  title: string;
  date: string;
  status: string;
  last_message: string;
}

interface ChatProps {
  handle: () => void;
  active: boolean;
  item: ItemProps;
}

export function Chat({ active, handle, item }: ChatProps) {
  return (
    <Box
      as={Flex}
      cursor="pointer"
      alignItems="center"
      height="4.25rem"
      bg={active ? '#EBEBEB' : 'transparent'}
      _hover={{
        background: "#F5F5F5"
      }}
      onClick={handle}
    >
      <Avatar
        size="md"
        name={item.title}
        cursor="pointer"
        marginLeft="1rem"
      >
        <AvatarBadge boxSize="1em" bg={item.status} />
      </Avatar>
      <Box
        flex="1"
        height="100%"
        as={Flex}
        flexDirection="column"
        justifyContent="center"
        borderBottom="1px solid #EEE"
        paddingRight="1rem"
        marginLeft="1rem"

        flexWrap="wrap"
        minWidth="0"
      >
        <Box
          as={Flex}
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Text fontSize="1rem" color="#000">
            {item.title}
          </Text>
          <Text fontSize="0.75rem" color="#999">
            {item.date}
          </Text>
        </Box>
        <Box
          as={Flex}
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Box
            fontSize="0.875rem"
            color="#999"
            as={Flex}
            width="100%"
          >
            <Text
              overflow="hidden"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              margin="0"
            >
              {item.last_message}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}