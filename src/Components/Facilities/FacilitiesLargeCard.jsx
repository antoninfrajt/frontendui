import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FacilitiesMediumCard } from './FacilitiesMediumCard'
import { FacilitiesLink } from './FacilitiesLink'

// import { UserRolesCard } from './UserRolesCard'
// import { UserRawCard } from './UserRawCard'
// import { UserMediumCard } from './UserMediumCard'

export const FacilitiesLargeCard = ({facility, children}) => {
    return (
        <CardCapsule title={<div><FacilitiesLink facility={facility} menu = {true}></FacilitiesLink></div>}>
        <Row>
            <Col md={3}>
                {/* <UserMediumCard user={user}/> */}
                <FacilitiesMediumCard facility={facility}/>
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
