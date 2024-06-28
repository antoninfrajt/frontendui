/* eslint-disable react/prop-types */
import { CardCapsule,DeleteButton, useDispatch } from '@hrbolek/uoisfrontend-shared/src'
import { FacilityLink } from './FacilityLink'


const Subfacility = ({index, subfacility},) => {
    return (
        <tr>
            {/* <Col>
            {/* <Link to= {"/facilities/facility/"}>{subfacility?.name}</Link> */}
            {/* </Col>  */}
            <td>{index}</td>
            <td><FacilityLink facility ={subfacility}></FacilityLink></td>
            <td>{subfacility.id}</td>
            <td>{subfacility.label}</td>
        </tr>
    )
}

export const SubFacilityCard = ({facility, valid=true}) => {
    const subfacilities = facility?.subFacilities || []
    const filtered = (valid==null)?subfacilities:subfacilities.filter(
        s => s?.valid == valid
    )
    return (
        <CardCapsule title={"Podřazená zázemí " + facility?.name}>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Název</th>
                        <th>Id</th>
                        <th>Označení</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map(
                        (s,i) => <Subfacility index={i+1} key={s.id} subfacility={s} />
                    )}
                </tbody>
            </table>

        {/* <Col>
            {filtered.map(
                (i,s) => <Subfacility index={i+1} key={s.id} subfacility={s} />
            )}
        </Col> */}
    </CardCapsule>
    // <Row>
    //     <Col>
    //         {/* <UserRawCard user={user}/> */}
    //         {JSON.stringify(filtered)}
    //     </Col>
    // </Row>
    )
}
