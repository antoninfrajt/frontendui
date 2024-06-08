/* eslint-disable react/prop-types */
import { CardCapsule,DeleteButton, useDispatch } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FacilityLink } from './FacilityLink'
import { FacilityCreateDialog } from './FacilityCreateDialog'
import { DeleteFacilityAsyncAction } from '../../Queries/DeleteFacilityAsyncAction'
import { FetchFacilityByIdAsyncAction } from '../../Queries/FetchFacilityByIdAsynsAction'


const SubfacilityEdit = ({index, subfacility},) => {
    const dispatch = useDispatch()
    const onClick = () => {
        const updater = async() => {
            const data = {id: subfacility?.id, lastchange: subfacility?.lastchange, valid: false}
            console.log("delete" + subfacility?.name)
            console.log(data)
            console.log(subfacility?.masterFacility)
            await dispatch(DeleteFacilityAsyncAction(data))
            await dispatch(FetchFacilityByIdAsyncAction(subfacility?.masterFacility))
        }
        updater()
    }
    return (
        <tr>
            {/* <Col>
            {/* <Link to= {"/facilities/facility/"}>{subfacility?.name}</Link> */}
            {/* </Col>  */}
            <td>{index}</td>
            <td><FacilityLink facility ={subfacility}></FacilityLink></td>
            <td>{subfacility.id}</td>
            <td><DeleteButton onClick={onClick}>X</DeleteButton></td>
        </tr>
    )
}

export const SubFacilityCardEdit = ({facility, valid=true}) => {
    const subfacilities = facility?.subFacilities || []
    const filtered = (valid==null)?subfacilities:subfacilities.filter(
        s => s?.valid == valid
    )
    return (
        <CardCapsule title={"Podřadná zázemí " + facility?.name}>
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
                        (s,i) => <SubfacilityEdit index={i+1} key={s.id} subfacility={s} edit = {true}/>
                    )}
                        <tr>
                            <td><FacilityCreateDialog facility={facility}></FacilityCreateDialog></td>
                        </tr>

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
