import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"
const query = `query {
    result: facilityPage {
        name
        id  
        lastchange
    }
}`
export const FetchAllFacilitiesAsyncAction = CreateAsyncActionFromQuery(query)