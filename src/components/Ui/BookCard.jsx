import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';
const BookCard = ({ book }) => {
    return (

        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm">
            <figure className='p-6 '>
                <img
                    src={book.image}
                    alt={book.bookName}
                    className='rounded-lg h-65' />
            </figure>
            <div className="card-body">
                <div className='flex items-center gap-2'>
                    {
                        book.tags.map((tag, ind) => <div key={ind} className="badge text-green-500 bg-green-50 font-bold">{tag}</div>)
                    }
                </div>

                <div className="card-title">
                    <h2 className='font-bold text-2xl'>{book.bookName}</h2>

                </div>
                <p className='text-lg font-semibold'>By: {book.author}</p>

                <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-xl">
                    <div className="font-semibold">{book.category}</div>
                    <div className="flex gap-2 items-center">{book.rating} <CiStar></CiStar>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default BookCard;