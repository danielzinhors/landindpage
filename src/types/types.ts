export type Imagem = {
  alternativeText: string
  url: string
}

export type Botao = {
  label: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: Botao
  image: Imagem
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: Imagem
}

export type techIcons = {
  title: string
  image: Imagem
}

export type SectionTechProps = {
  title: string
  techIcons: techIcons[]
}

export type concept = {
  title: string
}

export type SectionConceptsProps = {
  title: string
  concept: concept[]
}

export type module = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  module: module[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: Botao
}

export type SocialLinks = {
  title: string
  description: string
}

export type Autores = {
  name: string
  role: string
  image: Imagem
  description: string
  social: SocialLinks[]
}

export type SectionAboutUsProps = {
  title: string
  authors: Autores[]
}

export type ReviewsProps = {
  id: string
  name: string
  text: string
  photo: Imagem
}

export type SectionReviewsProps = {
  title: string
  reviews: ReviewsProps[]
}

export type QuestionsProp = {
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: QuestionsProp[]
}

export type SectionFooterProps = {
  description: string
  copy: string
}

export type LandingPageProps = {
  logo: Imagem
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
  sectionFooter: SectionFooterProps
}
