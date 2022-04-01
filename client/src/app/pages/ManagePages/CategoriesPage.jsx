import React from 'react'
import { useSelector } from 'react-redux'
import Table from '../../components/common/table/Table'
import TableHead from '../../components/common/table/TableHead'
import { getCategoriesList } from '../../store/categories'

const CategoriesPage = () => {
	const categories = useSelector(getCategoriesList())

	const deleteHandler = (id) => {
		console.log('id', id)
	}

	return (
		<div className='row mt-2'>
			<h3>Категории</h3>
			<Table>
				<TableHead titles={['Наименование']} />
				<tbody>
					{categories ? (
						categories.map((item, index) => (
							<tr key={item._id}>
								<th scope='row'>{index + 1}</th>
								<td>{item.name}</td>
								<td>
									<button
										className='btn btn-danger'
										onClick={() => deleteHandler(item._id)}>
										Х
									</button>
								</td>
							</tr>
						))
					) : (
						<p>Категории еще не добавлены</p>
					)}
				</tbody>
			</Table>
		</div>
	)
}

export default CategoriesPage
