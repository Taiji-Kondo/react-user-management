import { memo, VFC } from 'react'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

type Props = {
  onClose: () => void
  isOpen: boolean
}

export const MenuDrawer: VFC<Props> = memo(({ onClose, isOpen }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" size="xs" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody p={0} bg="gray.100">
          <Button w="100%">TOP</Button>
          <Button w="100%">ユーザー一覧</Button>
          <Button w="100%">設定</Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
})
