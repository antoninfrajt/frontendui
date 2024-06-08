import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src/Components/ProxyLink"
import { useCallback, useState } from "react"
import { Dialog, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { Col, Row } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import {EditableAttributeText, SearchInput} from "@hrbolek/uoisfrontend-shared/src"
import { FetchSearchFacilityAsyncAction } from "../../Queries/FetchSearchFacilityAsyncAction"
import { UpdateFacilityAsyncAction } from "../../Queries/UpdateFacilityAsyncAction"
import { TextInput } from "@hrbolek/uoisfrontend-shared/src"
import { InsertFacilityAsyncAction } from "../../Queries/InsertFacilityAsyncAction"
import { FetchFacilityByIdAsyncAction } from "../../Queries/FetchFacilityByIdAsynsAction"
export const FacilityCreateDialog = ({facility}) => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        name: null,
        MasterId: null,
    })
    const [dialog, setDialog] = useState(false)
    const onOpen = () => {
        setDialog(true)
    }
    const onCancel = () => {
        setDialog(false)
    }
    const onOk = () => {
        setDialog(false)
        const updater = async() => {
            const upload = {...data, id: crypto.randomUUID()}
            console.log(upload)
            await dispatch(InsertFacilityAsyncAction(upload))
            console.log("ok")
            await dispatch(FetchFacilityByIdAsyncAction(facility))
        }
        updater()
    }
    const onChange = useCallback((name) => (value) => {
        setData(oldData => {
            const newData = {...oldData}
            newData[name] = value
            console.log(newData)
            return newData
        }) 
    },[setData])
    const MasterFacilitySelect = onChange("MasterId")
    if (dialog){
        return(
            <Dialog title= "Nové zázemí" onOk= {onOk} onCancel= {onCancel}>
                <Row>
                <Col><TextInput onChange={onChange("name")}/></Col>   
                </Row>
                <Row>
                <Col>
                <SearchInput title = "Nadfacility" onSelect={MasterFacilitySelect} FetchByPatternAsyncAction={FetchSearchFacilityAsyncAction}/>
                </Col>
                </Row>
            </Dialog>
         )
    }
    else {
        return(
            <Button variant= "outline-success" onClick= {onOpen}>+</Button>
        )
    }
}