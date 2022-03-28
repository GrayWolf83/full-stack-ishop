import React from 'react'

const RowContainer = ({ children }) => {
    return (
        <div className='container'>
            <div className='row'>{children}</div>
        </div>
    )
}

export default RowContainer
