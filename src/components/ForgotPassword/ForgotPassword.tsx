import { texts } from "@/lib/texts"
import {
  Button,
  CloseButton,
  Dialog,
  Heading,
  Text,
  Portal,
} from "@chakra-ui/react"

type ForgotPasswordProps = {
  email?: string;
}

export const ForgotPassword: React.FC<ForgotPasswordProps> = ({ email }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          variant="plain"
          size="sm"
          mb="5"
          float="right"
        >
          {texts.auth.forgotPassword}
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content p={6} my={12}>
            <Dialog.Body>
              <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                {texts.auth.forgotPassword}
              </Heading>
              <Text
                fontSize={{ base: 'sm', sm: 'md' }}
                color={'gray.400'}
                mt={4}
              >
                You&apos;ll get an email with a reset link
              </Text>
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
