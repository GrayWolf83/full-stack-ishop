import React, { useState } from 'react'
import TextField from '../components/common/form/TextField'
import ProductList from '../components/common/ProductList'
import RowContainer from '../components/common/RowContainer'
import SortBar from '../components/ui/Sortbar'
import Toolbar from '../components/ui/Toolbar'

const HomePage = () => {
    const [search, setSearch] = useState('')

    const products = [
        {
            _id: '1',
            name: 'Моноблок мультимедийный',
            description: 'ACER Aspire C27-962',
            image: 'https://www.mechta.kz/export/1cbitrix/import_files/a5/a5fa364d-c5d4-11ea-a230-005056b6dbd7-768.webp',
            cost: 65000,
            category: '62418495a72364dce36b8f81',
            manageId: '624305d7e5bac485ccf1aa3b',
        },
        {
            _id: '2',
            name: 'Ноутбук',
            description: 'HUAWEI MateBook D 14',
            image: 'https://www.mechta.kz/export/1cbitrix/import_files/b8/b87a95c3-8568-11ec-a244-005056b6dbd7-768.webp',
            cost: 65000,
            category: '62418495a72364dce36b8f82',
            manageId: '624305d7e5bac485ccf1aa3b',
        },
        {
            _id: '3',
            name: 'Телефон сотовый',
            description: 'APPLE iPhone 12 128GB (Black)',
            image: 'https://www.mechta.kz/export/1cbitrix/import_files/ac/ac142efc-0df3-11eb-a235-005056b6dbd7-768.webp',
            cost: 100000,
            category: '62418495a72364dce36b8f85',
            manageId: '624305d7e5bac485ccf1aa3b',
        },
        {
            _id: '4',
            name: 'Пылесос',
            description: 'SAMSUNG VCC 4520 S3R',
            image: 'https://www.mechta.kz/export/1cbitrix/import_files/e3/e31c9ec2-2900-11e4-b813-14dae972ca6d-768.webp',
            cost: 10000,
            category: '62418495a72364dce36b8f85',
            manageId: '624305d7e5bac485ccf1aa3b',
        },
        {
            _id: '5',
            name: 'Холодильник',
            description: 'LG GA-B 509 CESL',
            image: 'https://www.mechta.kz/images/product/3007/26260001558_1-768.webp',
            cost: 50000,
            category: '62418495a72364dce36b8f85',
            manageId: '624305d7e5bac485ccf1aa3b',
        },
    ]

    const handleChange = (target) => {
        setSearch(target.value)
    }

    return (
        <>
            <RowContainer>
                <div className='offset-md-1 col-md-10 mt-3'>
                    <TextField
                        value={search}
                        onChange={handleChange}
                        name={'search'}
                        placeholder='Поиск...'
                    />
                </div>
            </RowContainer>
            <RowContainer>
                <div className='col-md-4'>
                    <Toolbar />
                </div>
                <div className='col-md-8'>
                    <SortBar />
                </div>
            </RowContainer>
            <RowContainer>
                <ProductList products={products} />
            </RowContainer>
        </>
    )
}

export default HomePage
