
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
  Text
} from '@chakra-ui/react';

import {
  RiSearchLine,
  RiLayoutRightLine,
  RiMore2Line,
  RiCloseLine,
  RiEmotionLine,
  RiMicLine,
  RiSendPlaneLine,
  RiPauseCircleLine
} from 'react-icons/ri';

import { Icon } from '../Icon';
import { Icon as IconChat } from '../Chat/Icon';
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

  const handleEmojiClick = useCallback((event: Event, emojiObject: { emoji: string }) => {
    setText(text + emojiObject.emoji);
  }, [text]);

  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  }

  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  }

  // const { transcript, resetTranscript } = useSpeechRecognition();
  // const [listening, setListening] = useState<boolean>(false);
  // const microphoneRef = useRef() as MutableRefObject<HTMLAudioElement>;

  // const handleStartMic = () => {
  //   handleReset();
  //   setListening(true);
  //   // microphoneRef.current.classList.add("listening");
  //   SpeechRecognition.startListening({
  //     continuous: true
  //   });
  //   setText(transcript);
  //   handleReset();
  // }

  // const handleEndMic = () => {
  //   setListening(false);
  //   // microphoneRef.current.classList.remove("listening");
  //   SpeechRecognition.stopListening();
  //   console.log(transcript);
  // }

  // const handleReset = () => {
  //   handleEndMic();
  //   resetTranscript();
  // }

  const handleSendClick = () => {
    setList(oldState => [...oldState, { sender_id: '1', body: text, date: '18:06' }]);
    setText('');
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
            <Icon icon={RiLayoutRightLine} />
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
          onEmojiClick={handleEmojiClick}
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
            color={emojiOpen ? '#009688' : '#919191'}
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
          {/* {(text === '' && listening) &&
            <Icon
              icon={RiPauseCircleLine}
              color="#009688"
              handle={handleReset}
            />
          }
          {text === '' &&
            <Icon
              icon={RiMicLine}
              color={listening ? '#126ECE' : '#919191'}
              handle={handleStartMic}
            />
          }           */}

          <Icon
            icon={RiSendPlaneLine}
            handle={handleSendClick}
          />

        </Box>
      </Box>
    </Box>
  );
}