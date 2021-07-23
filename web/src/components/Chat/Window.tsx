
import "regenerator-runtime";
import dynamic from "next/dynamic";
import {
  useCallback,
  useEffect,
  useState,
  MutableRefObject,
  useRef
} from 'react';
import
SpeechRecognition,
{ useSpeechRecognition }
  from 'react-speech-recognition';

import {
  Flex,
  Box,
  Avatar,
  Stack,
  Input,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from '@chakra-ui/react';

import {
  RiSearchLine,
  RiLayoutRightLine,
  RiMore2Line,
  RiCloseLine,
  RiEmotionLine,
  RiMicLine,
  RiSendPlaneLine,
  RiPauseCircleLine,
  RiCheckboxCircleLine,
  RiCloseCircleLine,
  RiArchiveLine
} from 'react-icons/ri';

import { Icon } from '../Icon';
import { Icon as IconChat } from '../Chat/Icon';
import { Message } from './Message';
import { useAside } from "../../hooks/Aside";
import { ButtonLink } from "../ButtonLink";

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
  const { setActive } = useAside();

  const [list, setList] = useState<MessageProps[]>([
    { sender_id: '1', body: 'Lorem ipsum dolor sit amet, dolore magna aliqua.', date: '18:01' },
    { sender_id: '2', body: 'Lorem ipsum dolor.', date: '18:03' },
    { sender_id: '1', body: 'Lorem ipsum dolor sididunt ut labore et dolore magna aliqua.', date: '18:06' },
    { sender_id: '1', body: 'Lorem qua.', date: '18:06' },
    { sender_id: '1', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing ', date: '18:01' },
    { sender_id: '2', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliqua.', date: '18:03' },
    { sender_id: '1', body: 'Lorem ipsum dolor sit amere magna aliqua.', date: '18:06' },
    { sender_id: '1', body: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', date: '18:06' },
    { sender_id: '1', body: 'Lorequa.', date: '18:01' },
    { sender_id: '2', body: 'Lort labore et dolore magna aliqua.', date: '18:03' },
    { sender_id: '1', body: 'Loreabore et dolore magna aliqua.', date: '18:06' },
    { sender_id: '1', body: 'bore et dolore magna aliqua.', date: '18:06' },
    { sender_id: '1', body: 'Lorem ipsum dolor sit amet, lore magna aliqua.', date: '18:01' },
    { sender_id: '2', body: 'Lorem agna aliqua.', date: '18:03' },
    { sender_id: '1', body: 'ore et dolore magna aliqua.', date: '18:06' },
    { sender_id: '1', body: 'g elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', date: '18:06' },
    { sender_id: '1', body: 'Lorem ipsum do et dolore magna aliqua.', date: '18:01' },
    { sender_id: '2', body: 'Lorem ipsum dolor sit ameet dolore magna aliqua.', date: '18:03' },
    { sender_id: '1', body: 'Lorem ip aliqua.', date: '18:06' },
  ]);

  const bodyRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (bodyRef.current?.scrollHeight > bodyRef.current?.offsetHeight) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight - bodyRef.current.offsetHeight;
    }
  }, [list]);

  const [text, setText] = useState<string>('');
  const [emojiOpen, setEmojiOpen] = useState<boolean>(false);

  // const handleEmojiClick = useCallback((event: Event, emojiObject: { emoji: string }) => {
    
  // }, [text]);

  const handleEmojiClick = (emojiObject: { emoji: string }) => {
    setText(text + emojiObject.emoji);
  }

  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  }

  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  }

  const { transcript, resetTranscript } = useSpeechRecognition();
  const [listening, setListening] = useState<boolean>(false);

  const handleStartMic = () => {
    resetTranscript();
    setListening(true);

    SpeechRecognition.startListening({ continuous: true });
  }

  const handleEndMic = () => {
    setListening(false);
    SpeechRecognition.stopListening();
    setText(transcript);
  }

  const handleSendClick = () => {
    setList(oldState => [...oldState, { sender_id: '1', body: text, date: '18:06' }]);
    setText('');
  }

  return (
    <Box as={Flex} bg="#EFF5F5" flexDirection="column" height="100%">
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
          <Box>
            <Text fontSize="1rem" color="#000">{chat.title}</Text>
            <Text fontSize="0.75rem" color="#999" lineHeight="0.75rem">
              Última interação em 1h atrás
            </Text>
          </Box>
        </Box>
        <Box
          as={Flex}
          alignItems="center"
          marginRight="1rem"
        >
          <Stack direction="row">
            <Icon color="#497173" icon={RiSearchLine} />
            <Icon
              color="#497173"
              icon={RiLayoutRightLine}
              handle={setActive}
            />

            <Popover
              placement="bottom"
              closeOnBlur={false}
            >
              <PopoverTrigger>
                <Button
                  variant="link"
                  _focus={{
                    outline: "0"
                  }}
                >
                  <Icon color="#497173" icon={RiMore2Line} />
                </Button>
              </PopoverTrigger>
              <PopoverContent _focus={{ border: '0', outline: 0 }}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Ações no protocolo</PopoverHeader>
                <PopoverBody>
                  <ButtonLink 
                    title="Finalizar Protocolo"
                    color="#497173"
                    icon={RiCheckboxCircleLine}
                  />
                  <ButtonLink 
                    title="Cancelar Protocolo"
                    color="#E53E3E"
                    icon={RiCloseCircleLine}
                  />
                  <ButtonLink 
                    title="Arquivar Protocolo"
                    color="#DD6B20"
                    icon={RiArchiveLine}
                  />
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Stack>
        </Box>
      </Box>
      <Box
        flex="1"
        overflowY="auto"
        bg="#FFF"
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
          <IconChat
            width={emojiOpen ? '2.5rem' : '0'}
            icon={RiCloseLine}
            handle={handleCloseEmoji}
          />
          <IconChat
            icon={RiEmotionLine}
            color={emojiOpen ? '#009688' : '#497173'}
            handle={handleOpenEmoji}
          />
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
            backgroundColor="#EFF5F5"
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
          {(text === '' && listening) &&
            <Icon
              icon={RiPauseCircleLine}
              color="#009688"
              handle={handleEndMic}
            />
          }
          {text === '' &&
            <Icon
              icon={RiMicLine}
              color={listening ? '#126ECE' : '#497173'}
              handle={handleStartMic}
            />
          }

          <Icon
            color="#497173"
            icon={RiSendPlaneLine}
            handle={handleSendClick}
          />
        </Box>
      </Box>
    </Box>
  );
}