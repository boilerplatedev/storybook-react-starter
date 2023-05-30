import React, { type ReactNode } from 'react'
import clsx from 'clsx'

export interface MainHeadingProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'base' | 'md' | 'lg' | 'xl'
}

const MainHeading: React.FC<MainHeadingProps> = ({ children, className = '', size = 'base' }) => (
  <h1
    data-testid="main-heading-h1"
    className={clsx('text-gray-900 dark:text-white font-bold', {
      [className]: !!className,
      'text-base': size === 'sm',
      'text-xl': size === 'base',
      'text-2xl': size === 'md',
      'text-4xl': size === 'lg',
      'text-6xl': size === 'xl',
    })}
  >
    {children}
  </h1>
)

export default MainHeading
