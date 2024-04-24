import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { EventMediumCard } from './EventMediumCard'
// import { UserRolesCard } from './UserRolesCard'
// import { UserRawCard } from './UserRawCard'
// import { UserMediumCard } from './UserMediumCard'

export const EventLargeCard = ({event, children}) => {
    return (
        <CardCapsule title={"Udalost " + event?.name}>
        <Row>
            <Col md={3}>
                {/* <UserMediumCard user={user}/> */}
                <EventMediumCard event={event}/>
            </Col>
            <Col md={6}>
                {children}
            </Col>
            <Col md={3}>
                {/* <UserRolesCard user={user}/> */}
                <EventMediumCard event={event}/>
            </Col>
            
        </Row>
        <br />
        <Row>
            <Col>
                {/* <UserRawCard user={user}/> */}
                {JSON.stringify(event)}
            </Col>
        </Row>
    </CardCapsule>

    )
}
