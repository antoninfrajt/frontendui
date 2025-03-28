import 'bootstrap/dist/css/bootstrap.min.css';
// import FetchAllSubjectsAsyncAction from '@jokachu/uoisfrontend-subject'
import { AppCanvas, createAsyncGraphQLAction, useAsyncAction } from '@hrbolek/uoisfrontend-gql-shared'
// import { AppRouter } from './AppRouter';
const Name = ({name}) => {
    return (
        <span>Name: {name}</span>
    )
}
const User = ({name, surname, children}) => {
    return (
        <div>{name} {surname}<br/>{children}</div>
    )
}
const Envelope = ({title , children}) => {
    return (
        <div className="card" color = "blue" >{children}</div>
    )
}
const fetchUserAction = createAsyncGraphQLAction(`{userPage {
    __typename
    id
    fullname
    typeId
    lastchange
  }}`)
export const FirstEntity = () => {
    const {loading, error, entity, dispatchResult} = useAsyncAction(fetchUserAction, {});
    if (loading) return <p>Loading...</p>;
    return <div>User: <div>{JSON.stringify({dispatchResult})}</div></div>;
}

export const App = () => {
    return (
        // <Container fluid>
        <AppCanvas>
            <FirstEntity/>
            {/* <Navbar className='bg-light'>
                <Container>
                    <Navbar.Brand href="" className="justify-content-start"><a href='/' className='btn'>UOIS</a></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <LogButton />
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
            Hello World
            <Envelope>
                <User name = "Bobr" surname="Newbie">
                    <Name name = "Luke"/>
                </User>
            </Envelope>
            {/* <AppRouter /> */}
        </AppCanvas>    
        // {/* </Container> */}
    )
}

