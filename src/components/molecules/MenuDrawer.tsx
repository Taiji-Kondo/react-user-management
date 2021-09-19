import { memo, VFC } from 'react'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

import { RoutingFunctions } from '../organisms/layout/Header'

type Props = {
  onClose: () => void
  isOpen: boolean
  routingFunctions: RoutingFunctions
}

export const MenuDrawer: VFC<Props> = memo(
  ({
    onClose,
    isOpen,
    routingFunctions: { onClickHome, onClickUserManagement, onClickSetting },
  }) => {
    return (
      <Drawer isOpen={isOpen} placement="left" size="xs" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={onClickHome}>
              TOP
            </Button>
            <Button w="100%" onClick={onClickUserManagement}>
              ユーザー一覧
            </Button>
            <Button w="100%" onClick={onClickSetting}>
              設定
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    )
  }
)
