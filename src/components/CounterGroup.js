import { useContext } from 'react';
import Counter from './Counter';
import CounterOptions from './CounterOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../context/AppContext';
import { v4 as uuid } from 'uuid';
// import { newCounterMetadata } from '../App';

const CounterGroup = ({ groupId, group, label }) => {
	const { dispatchData } = useContext(AppContext);
	const { negativeValueAllowed, limit, incrementBy } = group;
	const counterOptions = {
		groupId,
		negativeValueAllowed,
		limit,
		incrementBy
	};
	const newCounterMetadata = { value: 0 };
	const handleAddNewCounter = () => {
		dispatchData({ type: 'ADD_COUNTER', payload: { groupId, id: uuid(), newCounter: newCounterMetadata } });
	};

	return (
		<div className="CounterGroup bg-light py-2 px-5 m-2 rounded">
			<div className="d-flex justify-content-between">
				<div className="label-section w-100">
					<span
						type="text"
						className="fw-bold rounded"
					>{label}</span>
				</div>
				<div className="d-flex justify-content-around align-items-center options-section">
					<button onClick={handleAddNewCounter} className="add-new-counter btn btn-sm border">
						<FontAwesomeIcon icon={faPlusCircle} />
					</button>
					<div className="dropdown">
						<div className="options-icon " id="optionsMenu" data-bs-toggle="dropdown" aria-expanded="true">
							<FontAwesomeIcon icon={faEllipsisV} />
						</div>
						<div className="dropdown-menu px-2" aria-labelledby="optionsMenu">
							<CounterOptions options={counterOptions} />
						</div>
					</div>
				</div>
			</div>
			{Object.keys(group.counters).map(counterId => (
				<Counter key={counterId} id={counterId} options={counterOptions} counter={group.counters[counterId]} />
			))}
		</div>
	);
};

export default CounterGroup;
