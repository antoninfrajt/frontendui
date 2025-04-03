import 'bootstrap/dist/css/bootstrap.min.css';
import { AppCanvas, createAsyncGraphQLAction, useAsyncAction } from '@hrbolek/uoisfrontend-gql-shared'
import { FetchAllSubjectsAsyncAction } from '../../../packages/subject/src/Subject_for_del/Queries/FetchAllSubjectsAsyncAction';
import { AppRouter } from './AppRouter';

export const App = () => {
    return (
        // <Container fluid>
        <AppCanvas>
            <div>Hello world</div>
            {/* <FirstEntity/> */}
            {/* <Navbar className='bg-light'>
                <Container>
                    <Navbar.Brand href="" className="justify-content-start"><a href='/' className='btn'>UOIS</a></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <LogButton />
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
            {/* Hello World
            <Envelope>
                <User name = "Bobr" surname="Newbie">
                    <Name name = "Luke"/>
                </User>
            </Envelope> */}
            <AppRouter />
        </AppCanvas>    
        // {/* </Container> */}
    )
}

