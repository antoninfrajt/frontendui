import { useEffect, useState } from 'react'
import { useDispatch} from '@hrbolek/uoisfrontend-shared/src'
import { FetchAllGroupsAsyncAction} from '../../Queries/FetchAllGroupsAsyncAction'
export const FacilitiesGroups = () => {
    const [groups, setGroups] = useState([])
    const dispatch = useDispatch()
    useEffect(
        ()=> {
            const func = async () => {
                const json = await dispatch(FetchAllGroupsAsyncAction())    
                const result = json?.data?.result
                if (result) {
                    setGroups(result)
                }
                // console.log("json", json)
            }
            func()
        }, [FetchAllGroupsAsyncAction, dispatch,]
    )
    return groups
}