import { ElementType } from 'react';
import { Box, Flex, Icon as IconChakra } from '@chakra-ui/react';

interface IconProps {
  icon: ElementType;
  color?: string;
}

export function Icon({ icon, color = '#919191' }: IconProps) {
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
      <IconChakra as={icon} color={color} fontSize="xl" />
    </Box>
  );
}