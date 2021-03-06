import { useCallback } from 'react'
import { useToast } from '@chakra-ui/toast'

type Props = {
  title: string
  status: 'info' | 'warning' | 'success' | 'error'
}

export const useMessage = () => {
  const toast = useToast()

  const showMessage = useCallback(
    ({ title, status }: Props) => {
      toast({
        title: title,
        status: status,
        position: 'top',
        duration: 2000,
        isClosable: true,
      })
    },
    [toast]
  )

  return { showMessage }
}
