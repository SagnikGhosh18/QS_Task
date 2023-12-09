import Card from "../Card/Card"

import {tickets} from '../../data/_data.js';

const Column = ({title, group, order, usrid}) =>{

    let filteredTickets = tickets.filter((ticket) =>{
        switch (group){
            case "status": return ticket.status===title;
            case "priority": return ticket.priority===title;
            case "user": return ticket.userId===usrid;
            default: return ticket.status===title;
        }
    });

    switch(order){
        case "title": filteredTickets.sort((a, b) => {
            // Convert titles to lowercase for case-insensitive sorting
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
          
            // Use localeCompare for string comparison
            return titleA.localeCompare(titleB);
          });
          break;
        default: 
            filteredTickets.sort((a, b) => {
                return b.priority-a.priority;
            });
    }

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