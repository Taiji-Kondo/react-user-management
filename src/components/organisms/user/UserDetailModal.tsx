import { ChangeEvent, memo, useEffect, useState, VFC } from 'react'
import {
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'

import { User } from '../../../types/api/user'
import { PrimaryButton } from '../../atoms/button/PrimaryButton'

type Props = {
  isOpen: boolean
  onClose: () => void
  isAdmin: boolean
  user?: User | null
}

export const UserDetailModal: VFC<Props> = memo(({ isOpen, onClose, isAdmin, user }) => {
  const [name, setName] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')

  useEffect(() => {
    setName(user?.name ?? '')
    setUsername(user?.username ?? '')
    setEmail(user?.email ?? '')
    setPhone(user?.phone ?? '')
  }, [user])

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
  const onChangeUserFullName = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
  const onChangeUserEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const onChangeUserPhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)

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
              <Input value={name} isReadOnly={!isAdmin} onChange={onChangeUserName} />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input value={username} isReadOnly={!isAdmin} onChange={onChangeUserFullName} />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input value={email} isReadOnly={!isAdmin} onChange={onChangeUserEmail} />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input value={phone} isReadOnly={!isAdmin} onChange={onChangeUserPhone} />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onClose}>編集</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  )
})
