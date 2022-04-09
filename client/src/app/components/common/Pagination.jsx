import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
	const pagesCount = Math.ceil(itemsCount / pageSize)
	if (pagesCount === 1) return null
	const pages = _.range(1, pagesCount + 1)

	return (
		<nav>
			<ul className='pagination'>
				{pages.map((page) => (
					<button
						className={`btn me-1 btn${
							page === currentPage ? '' : '-outline'
						}-secondary`}
						key={'page_' + page}
						onClick={() => {
							onPageChange(page)
						}}>
						{page}
					</button>
				))}
			</ul>
		</nav>
	)
}
Pagination.propTypes = {
	itemsCount: PropTypes.number.isRequired,
	pageSize: PropTypes.number.isRequired,
	currentPage: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
}

export default Pagination
