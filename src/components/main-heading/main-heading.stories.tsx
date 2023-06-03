import type { Meta, StoryObj } from '@storybook/react'
import MainHeading, { type MainHeadingProps } from './main-heading'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Typography/MainHeading',
  component: MainHeading,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['base', 'sm', 'md', 'lg', 'xl'] as MainHeadingProps['size'][],
      control: {
        type: 'select',
      },
    },
  },
  args: {
    children: 'Main Heading',
  },
} satisfies Meta<typeof MainHeading>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {
    children: 'Main Heading',
    size: 'base',
  },
}

export const Sm: Story = {
  args: {
    size: 'sm',
  },
}

export const Md: Story = {
  args: {
    size: 'md',
  },
}

export const Lg: Story = {
  args: {
    size: 'lg',
  },
}

export const Xl: Story = {
  args: {
    size: 'xl',
  },
}
