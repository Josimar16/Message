import dynamic from "next/dynamic";
import { 
  useCallback, 
  useEffect, 
  useState,
  MutableRefObject, 
  useRef
} from 'react';

import { 
  Flex, 
  Box, 
  Avatar, 
  Stack, 
  Input, 
  Icon as IconChakra, 
  Text 
} from '@chakra-ui/react';

import { 
  RiSearchLine, 
  RiAttachmentLine, 
  RiMore2Line, 
  RiCloseLine,
  RiEmotionLine,
  RiMicLine,
  RiSendPlaneLine 
} from 'react-icons/ri';

import { Icon } from '../Icon';
import { Message } from './Message';

const EmojiPicker = dynamic(() => import("emoji-picker-react"), {
  ssr: false,
});

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
  const [listening, setListening] = useState<boolean>(false);

  const handleEmojiClick = useCallback((event: Event, emojiObject: { emoji: string }) => {
    setText(text + emojiObject.emoji);
  }, [text]);

  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  }

  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  }

  const handleMicClick = () => {

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
            <Icon icon={RiSearchLine} />
            <Icon icon={RiAttachmentLine} />
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
      <Box
        height={emojiOpen ? '16rem' : '0px'}
        overflowY="hidden"
        transition="all ease 0.3s"
      >
        <EmojiPicker 
          onEmojiClick={() => handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
          pickerStyle={{ width: 'auto', background: 'none' }}
        />
      </Box>
      <Box as={Flex} height="4rem" alignItems="center">
        <Box as={Flex} margin="0 1rem">
          <Box
            width={emojiOpen ? '2.5rem' : '0'}
            height="2.5rem"
            borderRadius="1.25rem"
            as={Flex}
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            overflow="hidden"
            transition="all ease 0.3s"
            onClick={handleCloseEmoji}
          >
            <IconChakra as={RiCloseLine} color="#919191" fontSize="xl" />
          </Box>
          <Box
            width="2.5rem"
            height="2.5rem"
            borderRadius="1.25rem"
            as={Flex}
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            overflow="hidden"
            transition="all ease 0.3s"
            onClick={handleOpenEmoji}
            color={emojiOpen ? '#009688' : '#919191'}
          >
            <IconChakra as={RiEmotionLine} color="#919191" fontSize="xl" />
          </Box>
        </Box>
        <Box flex="1">
          <Input 
            type="text"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={e => setText(e.target.value)} 
            width="100%"
            height="2.5rem"
            border="0"
            outline="0"
            backgroundColor="#FFF"
            borderRadius="1.25rem"
            fontSize="1rem"
            color="#4A4A4A"
            paddingLeft="1rem"
            _focus={{
              border: "0",
              outline: "0"
            }}
          />
        </Box>
        <Box as={Flex} margin="0 1rem">
          {text === '' && 
              <Icon 
                icon={RiMicLine}
                color={listening ? '#126ECE' : '#919191'}
              />
          }
          {text !== '' && <Icon icon={RiSendPlaneLine} />}
        </Box>
      </Box>
    </Box>
  );
}