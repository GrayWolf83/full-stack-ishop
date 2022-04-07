import React from 'react'

const TableHead = ({ titles }) => {
	return (
		<thead>
			<tr>
				<th className='text-secondary' scope='col'>
					№
				</th>
				{titles.map((title, index) => (
					<th className='text-secondary' key={index}>
						{title}
					</th>
				))}
			</tr>
		</thead>
	)
}

export default TableHead
