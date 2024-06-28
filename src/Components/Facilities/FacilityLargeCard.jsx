import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FacilityMediumCard } from './FacilityMediumCard'
import { FacilityLink } from './FacilityLink'
import { SubFacilityCardEdit } from './SubFacilityCardEdit'

// import { UserRolesCard } from './UserRolesCard'
// import { UserRawCard } from './UserRawCard'
// import { UserMediumCard } from './UserMediumCard'

export const FacilityLargeCard = ({facility, children}) => {
    return (
        <CardCapsule title={<div><FacilityLink facility={facility} menu = {true}></FacilityLink></div>}>
        <Row>
            <Col md={3}>
                {/* <UserMediumCard user={user}/> */}
                <FacilityMediumCard facility={facility}/>
            </Col>
            <Col md={9}>
                {children}
            </Col>
            
        </Row>
        <br />
        <Row>
            <Col>
                {/* <UserRawCard user={user}/> */}
                {JSON.stringify(facility)}
            </Col>
        </Row>
    </CardCapsule>

    )
}
