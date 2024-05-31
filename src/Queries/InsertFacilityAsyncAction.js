import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"
const mutation = `mutation($id: UUID!, $name: String!, $MasterId: UUID!) {
    result:facilityInsert(facility: {name: $name, masterFacilityId: $MasterId, id: $id}) {
        id
        msg
        result: facility {
          name
          id
          masterFacility {
            id
            name
          }
        }
    }
}`
export const InsertFacilityAsyncAction = CreateAsyncActionFromMutation(mutation)