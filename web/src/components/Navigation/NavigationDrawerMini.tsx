import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';

import { Icon } from '../Icon';
import { ActiveLink } from '../ActiveLink';
import { useModal } from '../../hooks/Modal';

import { CgProfile } from 'react-icons/cg';
import { FaSignOutAlt } from 'react-icons/fa';
import { RiChatNewLine, RiDashboardLine } from 'react-icons/ri';
import { HiOutlineChatAlt } from 'react-icons/hi';

export function NavigationDrawerMini() {
  const { onOpen } = useModal();

  return (
    <Box
      height="100%"
      as={Flex}
      flexDirection="column"
      alignItems="center"
      padding="1.5rem 1rem"
      justifyContent="space-between"
    >
      <Flex alignItems="center" flexDirection="column">
        <Image
          src="/assets/images/logo_message.svg"
          alt="Brisa Message"
          height="80px"
        />

        <Stack direction="column" marginTop="2rem">
          <ActiveLink href="/dashboard">
            <Icon icon={RiDashboardLine} />
          </ActiveLink>
          <ActiveLink href="/">
            <Icon icon={HiOutlineChatAlt} />
          </ActiveLink>
          <ActiveLink href="/chat/new">
            <Icon icon={RiChatNewLine} />
          </ActiveLink>
          <Icon icon={CgProfile} handle={onOpen} />
        </Stack>
      </Flex>
      <Box>
        <Icon icon={FaSignOutAlt} />
        <Text color="#FFF">SAIR</Text>
      </Box>
    </Box>
  );
}