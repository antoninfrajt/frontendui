import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { GuarrantorLargeFragment } from "./GuarrantorFragments";

const GuarrantorReadPageQuery = createQueryStrLazy(
`
query GuarrantorReadPageQuery($skip: Int, $limit: Int, $where: GuarrantorWhereInputFilter) {
  result: guarrantorPage(skip: $skip, limit: $limit, where: $where) {
    ...GuarrantorLarge
  }
}
`, 
    GuarrantorLargeFragment)

export const GuarrantorReadPageAsyncAction = createAsyncGraphQLAction(GuarrantorReadPageQuery)