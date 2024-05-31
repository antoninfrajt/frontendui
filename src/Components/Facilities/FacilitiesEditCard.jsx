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
import { SearchInput } from '@hrbolek/uoisfrontend-shared/src/Components/SearchInput'
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
    const facility_ = {...facility,TypeId: facility?.type?.id,GroupId: facility?.group?.id}
    const MasterFacilitySelect = (value) => {
        console.log(value)
        dispatch(UpdateFacilityAsyncAction({id: facility.id, MasterId: value, lastchange: facility.lastchange}))
    }
    return (
        <CardCapsule title={"Událost - atributy " + facility?.name}>
            
            <Row>
                <Col><EditableAttributeText item= {facility} attributeName= "name" label= "Název" asyncUpdater= {UpdateFacilityAsyncAction}/></Col>    
            </Row>
            <Row>
                <Col><EditableAttributeText item= {facility} attributeName= "nameEn" label= "Anglický název" asyncUpdater= {UpdateFacilityAsyncAction}/></Col>
            </Row>
            <Row>
                <Col><EditableAttributeText item= {facility} attributeName= "label" label= "Označení" asyncUpdater= {UpdateFacilityAsyncAction}/></Col>
            </Row>
            <Row>
                <Col><EditableAttributeText item= {facility} attributeName= "geolocation" label= "Poloha" asyncUpdater= {UpdateFacilityAsyncAction}/></Col>
            </Row>
            <Row>
                <Col><EditableAttributeText item= {facility} attributeName= "geometry" label= "Geometrie" asyncUpdater= {UpdateFacilityAsyncAction}/></Col>
            </Row>
            <Row>
                <Col><EditableAttributeText item= {facility} attributeName= "address" label= "Adresa" asyncUpdater= {UpdateFacilityAsyncAction}/></Col>
            </Row>
            <Row>
                <Col><EditableAttributeText item= {facility} attributeName= "capacity" label= "Kapacita" asyncUpdater= {UpdateFacilityAsyncAction2} type="number"/> </Col>
            </Row>
            <Row>
                <Col>
                <EditableAttributeSelect item= {facility_} attributeName= "TypeId" label= "Typ" asyncUpdater= {UpdateFacilityAsyncAction}>
                    {types.map(
                            (t) => <option key = {t?.id} value = {t?.id}>{t?.name}</option>
                        )}  
                </EditableAttributeSelect>
                </Col>
            </Row>
            <Row>
                <Col>
                <EditableAttributeSelect item= {facility_} attributeName= "GroupId" label= "Skupina" asyncUpdater= {UpdateFacilityAsyncAction}>
                    {groups.map(
                            (g) => <option key = {g?.id} value = {g?.id}>{g?.name}</option>
                    )}
                </EditableAttributeSelect>
                </Col>
            </Row>
            <Row>
                <Col>
                <SearchInput title = "Nadfacility" onSelect={MasterFacilitySelect} FetchByPatternAsyncAction={FetchSearchFacilityAsyncAction}/>
                </Col>
            </Row>
            <Row>
                <SubFacilityCard facility={facility} edit= {true}/>
            </Row>
            
        </CardCapsule>
    )
}
