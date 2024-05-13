/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText} from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateFacilityAsyncAction } from '../../Queries/UpdateFacilityAsyncAction'

export const FacilitiesEditCard = ({facility}) => {
    return (
        <CardCapsule title={"Událost - atributy " + facility?.name}>
            
            <Row>
                <Col>Název</Col>
                <Col>{facility?.name}</Col>
            </Row>
            <Row>
                <EditableAttributeText item= {facility} attributeName= "name" label= "Nazev" asyncUpdater= {UpdateFacilityAsyncAction}/>
            </Row>
        </CardCapsule>
    )
}
