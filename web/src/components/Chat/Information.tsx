import { useState } from 'react';
import {
  Box, Flex, Text, Stack, HStack, Checkbox
} from '@chakra-ui/react';

import { RiCloseLine, RiImageLine } from 'react-icons/ri';
import { BiVideo } from 'react-icons/bi';
import { CgFile } from 'react-icons/cg';
import { BsCardChecklist } from 'react-icons/bs';
import { HiOutlineViewGridAdd } from 'react-icons/hi';

import { Icon } from '../Icon';

export function Information() {

  const [checkedItems, setCheckedItems] = useState<boolean[]>([false, true, false])

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked

  return (
    <Box
      as={Flex}
      width="25%"
      bg="#FFF"
      max-width="26rem"
      flexDirection="column"
      borderLeft="1px solid #DDD"
    >
      <Box
        as={Flex}
        flexDirection="column"
        bg="#EDEDED"
        padding="1.25rem"
      >
        <Box
          as={Flex}
          justifyContent="space-between"
          alignItems="center"
          marginBottom="0.5rem"
        >
          <Text fontSize="1rem" color="#000">
            Informações do protocolo
          </Text>
          <Icon icon={RiCloseLine} />
        </Box>

        <Stack>
          <Text fontSize="1rem" color="#000">Nome do protocolo</Text>
          <Text fontSize="0.75rem" lineHeight="0.5rem" color="#999">14 integrantes</Text>
        </Stack>

        <Stack marginTop="1.5rem">
          <Text fontSize="0.875rem" lineHeight="0.875rem" color="#919191">Abertura: 20/07/2021 00:32 </Text>
          <Text fontSize="0.875rem" lineHeight="0.875rem" color="#919191">Prazo limite: 22/07/2021 00:32 </Text>
          <Text fontSize="0.875rem" lineHeight="0.875rem" color="orange.500">Tempo corrido: 10 horas de 48 horas </Text>
        </Stack>
      </Box>

      <Stack
        bg="#EDEDED"
        marginTop="0.75rem"
        padding="0.75rem"
      >
        <HStack>
          <Icon icon={RiImageLine} />
          <Text fontSize="0.875rem" color="#919191">7 Fotos</Text>
        </HStack>
        <HStack>
          <Icon icon={BiVideo} />
          <Text fontSize="0.875rem" color="#919191">1 Video</Text>
        </HStack>
        <HStack>
          <Icon icon={CgFile} />
          <Text fontSize="0.875rem" color="#919191">1 Arquivo</Text>
        </HStack>
      </Stack>

      <Box
        bg="#EDEDED"
        marginTop="0.75rem"
        paddingTop="0.5rem"
        flex="1"
      >
        <HStack justifyContent="space-between" >
          <Flex alignItems="center" paddingLeft="0.75rem">
            <Icon icon={BsCardChecklist} />
            <Text fontSize="0.875rem" color="#000" marginLeft="0.375rem">8 CHECK LISTS</Text>
          </Flex>
          <Icon icon={HiOutlineViewGridAdd} />
        </HStack>
        <Stack paddingLeft="1.5rem" marginTop="0.5">
          <Checkbox
            colorScheme="green"
            isChecked={allChecked}
            isIndeterminate={isIndeterminate}
            onChange={(e) => setCheckedItems([e.target.checked, e.target.checked, e.target.checked])}
          >
            <Text fontSize="0.875rem" color="#919191" marginLeft="0.375rem">
              Envio de documentação
            </Text>
          </Checkbox>
          <Stack spacing={1} paddingLeft="1rem">
            <Checkbox
              colorScheme="green"
              isChecked={checkedItems[0]}
              onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1], e.target.checked])}
            >
              <Text fontSize="0.875rem" color="#919191" marginLeft="0.375rem">
                CPF
              </Text>
            </Checkbox>
            <Checkbox
              colorScheme="green"
              isChecked={checkedItems[1]}
              onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked, e.target.checked])}
            >
              <Text fontSize="0.875rem" color="#919191" marginLeft="0.375rem">
                Email
              </Text>
            </Checkbox>
            <Checkbox
              colorScheme="green"
              isChecked={checkedItems[2]}
              onChange={(e) => setCheckedItems([e.target.checked, e.target.checked, checkedItems[2]])}
            >
              <Text fontSize="0.875rem" color="#919191" marginLeft="0.375rem">
                Ramal
              </Text>
            </Checkbox>
          </Stack>
          <Box width="90%" border="1px solid #DDD" />
          <Checkbox defaultIsChecked colorScheme="green">
            <Text fontSize="0.875rem" color="#919191" marginLeft="0.375rem">
              Cópia da certidão de nascimento
            </Text>
          </Checkbox>

          <Checkbox colorScheme="green">
            <Text fontSize="0.875rem" color="#919191" marginLeft="0.375rem">
              Recibo de compra de terreno
            </Text>
          </Checkbox>

          <Checkbox colorScheme="green">
            <Text fontSize="0.875rem" color="#919191" marginLeft="0.375rem">
              Xerox do cartão de vácina
            </Text>
          </Checkbox>

          <Checkbox
            colorScheme="green"
            isChecked={allChecked}
            isIndeterminate={isIndeterminate}
            onChange={(e) => setCheckedItems([e.target.checked, e.target.checked, e.target.checked])}
          >
            <Text fontSize="0.875rem" color="#919191" marginLeft="0.375rem">
              Compra de material
            </Text>
          </Checkbox>
          <Stack spacing={1} paddingLeft="1rem">
            <Checkbox
              colorScheme="green"
              isChecked={checkedItems[0]}
              onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1], e.target.checked])}
            >
              <Text fontSize="0.875rem" color="#919191" marginLeft="0.375rem">
                Notebooks
              </Text>
            </Checkbox>
            <Checkbox
              colorScheme="green"
              isChecked={checkedItems[0]}
              onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1], e.target.checked])}
            >
              <Text fontSize="0.875rem" color="#919191" marginLeft="0.375rem">
                Acessórios
              </Text>
            </Checkbox>
            <Checkbox
              colorScheme="green"
              isChecked={checkedItems[1]}
              onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked, e.target.checked])}
            >
              <Text fontSize="0.875rem" color="#919191" marginLeft="0.375rem">
                Monitores
              </Text>
            </Checkbox>
          </Stack>
          <Box width="90%" border="1px solid #DDD" />
        </Stack>
      </Box>
    </Box>
  );
}