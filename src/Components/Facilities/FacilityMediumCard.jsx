/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SubFacilityCard } from './SubFacilityCard'
import { FacilityLink } from './FacilityLink'
import { ShowDate } from '../Special Formats/ShowDate'
import { GroupLink } from '../Group'


export const FacilityMediumCard = ({facility}) => {
    return (
        <CardCapsule title={"Zázemí - atributy " + facility?.name}>
            
            <Row>
                <Col>Název</Col>
                <Col>{facility?.name}</Col>
            </Row>
            <Row>
                <Col>Anglický název</Col>
                <Col>{facility?.nameEn}</Col>
            </Row>
            <Row>
                <Col>Označení</Col>
                <Col>{facility?.label}</Col>
            </Row>
            <Row>
                <Col>Poloha</Col>
                <Col>{facility?.geolocation}</Col>
            </Row>
            <Row>
                <Col>Geometrie</Col>
                <Col>{facility?.geometry}</Col>
            </Row>
            <Row>
                <Col>Adresa</Col>
                <Col>{facility?.address}</Col>
            </Row>
            <Row>
                <Col>Kapacita</Col>
                <Col>{facility?.capacity}</Col>
            </Row>
            <Row>
                <Col>Nadřazené zázemí</Col>
                <Col><FacilityLink facility={facility?.masterFacility}></FacilityLink></Col>
            </Row>
            <Row>
                <Col>Naposledy změněno</Col>
                <Col>{ShowDate(facility?.lastchange)}</Col>   
            </Row>
            <Row>
                <Col>Typ</Col>
                <Col>{facility?.type?.name}</Col>
            </Row>
            <Row>
                <Col>Skupina</Col>
                <Col><GroupLink group = {facility?.group}/></Col>
            </Row>
        </CardCapsule>
    )
}
