query MyQuery {
    subjectPage {
      __typename
      name
      nameEn
      description
      descriptionEn
      id
      guarantors {
        name
        email
        created
      }
    }
  }