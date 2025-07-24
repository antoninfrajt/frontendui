import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { SemesterLargeFragment } from "./SemesterFragments";

  const SemesterInsertMutation = createQueryStrLazy(
  `
  mutation SemesterInsert($id: UUID!, $order: Int!) {
  semesterInsert(semester: {subjectId: $id, order: $order}) {
    ... on SemesterGQLModel {
      id
      created
      order
    }
    ... on InsertError {
      input
      failed
      msg
    }
  }
}
  `)



export const SemesterInsertAsyncAction = createAsyncGraphQLAction(SemesterInsertMutation)