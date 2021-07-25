const GET_LANDING_PAGE = /* GraphQl */ `
    fragment logo on LandingPage {
        logo {
            alternativeText
            url
        }
    }
    
    fragment header on LandingPage {
        header {
            title
            description
            button {
                label
                url
            }
            image {
                alternativeText
                url
            }
        }
    }

    fragment sectionAboutProject on LandingPage {
        sectionAboutProject {
          title
          description
          image {
            alternativeText
            url
          }
        }
    }

    fragment sectionTech on LandingPage {
        sectionTech {
          title
          techIcons {
            title
            image {
              alternativeText
              url
            }
          }
        }  
    }

    fragment sectionConcepts on LandingPage {
        sectionConcepts {
          title
          concept {
            title
          }
        }
    }

    fragment sectionModules on LandingPage {
      sectionModules {
        title
        module {
          title
          subtitle
          description
        }
      }
    }

    fragment sectionAgenda on LandingPage {
      sectionAgenda {
        title
        description
      }
    }

    fragment pricingBox on LandingPage {
      pricingBox {
        totalPrice
        numberInstallments
        priceInstallment
        benefits
        button {
          label
          url
        }
      }
    }

    fragment sectionAboutUs on LandingPage {
      sectionAboutUs {
        title
        authors {
          name
          role
          description
          image {
            alternativeText
            url
          }
          social {
            title
            description
          }
        }
      }
    }

    fragment sectionReviews on LandingPage {
      sectionReviews {
        title
        reviews {
          id
          name
          text
          photo {
            alternativeText
            url
          }
        }
      }  
    }

    fragment sectionFaq on LandingPage {
      sectionFaq {
        title
        questions {
          question
          answer
        }
      }
    }

    fragment sectionFooter on LandingPage {
      sectionFooter {
        description
        copy
      }
    }
      
    query GET_LANDING_PAGE {
        landingPage {
            ...logo
            ...header
            ...sectionAboutProject
            ...sectionTech
            ...sectionConcepts
            ...sectionModules
            ...sectionAgenda
            ...pricingBox
            ...sectionAboutUs
            ...sectionReviews
            ...sectionFaq
            ...sectionFooter
        }
    }
`
export default GET_LANDING_PAGE
