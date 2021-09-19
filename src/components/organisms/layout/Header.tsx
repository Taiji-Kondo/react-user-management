import { memo, useCallback, VFC } from 'react'
import { Flex, HStack, Heading, Link, useDisclosure } from '@chakra-ui/react'

import { MenuIconButton } from '../../atoms/button/MenuIconButton'
import { MenuDrawer } from '../../molecules/MenuDrawer'
import { useHistory } from 'react-router'

export type RoutingFunctions = {
  onClickHome: () => void
  onClickUserManagement: () => void
  onClickSetting: () => void
}

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const history = useHistory()

  const onClickHome = useCallback(() => history.push('/home'), [])
  const onClickUserManagement = useCallback(() => history.push('/home/user_management'), [])
  const onClickSetting = useCallback(() => history.push('/home/setting'), [])

  const routingFunctions: RoutingFunctions = {
    onClickHome: onClickHome,
    onClickUserManagement: onClickUserManagement,
    onClickSetting: onClickSetting,
  }

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: 'pointer' }}>
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
            <Link onClick={onClickHome}>ユーザー管理アプリ</Link>
          </Heading>
        </Flex>
        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: 'none', md: 'flex' }}>
          <HStack spacing={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
            <Link onClick={onClickSetting}>設定</Link>
          </HStack>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer isOpen={isOpen} onClose={onClose} routingFunctions={routingFunctions} />
    </>
  )
})
