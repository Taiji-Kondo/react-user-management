import { useCallback, useState } from 'react'
import { User } from '../types/api/user'

type Props = {
  id: number
  users: User[]
  onOpen: () => void
}

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const onSelectUser = useCallback(({ id, users }: Props) => {
    const targetUser = users.find((user) => user.id === id)

    // 絶対に存在するので
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setSelectedUser(targetUser!)
  }, [])

  return { onSelectUser, selectedUser }
}
