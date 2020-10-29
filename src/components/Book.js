import React from 'react'
import { useStateValue } from '../StateProvider'
import { useHistory } from 'react-router-dom'
import './Book.css'

function Book({ item }) {
    const history = useHistory();
    const [{}, dispatch] = useStateValue();

    const handleClick = () => {
        dispatch({
            type: 'VIEW_BOOK',
            payload: item
        });
        console.log("this is the item pushed -->",item);
        history.push('/view');
    }

    return (
            <div className='book'>
                <div className='book__title'>
                    <p>
                        {item.volumeInfo.title}
                    </p>
                </div>
                <div className='book__img'>
                    <img className='book__img' src={item.volumeInfo.imageLinks.smallThumbnail} alt='' />
                </div>
                <div className='book__author'> 
                    <p >
                        {item.volumeInfo.authors[0]}
                    </p>
                </div>
                <div className='book__button'>
                    <button type='submit' onClick={handleClick}>View</button>
                </div>
            </div>
    )
}

export default Book
