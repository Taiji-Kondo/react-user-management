import { memo, VFC } from 'react'
import {
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const UserDetailModal: VFC<Props> = memo(({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value="" />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input value="" />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input value="" />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input value="" />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
})
