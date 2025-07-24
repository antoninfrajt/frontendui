import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { SemesterLargeFragment } from "./SemesterFragments";

const SemesterDeleteMutation = createQueryStrLazy(
`
mutation SemesterDelete($id: UUID!, $lastchange: DateTime!) {
  semesterDelete(
    semester: {id: $id, lastchange: $lastchange}
  ) {
    failed
    input
    msg
  }
}
`)


export const SemesterDeleteAsyncAction = createAsyncGraphQLAction(SemesterDeleteMutation)