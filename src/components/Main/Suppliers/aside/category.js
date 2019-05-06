import React from 'react'
import Link from '../../../../UI/link/link'
import {categoryData} from './categoryData'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-top: 2rem;
`;

const CatList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const category = () => {
    const list = categoryData.map(i => <li key={i.id}><Link href='/suppliers'>{i.text}</Link></li>)
    return (
        <Wrapper>
            <h4 className='text-secondary text-center'>Categorie</h4>
            <CatList>
            {list}
            </CatList>
        </Wrapper>
    )
}

export default category