import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.gray};
    text-align: center;
    font-size: 1.3rem;
    line-height: ${theme.font.sizes.xlarge};
    position: relative;
    z-index: 2;
    margin-top: -${theme.spacings.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
      margin-top: -${theme.spacings.xxlarge};
      padding-bottom: ${theme.spacings.large};
    `}

    a {
      color: ${theme.colors.primary};
      text-decoration: none;
      border-bottom: 1px solid ${theme.colors.primary};
    }
  `}
`

export const Text = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    p {
      color: ${theme.colors.texts};
      margin-bottom: ${theme.spacings.small};
    }

    strong {
      border-bottom: 2px solid ${theme.colors.primary};
    }
  `}
`

export const Copy = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    width 100%;
    background-color: #000;
    text-align: initial;
    padding-left: 15px;
    color: #fff;
    position:absolute;
    bottom:0;
    p {
      color: ${theme.colors.texts};
      margin-bottom: ${theme.spacings.small};
    }

    strong {
      border-bottom: 2px solid ${theme.colors.primary};
    }
  `}
`
