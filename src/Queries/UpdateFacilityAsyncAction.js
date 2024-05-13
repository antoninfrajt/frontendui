import {CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation = `
    mutation($id: UUID!, $lastchange: DateTime!, $name: String, $address: String){
        result: facilityUpdate(facility: {id: $id, lastchange: $lastchange, name: $name, address: $address})
        {
        id
        msg
        result: facility{
            id
            lastchange
            name
            address
        }
        }
    }
`

export const UpdateFacilityAsyncAction = CreateAsyncActionFromMutation(mutation)