import React from 'react';
import styles from './Board.module.scss';

const Board = () => {
	return (
		<div className={styles.wrap}>
			{['a'].map(() => (
				<div>100</div>
			))}
		</div>
	);
};

export default Board;
