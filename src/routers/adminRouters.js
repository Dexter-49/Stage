
import Layout from "../layout";
import ListUser from "../pages/UserManger/ListUser";

const admin={
    path:'admin',
    element:<Layout/>,
    children:[
        {
            path:'users',
            element:<ListUser/>
        }
    ]
}
export default admin;