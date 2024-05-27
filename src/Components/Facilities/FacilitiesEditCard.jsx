/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText, EditableAttributeSelect, useDispatch} from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateFacilityAsyncAction, UpdateFacilityAsyncAction2 } from '../../Queries/UpdateFacilityAsyncAction'
import { SubFacilityCard } from './SubFacilityCard'
import { useEffect, useState } from 'react'
import { FetchAllTypesAsyncAction} from '../../Queries/FetchAllTypesAsyncAction'
import { FetchAllFacilitiesAsyncAction } from '../../Queries/FetchAllFacilitiesAsyncAction'
import { FacilitiesGroups } from './FacilitiesGroups'
import { FetchSearchFacilityAsyncAction } from '../../Queries/FetchSearchFacilityAsyncAction'
import { SearchInput } from '@hrbolek/uoisfrontend-shared/src/Components'

export const FacilitiesEditCard = ({facility}) => {
    const [types, setTypes] = useState([])
    const dispatch = useDispatch()
    useEffect(
        ()=> {
            const func = async () => {
                const json = await dispatch(FetchAllTypesAsyncAction())    
                const result = json?.data?.result
                if (result) {
                    setTypes(result)
                }
                // console.log("json", json)
            }
            func()
        }, [FetchAllTypesAsyncAction, dispatch,]
    )
    const groups = FacilitiesGroups()
    const facility_ = {...facility,TypeId: facility?.type.id,GroupId: facility?.group.id}
    return (
        <CardCapsule title={"Událost - atributy " + facility?.name}>
            
            <Row>
                <EditableAttributeText item= {facility} attributeName= "name" label= "Název" asyncUpdater= {UpdateFacilityAsyncAction}/>
            </Row>
            <Row>
                <EditableAttributeText item= {facility} attributeName= "nameEn" label= "Anglický název" asyncUpdater= {UpdateFacilityAsyncAction}/>
            </Row>
            <Row>
                <EditableAttributeText item= {facility} attributeName= "label" label= "Označení" asyncUpdater= {UpdateFacilityAsyncAction}/>
            </Row>
            <Row>
                <EditableAttributeText item= {facility} attributeName= "geolocation" label= "Poloha" asyncUpdater= {UpdateFacilityAsyncAction}/>
            </Row>
            <Row>
                <EditableAttributeText item= {facility} attributeName= "geometry" label= "Geometrie" asyncUpdater= {UpdateFacilityAsyncAction}/>
            </Row>
            <Row>
                <EditableAttributeText item= {facility} attributeName= "address" label= "Adresa" asyncUpdater= {UpdateFacilityAsyncAction}/>
            </Row>
            <Row>
                <EditableAttributeText item= {facility} attributeName= "capacity" label= "Kapacita" asyncUpdater= {UpdateFacilityAsyncAction2} type="number"/> 
            </Row>
            <Row>
                <EditableAttributeSelect item= {facility_} attributeName= "TypeId" label= "Typ" asyncUpdater= {UpdateFacilityAsyncAction}>
                    {types.map(
                            (t) => <option key = {t?.id} value = {t?.id}>{t?.name}</option>
                        )}  
                </EditableAttributeSelect>
            </Row>
            <Row>
                <EditableAttributeSelect item= {facility_} attributeName= "GroupId" label= "Skupina" asyncUpdater= {UpdateFacilityAsyncAction}>
                    {groups.map(
                            (g) => <option key = {g?.id} value = {g?.id}>{g?.name}</option>
                    )}
                </EditableAttributeSelect>
            </Row>
            <Row>
                <SearchInput title = "Nadfacility" onSelect={<EditableAttributeSelect item= {facility_} attributeName= 'MasterfacilityId' asyncUpdater= {UpdateFacilityAsyncAction}/>} FetchByPatternAsyncAction={FetchSearchFacilityAsyncAction}/>
            </Row>
            
        </CardCapsule>
    )
}
