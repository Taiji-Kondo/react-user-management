import { memo, ReactNode, VFC } from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
  onClick: () => void
  children: ReactNode
}

export const PrimaryButton: VFC<Props> = memo(({ children, onClick }) => {
  return (
    <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }} onClick={onClick}>
      {children}
    </Button>
  )
})
