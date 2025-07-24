import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { GuarrantorLargeFragment } from "./GuarrantorFragments";

const GuarrantorUpdateMutation = createQueryStrLazy(
`
mutation GuarrantorUpdateMutation($id: UUID!, $lastchange: DateTime!, $name: String, $name_en: String) {
  result: guarrantorUpdate(
    guarrantor: {id: $id, lastchange: $lastchange, name: $name, nameEn: $name_en}
  ) {
    ... on GuarrantorGQLModelUpdateError {
      failed
      msg
      input
      Entity {
        ...GuarrantorLarge
      }      
    }
    ...GuarrantorLarge
  }
}
`, GuarrantorLargeFragment)

export const GuarrantorUpdateAsyncAction = createAsyncGraphQLAction(GuarrantorUpdateMutation)