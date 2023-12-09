import './priority.css';
import Column from '../Column/Column';

const PriorityView = ({orderBy}) =>{
    return(
        <>
            <div className="prioritypage">
                <Column title={1} group="priority" order={orderBy} />
                <Column title={2} group="priority" order={orderBy} />
                <Column title={3} group="priority" order={orderBy} />
                <Column title={4} group="priority" order={orderBy} />
                <Column title={5} group="priority" order={orderBy} />
            </div>
        </>
        
    )
}

export default PriorityView;