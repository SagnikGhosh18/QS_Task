import Card from "../Card/Card"

import {tickets} from '../../data/_data.js';

const Column = ({title, group, order, usrid}) =>{

    const filteredTickets = tickets.filter((ticket) =>{
        switch (group){
            case "status": return ticket.status===title;
            case "priority": return ticket.priority===title;
            case "user": return ticket.userId===usrid;
            default: return ticket.status===title;
        }
    });


    return(
        <>
            <div className="column">
                <h1>{title} {filteredTickets.length}</h1>
                {filteredTickets.map( t =>{
                    return <Card id={t.id} title={t.title} priority={t.priority} tags={t.tags} />
                })}
            </div>
        </>
    );
}

export default Column;