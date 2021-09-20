import { memo, ReactNode, VFC } from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
  disabled?: boolean
  loading?: boolean
  onClick: () => void
  children: ReactNode
}

export const PrimaryButton: VFC<Props> = memo(
  ({ disabled = false, loading = false, onClick, children }) => {
    return (
      <Button
        bg="teal.400"
        color="white"
        _hover={{ opacity: 0.8 }}
        onClick={onClick}
        isLoading={loading}
        disabled={disabled}
      >
        {children}
      </Button>
    )
  }
)
