/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

export const GroupLink = ({group}) => {
    if (group != null) {
        return(
            <ProxyLink to ={"/group/" + group?.id}>{group?.name}</ProxyLink>
        )
    }
    else {
        return(
            <Col>Žádná</Col>
        )
    }
}