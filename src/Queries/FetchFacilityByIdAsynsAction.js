import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: facilityById (id: $id) {
      __typename
      id
      lastchange
      name
      nameEn
      label
      address
      valid
      capacity
      geometry
      geolocation
      type {
        id
        name
      }
      masterFacility {
        id
        name
        label
      }
      subFacilities {
        id
        name
        label
        lastchange
        valid
        masterFacility {
          id
        }
      }
      group {
        id
        name
      }
    }
  }`
export const FetchFacilityByIdAsyncAction = CreateAsyncActionFromQuery(query)