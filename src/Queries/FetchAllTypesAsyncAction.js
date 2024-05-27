import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"
const query = `query {
    result: facilityTypePage {
        name
        id  
        lastchange
    }
}`
export const FetchAllTypesAsyncAction = CreateAsyncActionFromQuery(query)