import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"
const mutation = `mutation($id: UUID!, $lastchange: DateTime!, $valid: Boolean) {
    result: facilityUpdate(facility: {lastchange: $lastchange, id: $id, valid: $valid}) {
        id
        msg
    }
}`
export const DeleteFacilityAsyncAction = CreateAsyncActionFromMutation(mutation)