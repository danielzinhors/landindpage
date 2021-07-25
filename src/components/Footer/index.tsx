import React from 'react'

import * as S from './styles'
import { SectionFooterProps } from 'types/types'

const Footer = ({ description, copy }: SectionFooterProps) => (
  <S.Wrapper>
    <S.Text
      dangerouslySetInnerHTML={{
        __html: description
      }}
    />
    <S.Copy>{copy}</S.Copy>
  </S.Wrapper>
)

export default Footer
