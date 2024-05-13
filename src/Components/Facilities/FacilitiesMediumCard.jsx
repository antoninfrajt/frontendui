/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SubFacilityCard } from './SubFacilityCard'


export const FacilitiesMediumCard = ({facility}) => {
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
                <Col>{facility?.masterFacility}</Col>
            </Row>
            <Row>
                <Col>Naposledy změněno</Col>
                <Col>{facility?.lastchange}</Col>
            </Row>
            <Row>
                <Col>Typ</Col>
                <Col>{facility?.type.name}</Col>
            </Row>
            <Row>
                <Col>Skupina</Col>
                <Col>{facility?.group.name}</Col>
            </Row>
        </CardCapsule>
    )
}
