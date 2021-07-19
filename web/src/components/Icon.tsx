import { ElementType } from 'react';
import { Box, Flex, Icon as IconChakra } from '@chakra-ui/react';

interface IconProps {
  icon: ElementType
}

export function Icon({ icon }: IconProps) {
  return (
    <Box
      width="2.5rem"
      height="2.5rem"
      borderRadius="1.25rem"
      as={Flex}
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
    >
      <IconChakra as={icon} color="#919191" fontSize="lg" />
    </Box>
  );
}