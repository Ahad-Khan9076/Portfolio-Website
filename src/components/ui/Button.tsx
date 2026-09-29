import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'outline'
  | 'outlineLight'

type ButtonSize = 'sm' | 'md' | 'lg'

interface SharedButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
  glow?: boolean
  onClick?: () => void
}

type ButtonAsButtonProps = SharedButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'onClick'> & {
    to?: undefined
  }

type ButtonAsLinkProps = SharedButtonProps & {
  to: string
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-blue text-brand-white hover:bg-brand-blue/90 border border-transparent',
  secondary:
    'bg-brand-black text-brand-white hover:bg-gray-800 border border-transparent',
  ghost:
    'bg-transparent text-brand-black hover:bg-gray-100 border border-transparent',
  outline:
    'bg-transparent text-brand-black border border-brand-black/20 hover:border-brand-blue hover:text-brand-blue',
  outlineLight:
    'bg-transparent text-brand-white border border-white/30 hover:border-brand-blue hover:bg-white/5',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm min-h-10',
  md: 'px-5 py-2.5 text-base min-h-11',
  lg: 'px-6 py-3 text-base min-h-12 sm:px-7 sm:py-3.5',
}

function buttonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  glow: boolean,
  className?: string,
) {
  return cn(
    'group/btn inline-flex items-center justify-center gap-2 font-semibold tracking-tight',
    'transition-[color,background-color,border-color,transform,box-shadow] duration-200',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue',
    'disabled:pointer-events-none disabled:opacity-50 rounded-md',
    'motion-safe:hover:-translate-y-px',
    variant === 'primary' &&
      'motion-safe:hover:shadow-[0_8px_28px_rgb(9_71_228_/0.35)]',
    variantClasses[variant],
    sizeClasses[size],
    glow && 'glow-blue-soft',
    className,
  )
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  glow = false,
  onClick,
  ...props
}: ButtonProps) {
  const classes = buttonClasses(variant, size, glow, className)

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  const { type = 'button', ...rest } = props as Omit<
    ButtonAsButtonProps,
    'variant' | 'size' | 'className' | 'children' | 'glow' | 'onClick'
  >

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
