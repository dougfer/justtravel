import React from 'react'
import { Button as AntdButton, ButtonProps as AntdButtonProps, Typography } from 'antd'
import Styles from './Button.module.scss'

type ButtonProps = {
  btnType: 'primary' | 'secondary'
  Icon?: JSX.Element
  btnSize?: 'large' | 'medium' | 'small'  
} & AntdButtonProps

export const Button: React.FC<ButtonProps> = ({ children, btnType, Icon, btnSize, ...rest }) => {

  const style = {
    primary: Styles.primary,
    secondary: Styles.secondary
  }

  const size = {
    large: Styles.large,
    medium: Styles.medium,
    small: Styles.small
  }

  const type = btnType as any

  return (
    <AntdButton type={type} className={`${style[btnType]} ${btnSize && size[btnSize]}`} {...rest}>
      <Typography className={`${Styles.typography}`}>
        {children}
      </Typography>
      {Icon}
    </AntdButton>
  )
}