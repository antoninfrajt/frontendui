import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";

const GuarrantorInsertMutation = createQueryStrLazy(
`
mutation GuarrantorInsertMutation($userId: UUID!, $groupId: UUID!, $roletypeId: UUID!) {
  result: roleInsert(
    role: {userId: $userId, groupId: $groupId, roletypeId: $roletypeId}
  ) {
    ... on InsertError {
      failed
      msg
      input
    }
    
  }
}
`,

);


export const GuarrantorInsertAsyncAction = createAsyncGraphQLAction(GuarrantorInsertMutation)
