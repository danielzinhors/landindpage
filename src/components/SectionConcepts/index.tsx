import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { SectionConceptsProps } from 'types/types'

const SectionConcepts = ({ title, concept }: SectionConceptsProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{title}</Heading>
      <S.List>
        {concept.map((item) => (
          <S.Item key={item.title}>{item.title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
