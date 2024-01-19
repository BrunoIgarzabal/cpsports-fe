import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'

const meta: Meta<typeof Button> = {
  component: Button
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Botão Primário',
    variant: 'primary'
  }
}

export const PrimaryXS: Story = {
  args: {
    children: 'Botão Primário',
    variant: 'primary',
    size: 'xs'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Botão Secundário',
    variant: 'secondary'
  }
}

export const Outline: Story = {
  args: {
    children: 'Botão Transparent',
    variant: 'outline'
  }
}

export const Block: Story = {
  args: {
    children: 'Botão com largura total',
    variant: 'secondary',
    fullWidth: true
  }
}

export const Disabled: Story = {
  args: {
    children: 'Desabilitado',
    variant: 'primary',
    disabled: true
  }
}

export const Loading: Story = {
  args: {
    children: 'Carregando',
    variant: 'primary',
    loading: true
  }
}
