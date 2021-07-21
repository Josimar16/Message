import Head from 'next/head';
import { useState } from 'react';
import { Box, Flex, Stack, Avatar, Icon as IconChakra, 
        Input, useBreakpointValue, Text 
} from '@chakra-ui/react';
import { RiDashboardLine, RiMore2Line, RiSearchLine, RiSettings5Line } from 'react-icons/ri';
import { Chat } from '../components/Chat';
import { Window } from '../components/Chat/Window';
import { Welcome } from '../components/Welcome';
import { Icon } from '../components/Icon';
import { Information } from '../components/Chat/Information';

interface ChatProps {
  chat_id: number;
  title: string;
  date: string;
  status: string;
  last_message: string;
}

export default function Home() {
  const [chatList, setChatList] = useState<ChatProps[]>([
    { chat_id: 1, title: 'Protocolo #5161611', status: 'orange.400', date: '16/07/2021 08:47', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
    { chat_id: 2, title: 'Protocolo #5161612', status: 'orange.400', date: '08:50', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
    { chat_id: 3, title: 'Protocolo #5161613', status: 'green.400', date: '09:55', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
    { chat_id: 3, title: 'Protocolo #5161614', status: 'green.400', date: '09:55', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
    { chat_id: 3, title: 'Protocolo #5161615', status: 'green.400', date: '09:55', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
    { chat_id: 3, title: 'Protocolo #5161616', status: 'green.400', date: '09:55', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
    { chat_id: 3, title: 'Protocolo #5161677', status: 'green.400', date: '09:55', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
    { chat_id: 3, title: 'Protocolo #5161618', status: 'green.400', date: '09:55', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
    { chat_id: 3, title: 'Protocolo #5161619', status: 'green.400', date: '09:55', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
    { chat_id: 3, title: 'Protocolo #51616110', status: 'green.400', date: '09:55', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
    { chat_id: 3, title: 'Protocolo #51616111', status: 'green.400', date: '09:55', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
    { chat_id: 3, title: 'Protocolo #5161611', status: 'green.400', date: '09:55', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
    { chat_id: 3, title: 'Protocolo #5161611', status: 'green.400', date: '09:55', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
    { chat_id: 3, title: 'Protocolo #5161611', status: 'green.400', date: '09:55', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
    { chat_id: 3, title: 'Protocolo #5161611', status: 'green.400', date: '09:55', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
    { chat_id: 3, title: 'Protocolo #5161611', status: 'green.400', date: '09:55', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
    { chat_id: 3, title: 'Protocolo #5161611', status: 'green.400', date: '09:55', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
    { chat_id: 3, title: 'Protocolo #5161611', status: 'green.400', date: '09:55', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
    { chat_id: 3, title: 'Protocolo #5161611', status: 'green.400', date: '09:55', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
    { chat_id: 3, title: 'Protocolo #5161611', status: 'green.400', date: '09:55', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
    { chat_id: 3, title: 'Protocolo #5161611', status: 'green.400', date: '09:55', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
    { chat_id: 3, title: 'Protocolo #5161611', status: 'green.400', date: '09:55', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
  ]);

  const [activeChat, setActiveChat] = useState<ChatProps>({
    chat_id: 0,
    title: '',
    date: '',
    status: '',
    last_message: ''
  });

  const [user, setUser] = useState({
    id: '1',
    name: 'Josimar Martins',
    avatar: 'https://avatars3.githubusercontent.com/u/49077388?s=400&u=551a7010f9fc91859229f0d600481a2b2ca118a6&v=4'
  });

  const breakpoint = useBreakpointValue({
    base: '1120px',
    md: '1480px'
  })

  return (
    <>
      <Head>
        <title>Home | Mensageria</title>
        <meta name="description" content="Home do app de Portfólio" />
      </Head>
      <Box
        as={Flex}
        justifyContent="center"
        alignItems="center"
        bgGradient="linear(#dadbd3 0%, #dadbd3 25%, #dadbd3 85%, #1f3f5f 85%)"
      >
        <Flex
          width={breakpoint}
          height="calc(100vh - 2.5rem)"
          margin="1.25rem"
          bg="#EDEDED"
          direction="row"
        >
          <Box
            as={Flex}
            width="25%"
            max-width="26rem"
            flexDirection="column"
            borderRight="1px solid #DDD"
          >
            <Box
              height="3.75rem"
              as={Flex}
              justifyContent="space-between"
              alignItems="center"
              padding="0 1rem"
            >
              <Avatar
                size="md"
                name={user.name}
                src={user.avatar}
                cursor="pointer"
              />

              <Stack direction="row">
                <Icon icon={RiDashboardLine} />
                <Icon icon={RiSettings5Line} />
                <Icon icon={RiMore2Line} />
              </Stack>
            </Box>
            <Box
              bg="#F6F6F6"
              borderBottom="1px solid #EEE"
              padding="0.375rem 1rem"
            >
              <Box
                bg="#FFF"
                height="2.5rem"
                borderRadius="1.25rem"
                as={Flex}
                alignItems="center"
                padding="0 0.625rem"
              >
                <IconChakra as={RiSearchLine} color="#919191" fontSize="lg" />
                <Input
                  type="search"
                  placeholder="Procurar por um protocolo"
                  border="0"
                  outline="0"
                  _focus={{
                    border: "0",
                    outline: "0"
                  }}
                  bg="transparent"
                  marginLeft="0.625rem"
                  flex="1"
                />
              </Box>
            </Box>
            <Box
              flex="1"
              bg="#FFF"
              overflowY="auto"
              css={{
                '&::-webkit-scrollbar': {
                  width: '0.375rem',
                  height: '0.375rem'
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: 'rgba(0, 0, 0, 0.2)'
                },
              }}
            >
              {chatList.map((item, key) => (
                <Chat
                  key={key}
                  item={item}
                  active={activeChat.chat_id === chatList[key].chat_id}
                  handle={() => setActiveChat(chatList[key])}
                />
              ))}
            </Box>
          </Box>
          <Box flex="1">
            {activeChat.chat_id !== 0 && <Window chat={activeChat} user={user} />}
            {activeChat.chat_id === 0 && <Welcome />}
          </Box>
          {activeChat.chat_id !== 0 && <Information />}
        </Flex>
      </Box>
    </>
  )
}
