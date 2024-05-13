/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Subfacility = ({subfacility}) => {
    return (
        <Row>
            {/* <Col>
            {/* <Link to= {"/facilities/facility/"}>{subfacility?.name}</Link> */}
            {/* </Col>  */}
            <Col md = {2} >{subfacility.name}</Col>
            <Col md = {3}>{subfacility.id}</Col>
            <Col md = {1}>{subfacility.label}</Col>
        </Row>
    )
}

export const SubFacilityCard = ({facility, valid=true}) => {
    const subfacilities = facility?.subFacilities || []
    const filtered = (valid===null)?subfacilities:subfacilities.filter(
        s => s?.valid === valid
    )

    return (
        <CardCapsule title={"Podřadná zázemí " + facility?.name}>
        <Col>
            {filtered.map(
                s => <Subfacility key={s.id} subfacility={s} />
            )}
        </Col>
    </CardCapsule>
        // <Row>
        //     <Col>
        //         {/* <UserRawCard user={user}/> */}
        //         {JSON.stringify(filtered)}
        //     </Col>
        // </Row>
    )
}
