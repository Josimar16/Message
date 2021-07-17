import Head from 'next/head';
import { useState } from 'react';
import { Box, Flex, Stack, Avatar, Icon, Input } from '@chakra-ui/react';
import { RiDashboardLine, RiMore2Line, RiSearchLine, RiSettings5Line } from 'react-icons/ri';
import { Chat } from '../components/Chat';
import { Window } from '../components/Chat/Window';
import { Welcome } from '../components/Welcome';

export default function Home() {
  const [chatList, setChatList] = useState([
    { chat_id: 1, title: 'Maxmiller Nunes', status: 'orange.400', date: '16/07/2021 08:47', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
    { chat_id: 2, title: 'Manoel Carvalho', status: 'orange.400', date: '08:50', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
    { chat_id: 3, title: 'Carlos Cenci', status: 'green.400', date: '09:55', last_message: 'Mensageria é um conceito que define que sistemas distribuídos, possam se comunicar por meio de troca de mensagens (evento),' },
  ]);

  const [activeChat, setActiveChat] = useState({ chat_id: 0 })

  const [user, setUser] = useState({
    id: 1,
    name: 'Josimar Martins',
    avatar: 'https://avatars3.githubusercontent.com/u/49077388?s=400&u=551a7010f9fc91859229f0d600481a2b2ca118a6&v=4'
  });

  //1f3f5f
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
        bgGradient="linear(#1f3f5f 0%, #1f3f5f 15%, #1f3f5f 20%, #dadbd3 20%)"
      >
        <Flex
          width="1480px"
          height="calc(100vh - 2.5rem)"
          margin="1.25rem"
          bg="#EDEDED"
          direction="row"
        >
          <Box
            as={Flex}
            width="35%"
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
                <Box
                  width="2.5rem"
                  height="2.5rem"
                  borderRadius="1.25rem"
                  as={Flex}
                  justifyContent="center"
                  alignItems="center"
                  cursor="pointer"
                >
                  <Icon as={RiDashboardLine} color="#919191" fontSize="lg" />
                </Box>
                <Box
                  width="2.5rem"
                  height="2.5rem"
                  borderRadius="1.25rem"
                  as={Flex}
                  justifyContent="center"
                  alignItems="center"
                  cur="pointer"
                >
                  <Icon as={RiSettings5Line} color="#919191" fontSize="lg" />
                </Box>
                <Box
                  width="2.5rem"
                  height="2.5rem"
                  borderRadius="1.25rem"
                  as={Flex}
                  justifyContent="center"
                  alignItems="center"
                  cur="pointer"
                >
                  <Icon as={RiMore2Line} color="#919191" fontSize="lg" />
                </Box>
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
                <Icon as={RiSearchLine} color="#919191" fontSize="lg" />
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
            {activeChat.chat_id !== 0 && <Window />}
            {activeChat.chat_id === 0 && <Welcome />}
          </Box>
        </Flex>
      </Box>
    </>
  )
}
