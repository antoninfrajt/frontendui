import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";

// Only include fields that exist on RoleGQLModel
export const GuarrantorLinkFragment = createQueryStrLazy(
    `
fragment GuarrantorLink on RoleGQLModel {
  __typename
  id
  lastchange
  user {
    id
    name
    surname
  }
}
`
);

export const GuarrantorMediumFragment = createQueryStrLazy(
    `
fragment GuarrantorMedium on RoleGQLModel {
  ...GuarrantorLink
}
`, GuarrantorLinkFragment);

export const GuarrantorLargeFragment = createQueryStrLazy(
    `
fragment GuarrantorLarge on RoleGQLModel {
  ...GuarrantorMedium
}
`, GuarrantorMediumFragment);