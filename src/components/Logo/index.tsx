import React from 'react'

import { LogoProps } from 'types/types'
import * as S from './styles'
import { getImageUrl } from '../../utils/getImagUrl'

const Logo = ({ alternativeText, url }: LogoProps) => (
  <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />
)

export default Logo
