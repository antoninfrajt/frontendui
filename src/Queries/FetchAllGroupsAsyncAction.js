import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"
const query = `query {
    result: groupPage(limit: 100) {
        id
        name
      }
    }`
export const FetchAllGroupsAsyncAction = CreateAsyncActionFromQuery(query)