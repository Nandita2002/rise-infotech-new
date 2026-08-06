
import { ReactNode, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  children: ReactNode
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[#0769B4] text-white hover:bg-[#055A99] shadow-md hover:shadow-lg hover:shadow-[#123498]/30',

  outline:
    'border-2 border-[#0769B4] bg-white text-[#0769B4] hover:bg-[#EAF5FD]',

  ghost:
    'bg-transparent text-[#0769B4] hover:bg-[#EAF5FD]',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'left',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex cursor-pointer items-center gap-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#123498] focus:ring-offset-2 active:scale-[0.98]',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span>{icon}</span>}

      {children}

      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </button>
  )
}
