import { useState } from 'react';
import './Navbar.css';

const Navbar = (props) =>{

    const [isOpen, setIsOpen] = useState(false);

    function handleClick(){
        setIsOpen(!isOpen);
    }

    let display = 
    <div className='button' onClick={handleClick}>
        <span>
            <ion-icon name="options-outline"></ion-icon>
            <p>Display</p>
            <ion-icon name="caret-down-outline"></ion-icon>
        </span>
    </div>;

    if(isOpen){
        display = 
        <div>
            <div className='button' onClick={handleClick}>
                <span>
                    <ion-icon name="options-outline"></ion-icon>
                    <p>Display</p>
                    <ion-icon name="caret-up-outline"></ion-icon>
                </span>
            </div>
            <div >
                <label htmlFor="displayOption">Grouping:</label>
                <select
                    id="displayOption"
                    onChange={e => props.trigDisplay(e.target.value)}
                >
                    <option value="status">By Status</option>
                    <option value="user">By User</option>
                    <option value="priority">By Priority</option>
                </select>

                <label htmlFor="orderOption">Order by:</label>
                <select
                id="orderOption"
                onChange={e => props.trigOrder(e.target.value)}
                >
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                </select>
            </div>
        </div>
        
        
    }

    return display;
}

export default Navbar;