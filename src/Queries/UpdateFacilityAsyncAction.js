import {CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation = `
    mutation($id: UUID!, $lastchange: DateTime!, $name: String, $address: String, $nameEn: String, $label: String, $geolocation: String, $geometry: String, $capacity: Int, $TypeId: UUID, $GroupId: UUID, $MasterId: UUID){ 
        result: facilityUpdate(facility: {id: $id, lastchange: $lastchange, name: $name, address: $address, nameEn: $nameEn, label: $label, geolocation: $geolocation, geometry: $geometry, capacity: $capacity, facilitytypeId: $TypeId, groupId: $GroupId, masterFacilityId: $MasterId})
            {
            id
            msg
            result: facility{
                id
                lastchange
                nameEn
                name
                label
                geolocation
                geometry
                address
                capacity
                type{
                    id
                    name
                }
                group{
                    id
                    name
                }
                masterFacility {
                    id
                    name
                    label
                    type{
                        id
                        name
                    }
                }
            }
        }
    }
`

export const UpdateFacilityAsyncAction = CreateAsyncActionFromMutation(mutation)
export const UpdateFacilityAsyncAction2 = (facility) => {
    const facility_ = {...facility,capacity:Number(facility?.capacity||0)}
    return UpdateFacilityAsyncAction(facility_)
}