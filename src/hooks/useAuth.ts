import { useCallback, useState } from 'react'
import axios from 'axios'
import { User } from '../types/api/user'
import { useHistory } from 'react-router'
import { useMessage } from './useMessage'

export const useAuth = () => {
  const history = useHistory()
  const { showMessage } = useMessage()

  const [loading, setLoading] = useState(false)

  const login = useCallback(
    async (id: string) => {
      setLoading(true)
      try {
        const { data } = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        if (data) {
          showMessage({ title: 'ログインしました', status: 'success' })
          history.push('/home')
        } else {
          showMessage({ title: 'ユーザーが見つかりません', status: 'error' })
        }
      } catch (e) {
        showMessage({ title: 'ログインできません', status: 'error' })
      } finally {
        setLoading(false)
      }
    },
    [history, showMessage]
  )

  return { login, loading }
}
