import { useCallback, useState } from 'react'
import axios from 'axios'
import { User } from '../types/api/user'
import { useHistory } from 'react-router'
import { useMessage } from './useMessage'
import { useLoginUser } from './useLoginUser'

export const useAuth = () => {
  const history = useHistory()
  const { showMessage } = useMessage()
  const { setLoginUser } = useLoginUser()

  const [loading, setLoading] = useState(false)

  const login = useCallback(
    async (id: string) => {
      setLoading(true)
      try {
        const { data } = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        if (data) {
          const isAdmin = data.id === 10
          setLoginUser({ ...data, isAdmin })
          showMessage({ title: 'ログインしました', status: 'success' })
          history.push('/home')
        } else {
          showMessage({ title: 'ユーザーが見つかりません', status: 'error' })
          setLoading(false)
        }
      } catch (e) {
        showMessage({ title: 'ログインできません', status: 'error' })
        setLoading(false)
      }
    },
    [history, showMessage, setLoginUser]
  )

  return { login, loading }
}
