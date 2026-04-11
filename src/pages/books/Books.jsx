import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';

const Books = () => {

    const {storeBooks} = useContext(BookContext)
   console.log(storeBooks, "bookContext")

    return (
        <div>
            books
        </div>
    );
};

export default Books;