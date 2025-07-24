import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { GuarrantorLargeFragment } from "./GuarrantorFragments";

const GuarrantorDeleteMutation = createQueryStrLazy(
`
mutation GuarrantorDeleteMutation($id: UUID!, $lastchange: DateTime!) {
  result: roleDelete(
    role: {id: $id, lastchange: $lastchange}
  ) {
    ... on RoleGQLModelDeleteError {
      failed
      msg
      input
      Entity {
        ...GuarrantorLarge
      }
    }
  }
}
`,
    GuarrantorLargeFragment)

export const GuarrantorDeleteAsyncAction = createAsyncGraphQLAction(GuarrantorDeleteMutation);