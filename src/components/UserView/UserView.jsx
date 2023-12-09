import './user.css';
import Column from '../Column/Column';

import {users} from '../../data/_data.js';

const UserView = ({orderBy}) =>{

    return(
        <>
            <div className="userpage">
                {users.map((user)=>{
                    return <Column title={user.name} group="user" order={orderBy} usrid={user.id}/>
                })}
            </div>
        </>
        
    )
}

export default UserView;