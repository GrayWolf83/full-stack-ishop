import React from 'react'

const SortBar = ({ sortValue, onClick }) => {
	return (
		<div className='row'>
			<div className='col-6 d-flex align-items-center'>
				<button
					className='btn btn-secondary w-100 btn-lg'
					onClick={() =>
						onClick(
							sortValue.line === 'cost'
								? sortValue.method === 'ask'
									? { line: 'cost', method: 'desk' }
									: { line: 'cost', method: 'ask' }
								: { line: 'cost', method: 'ask' },
						)
					}
					data-name='cost'>
					Цена
					<i
						className={`bi-caret-${
							sortValue.line === 'cost'
								? sortValue.method === 'ask'
									? 'down'
									: 'up'
								: 'down'
						}-fill ms-2 text-light`}
					/>
				</button>
			</div>
			<div className='col-6'>
				<button
					className='btn btn-secondary w-100 btn-lg'
					onClick={() =>
						onClick(
							sortValue.line === 'name'
								? sortValue.method === 'ask'
									? { line: 'name', method: 'desk' }
									: { line: 'name', method: 'ask' }
								: { line: 'name', method: 'ask' },
						)
					}
					data-name='name'>
					Наименование{' '}
					<i
						className={`bi bi-caret-${
							sortValue.line === 'name'
								? sortValue.method === 'ask'
									? 'up'
									: 'down'
								: 'up'
						}-fill ms-2 text-light`}
					/>
				</button>
			</div>
		</div>
	)
}

export default SortBar
