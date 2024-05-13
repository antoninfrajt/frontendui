// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { UserLargeCard } from "../Components"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchEventByIdAsyncAction } from "../Queries/FetchEventByIdAsynsAction"
import { EventLargeCard } from "../Components/Event/EventLargeCard"
import { FetchFacilityByIdAsyncAction } from "../Queries/FetchFacilityByIdAsynsAction"
import { FacilitiesLargeCard } from "../Components/Facilities/FacilitiesLargeCard"
import { SubFacilityCard } from "../Components/Facilities/SubFacilityCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst budovu", success: "Načtení budovy se povedlo"})
export const FacilityPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [facility, userPromise] = useFreshItem({id}, FetchFacilityByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (facility) {
        return (
             // <UserLargeCard user={user} />
            // <div>Události nahrány
            //     {JSON.stringify(facility)}
            // </div>
            <FacilitiesLargeCard facility={facility}>
                <SubFacilityCard facility={facility}/>
            </FacilitiesLargeCard>
        )
    } else {
        return (
            <div>Loading facility</div>
        )
    }
    
}