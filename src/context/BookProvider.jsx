import React, { createContext, useState } from 'react';

export const BookContext = createContext()


const BookProvider = ({children}) => {

      const [storeBooks, setStoredBooks] = useState([])


    const handleMarkAsRead = (currentBook)=>{
        
        const isExistBook = storeBooks.find(book => book.bookId == currentBook.bookId)
        
        if(isExistBook){
            alert('the book is already exit')
        }
        else{
            setStoredBooks([...storeBooks, currentBook])
            alert((`${currentBook.bookName} is added to list`))
        }

        console.log(currentBook, storeBooks)
         
    }


    const data ={
        storeBooks,
        setStoredBooks,
        handleMarkAsRead,
    };

    return (

        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;