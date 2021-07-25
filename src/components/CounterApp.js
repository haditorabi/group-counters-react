import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import CounterGroup from './CounterGroup';
import Header from './Header';

const CounterApp = () => {
	const { data } = useContext(AppContext);
	return (
		<div>
			<Header />
			<div className="main-container">
				{Object.keys(data).map((groupId, index) => (
					<CounterGroup key={groupId} groupId={groupId} group={data[groupId]} label={'Counter Group '+ (index+1)} />
				))}
			</div>
		</div>
	);
};

export default CounterApp;
