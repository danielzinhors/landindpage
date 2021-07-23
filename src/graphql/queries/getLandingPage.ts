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

    query GET_LANDING_PAGE {
        landingPage {
        ...logo
        ...header
        ...sectionAboutProject
        ...sectionTech
        }
    }
`
export default GET_LANDING_PAGE