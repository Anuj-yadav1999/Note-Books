import React, { useEffect } from 'react'
import { useStateValue } from '../StateProvider';
import Book from './Book';
import './Home.css';
import Grid from '@material-ui/core/Grid';

function Home() {

    const [{ bookStore }, dispatch] = useStateValue();

    useEffect(() => {
        const addItem = async () => {
            const res = await fetch(`https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q=a`)
                            .then((response) => response.json())
                            .catch((error) => console.log(error));
            dispatch({
                type: 'GET_ALL_BOOKS',
                payload: res.items
            });
        }
        addItem();
        //AddItem();
    }, []);

    return (
        <div className='home'>
            <Grid container spacing={3} >
                { bookStore.length > 0 &&  bookStore.map((item) => (
                    <Grid item xs={3}>
                        <Book 
                            item={item} 
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Home
