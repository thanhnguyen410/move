import React from 'react'
import * as S from './header.style'
import Logo from 'src/assets/images/logo-header.png'

export default function Header() {
  return (
    <S.StyledHeader>
      <div className="container">
        <div className="header-content">
          <img src={Logo} alt="" />
        </div>
      </div>
    </S.StyledHeader>
  )
}
