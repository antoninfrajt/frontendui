/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const UserLink = ({user}) => {
    return (
        <ProxyLink to={"/user/" + user?.id}>{user?.fullname}</ProxyLink>
    )
}