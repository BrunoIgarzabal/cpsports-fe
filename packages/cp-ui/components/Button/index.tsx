import { forwardRef } from 'react'
import { ButtonBaseType, ButtonProps } from './types'
import { VariantProps, tv } from 'tailwind-variants'
import { SpinnerIcon } from '../Icons'

const variants = tv({
  base: 'flex items-center justify-center font-medium rounded transition duration-100 delay-100 hover:delay-100',
  variants: {
    variant: {
      primary:
        'bg-primary-color text-primary-contrast hover:bg-primary-hover-color hover:text-primary-hover-contrast',
      secondary:
        'bg-secondary-color text-secondary-contrast hover:bg-secondary-hover-color hover:text-secondary-hover-contrast',
      outline:
        'bg-transparent border border-primary-color hover:border-primary-hover-color hover:text-primary-hover-color'
    },
    size: {
      default: 'h-10 px-4',
      xs: 'h-8 px-3',
      sm: 'h-6 px-2 text-xs'
    },
    fullWidth: {
      true: 'w-full'
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed'
    }
  },
  defaultVariants: {
    size: 'default',
    variant: 'primary',
    fullWidth: false
  }
})

type ButtonBaseProps = ButtonBaseType & VariantProps<typeof variants>

const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (
    {
      children,
      size,
      variant,
      loading,
      fullWidth,
      disabled,
      className,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={variants({
          size,
          variant,
          fullWidth,
          disabled: disabled || loading,
          className
        })}
        disabled={disabled || loading}
        {...props}
        ref={ref}
      >
        {loading ? <SpinnerIcon className="mr-3" /> : leftIcon}
        <span>{children}</span>
        {rightIcon}
      </button>
    )
  }
)

ButtonBase.displayName = 'BaseButton'

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps & VariantProps<typeof variants>
>((props, ref) => <ButtonBase {...props} ref={ref} />)
