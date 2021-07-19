import { Flex, Box, Avatar, Stack, Input, Text } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { MutableRefObject, useRef } from 'react';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { MdAttachFile } from 'react-icons/md';
import { RiMore2Line } from 'react-icons/ri';
import { Icon } from '../Icon';
import { Message } from './Message';

interface ChatProps {
  chat_id: number;
  title: string;
}

interface UserProps {
  id: string;
  name: string;
  avatar: string
}

interface WindowProps {
  chat: ChatProps;
  user: UserProps;
}

interface MessageProps {
  sender_id: string;
  body: string;
  date: string;
}

export function Window({ chat, user }: WindowProps) {
  const [list, setList] = useState<MessageProps[]>([
    { sender_id: '1', body: 'Ola Maria, como vai?', date: '18:01' },
    { sender_id: '2', body: 'Oi Josimar, tudo bem e com vc?', date: '18:03' },
    { sender_id: '1', body: 'Vou ótimo, que bom te ver!', date: '18:06' },
    { sender_id: '1', body: 'Faz tempo que não te vejo...', date: '18:06' },
    { sender_id: '1', body: 'Ola Maria, como vai?', date: '18:01' },
    { sender_id: '2', body: 'Oi Josimar, tudo bem e com vc?', date: '18:03' },
    { sender_id: '1', body: 'Vou ótimo, que bom te ver!', date: '18:06' },
    { sender_id: '1', body: 'Faz tempo que não te vejo...', date: '18:06' },
    { sender_id: '1', body: 'Ola Maria, como vai?', date: '18:01' },
    { sender_id: '2', body: 'Oi Josimar, tudo bem e com vc?', date: '18:03' },
    { sender_id: '1', body: 'Vou ótimo, que bom te ver!', date: '18:06' },
    { sender_id: '1', body: 'Faz tempo que não te vejo...', date: '18:06' },
    { sender_id: '1', body: 'Ola Maria, como vai?', date: '18:01' },
    { sender_id: '2', body: 'Oi Josimar, tudo bem e com vc?', date: '18:03' },
    { sender_id: '1', body: 'Vou ótimo, que bom te ver!', date: '18:06' },
    { sender_id: '1', body: 'Faz tempo que não te vejo...', date: '18:06' },
    { sender_id: '1', body: 'Ola Maria, como vai?', date: '18:01' },
    { sender_id: '2', body: 'Oi Josimar, tudo bem e com vc?', date: '18:03' },
    { sender_id: '1', body: 'Vou ótimo, que bom te ver!', date: '18:06' },
    { sender_id: '1', body: 'Faz tempo que não te vejo...', date: '18:06' },
    { sender_id: '1', body: 'Ola Maria, como vai?', date: '18:01' },
    { sender_id: '2', body: 'Oi Josimar, tudo bem e com vc?', date: '18:03' },
    { sender_id: '1', body: 'Vou ótimo, que bom te ver!', date: '18:06' },
    { sender_id: '1', body: 'Faz tempo que não te vejo...', date: '18:06' },
  ]);

  const bodyRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (bodyRef.current?.scrollHeight > bodyRef.current?.offsetHeight) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight - bodyRef.current.offsetHeight;
    }
  }, [list]);

  const [text, setText] = useState<string>('');
  const [emojiOpen, setEmojiOpen] = useState<boolean>(false);
  // const [listening, setListening] = useState<boolean>(false);

  const handleEmojiClick = useCallback((event: Event, emojiObject: { emoji: string }) => {
    setText(text + emojiObject.emoji);
  }, [text]);

  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  }

  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  }

  return (
    <Box as={Flex} flexDirection="column" height="100%">
      <Box
        height="3.75rem"
        borderBottom="1px solid #DDD"
        as={Flex}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box as={Flex} alignItems="center" cursor="pointer">
          <Avatar
            size="md"
            name={chat.title}
            cursor="pointer"
            marginX="1rem"
          />
          <Text fontSize="1rem" color="#000">{chat.title}</Text>
        </Box>
        <Box
          as={Flex}
          alignItems="center"
          marginRight="1rem"
        >
          <Stack direction="row">
            <Icon icon={FiSearch} />
            <Icon icon={MdAttachFile} />
            <Icon icon={RiMore2Line} />
          </Stack>
        </Box>
      </Box>
      <Box
        flex="1"
        overflowY="auto"
        bg="#E5DDD5"
        backgroundSize="cover"
        backgroundPosition="top"
        padding="1rem 1.5rem"
        css={{
          '&::-webkit-scrollbar': {
            width: '0.375rem',
            height: '0.375rem'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
          },
        }}
        ref={bodyRef}
      >
        {
          list.map((item, key) => (
            <Message 
              key={key}
              item={item}
              user={user}
            />
          ))
        }
      </Box>
      <Box>

      </Box>
    </Box>
  );
}