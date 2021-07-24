import React from 'react'

import { Imagem } from 'types/types'
import * as S from './styles'
import { getImageUrl } from '../../utils/getImagUrl'

const Logo = ({ alternativeText, url }: Imagem) => (
  <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />
)

export default Logo
