import { Input } from '@chakra-ui/react'
import { Controller, FieldError, useFormContext } from 'react-hook-form'

import { Checkbox } from '../ui/checkbox'
import { Field } from '../ui/field'

export type FormFieldProps = {
  type: string
  placeholder?: string
  label?: string
  name: string
  disabled?: boolean
  required?: boolean
  valueAsNumber?: boolean
}

export const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  label,
  name,
  disabled,
  required,
  valueAsNumber,
}) => {
  const { register, control, formState: { errors } } = useFormContext()
  const error = errors[name] as FieldError | undefined

  if (type === 'checkbox') {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Field
            required={required}
            disabled={disabled}
            invalid={!!error}
            errorText={error?.message}
          >
            <Checkbox
              checked={field.value}
              onCheckedChange={({ checked }) => field.onChange(checked)}
            >
              {label}
            </Checkbox>
          </Field>
        )}
      />
    )
  }

  return (
    <Field
      required={required}
      disabled={disabled}
      label={label}
      invalid={!!error}
      errorText={error?.message}
    >
      <Input
        type={type}
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
      />
    </Field>
  )
}
