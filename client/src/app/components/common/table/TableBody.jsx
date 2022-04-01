import React from 'react'

const TableBody = ({ items, titles }) => {
	if (items?.lenght) {
		return (
			<tbody>
				{items.map((item, index) => (
					<tr key={item._id}>
						<th scope='row'>{index + 1}</th>
						<td>Mark</td>
					</tr>
				))}
			</tbody>
		)
	}

	return (
		<tbody>
			<tr>
				<p>Категории еще не добавлены</p>
			</tr>
		</tbody>
	)
}

export default TableBody
