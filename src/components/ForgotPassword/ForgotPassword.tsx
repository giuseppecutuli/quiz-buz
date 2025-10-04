import { texts } from "@/lib/texts"
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod/v4'
import {
  Button,
  CloseButton,
  Dialog,
  Heading,
  Text,
  Portal,
  Flex,
  useDialog
} from "@chakra-ui/react"
import { FormField } from "../FormField"
import { useForgotPassword } from "./useForgotPassword.hook"
import { useEffect } from "react"

type ForgotPasswordProps = {}

const ForgotPasswordSchema = z
  .object({
    email: z.email(),
  })

export const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  const dialog = useDialog()
  const methods = useForm({
      defaultValues: {
        email: '',
      },
      resolver: zodResolver(ForgotPasswordSchema)
    })
  const { handleSubmit, reset } = methods

  const { loading, success, handleForgotPassword, error, resetStatuses } = useForgotPassword()

  useEffect(() => {
    if (!dialog.open) {
      reset()
      resetStatuses()
    }
  }, [dialog.open])

  return (
    <Dialog.RootProvider value={dialog}>
      <Dialog.Trigger asChild>
        <Button
          variant="plain"
          color={"blue.400"}
          size="sm"
          my="3"
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
                {texts.auth.receiveForgotPasswordEmail}
              </Text>
              {!success && (
                <FormProvider {...methods}>
                  <form onSubmit={(event) => {
                    /**
                     * This is needed to avoid propagation of the event to
                     * the other forms that could be present in the page
                     * (e.g. LoginForm)
                     */
                    event.stopPropagation()

                    handleSubmit(handleForgotPassword)(event)
                  }}>
                    <Flex gap="5" direction="column" mb="5" mt="5">
                      <FormField
                        type="email"
                        name="email"
                        placeholder={texts.form.enterEmail}
                        label={texts.form.email}
                        required
                      />

                      <Button type="submit" size="xl" colorPalette="blue" loading={loading} disabled={loading} width="full">
                        {texts.form.submit}
                      </Button>

                      {error && <Text color="red.500" mt="3" textAlign="center">{error}</Text>}
                    </Flex>
                  </form>
                </FormProvider>
              )}
              {success && (
                <Text
                  fontSize={{ base: 'sm', sm: 'md' }}
                  fontWeight={'semibold'}
                  color={'green.400'}
                  mt={4}
                >
                  {texts.auth.forgotPasswordEmailSent}
                </Text>
              )}
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.RootProvider>
  )
}
