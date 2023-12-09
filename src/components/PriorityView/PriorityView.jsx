import './priority.css';
import Column from '../Column/Column';

const PriorityView = ({orderBy}) =>{
    return(
        <>
            <div className="prioritypage">
                <Column title="No Priority" group="priority" order={orderBy} pr={0} />
                <Column title="Low" group="priority" order={orderBy} pr={1} />
                <Column title="Medium" group="priority" order={orderBy} pr={2} />
                <Column title="High" group="priority" order={orderBy} pr={3} />
                <Column title="Urgent" group="priority" order={orderBy} pr={4} />
            </div>
        </>
        
    )
}

export default PriorityView;