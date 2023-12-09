import './status.css';
import Column from '../Column/Column';

const StatusView = ({orderBy}) =>{

    return(
        <>
            <div className="statuspage">
                <Column title="Backlog" group="status" order={orderBy} />
                <Column title="Todo" group="status" order={orderBy} />
                <Column title="In progress" group="status" order={orderBy} />
                <Column title="Done" group="status" order={orderBy} />
                <Column title="Canceled" group="status" order={orderBy} />
            </div>
        </>
    )
}

export default StatusView;