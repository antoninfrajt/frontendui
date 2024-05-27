import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"
const query = `query ($pattern: String!){
    result: facilityPage (where: {name:{_ilike: $pattern}}) {
        name
        id  
        lastchange
    }
}`
export const FetchSearchFacilityAsyncAction = CreateAsyncActionFromQuery(query)