/* eslint-disable react/prop-types */
import { CardCapsule,DeleteButton, useDispatch } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FacilitiesLink } from './FacilitiesLink'
import { FacilitiesCreateDialog } from './FacilitiesCreateDialog'
import { DeleteFacilityAsyncAction } from '../../Queries/DeleteFacilityAsyncAction'
import { FetchFacilityByIdAsyncAction } from '../../Queries/FetchFacilityByIdAsynsAction'


const Subfacility = ({index, subfacility, edit = false}, facility) => {
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
    if (edit) {
        return (
            <tr>
                {/* <Col>
                {/* <Link to= {"/facilities/facility/"}>{subfacility?.name}</Link> */}
                {/* </Col>  */}
                <td>{index}</td>
                <td><FacilitiesLink facility ={subfacility}></FacilitiesLink></td>
                <td>{subfacility.id}</td>
                <td><DeleteButton onClick={onClick}>X</DeleteButton></td>
            </tr>
        )
    }
    else {
        return (
            <tr>
                {/* <Col>
                {/* <Link to= {"/facilities/facility/"}>{subfacility?.name}</Link> */}
                {/* </Col>  */}
                <td>{index}</td>
                <td><FacilitiesLink facility ={subfacility}></FacilitiesLink></td>
                <td>{subfacility.id}</td>
                <td>{subfacility.label}</td>
            </tr>
        )
    }
}

export const SubFacilityCard = ({facility, edit=false, valid=true}) => {
    const subfacilities = facility?.subFacilities || []
    const filtered = (valid==null)?subfacilities:subfacilities.filter(
        s => s?.valid == valid
    )
    if (edit){
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
                            (s,i) => <Subfacility index={i+1} key={s.id} subfacility={s} edit = {true}/>
                        )}
                            <tr>
                                <td><FacilitiesCreateDialog facility={facility}></FacilitiesCreateDialog></td>
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
    else {
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
}
