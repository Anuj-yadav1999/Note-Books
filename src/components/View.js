import React from 'react'
import { useStateValue } from '../StateProvider'
import './View.css'
import { useHistory } from 'react-router-dom'

function View() {
    const history = useHistory();
    const [{ selectedBook }, dispatch] = useStateValue();

    const handleBack = (e) => {
        e.preventDefault();

        history.push('/');

    }

    return (
        <div className='view'>
            <div className='view_container'>
                <div className='view_title'>
                    <p>{selectedBook?.volumeInfo.title}</p>
                </div>
                <div className='view_author'>
                    <p>{selectedBook?.volumeInfo.authors[0]}</p>
                </div>
                <div className='view_image'>
                    <img className='view_image' src={selectedBook?.volumeInfo.imageLinks.thumbnail} alt='' />
                </div>
                <div className='view_version'>
                    <p>Version : {selectedBook?.volumeInfo.contentVersion}</p>
                </div>
                <button type='submit' onClick={e => handleBack(e)}>Back</button>
            </div>
        </div>
    )
}

export default View
