export type ButtonOptionsType = {
  /**
   * Se adicionado, o botão irá exibir um ícone antes do seu label
   * @type React.ReactElement
   */
  leftIcon?: React.ReactElement
  /**
   * Se adicionado, o botão irá exibir um ícone depois do seu label
   * @type React.ReactElement
   */
  rightIcon?: React.ReactElement
  /**
   * Se `true`, o botão irá exibir um spinner
   */
  loading?: boolean
}

export type ButtonBaseType = ButtonOptionsType &
  React.ComponentPropsWithoutRef<'button'>

export type ButtonProps = ButtonBaseType
