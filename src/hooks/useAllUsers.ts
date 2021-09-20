import { useCallback, useState } from 'react'
import axios from 'axios'
import { User } from '../types/api/user'
import { useMessage } from './useMessage'

export const useAllUsers = () => {
  const { showMessage } = useMessage()
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<User[]>([])

  const getUsers = useCallback(async () => {
    setLoading(true)
    try {
      const { data } = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      if (data) {
        setUsers(data)
      }
    } catch (e) {
      showMessage({ title: 'ユーザー取得に失敗しました', status: 'error' })
    } finally {
      setLoading(false)
    }
  }, [])

  return { getUsers, loading, users }
}
