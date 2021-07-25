import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

import * as S from './styles'
import { Autores } from 'types/types'
import { getImageUrl } from 'utils/getImagUrl'

const icons = {
  Twitter: <FaTwitter />,
  Github: <GrGithub />,
  Dribbble: <FaDribbble />,
  Facebook: <FaFacebook />,
  Linkedin: <FaLinkedin />
}

const ProfileCard: React.FC<Autores> = ({
  name,
  role,
  image,
  description,
  social
}) => (
  <S.Card key={name}>
    <S.Image
      src={getImageUrl(image.url)}
      loading="lazy"
      alt={image.alternativeText}
    />
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {social.map((item) => (
        <S.Link key={item.title}>
          <a href={item.description} title={item.title}>
            {icons[item.title]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description dangerouslySetInnerHTML={{ __html: description }} />
  </S.Card>
)

export default ProfileCard
