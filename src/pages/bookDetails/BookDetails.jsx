
import { useLoaderData, useParams } from 'react-router';



const BookDetails = () => {
    const { bookId } = useParams('sdd')



    const books = useLoaderData()

    const expectedBook = books.find(book => book.bookId == Number(bookId))
    const {bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = expectedBook;


    return (
        <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-8">
            <figure className='flex w-full items-center justify-center bg-gray-100 rounded-xl'>
                <img
                    src={image}
                    alt="Album" className='h-80  ' />
            </figure>
            <div className="card-body space-y-3 ">
                <h2 className="card-title">{ bookName}</h2>
                <h2 className="card-title">{ author}</h2>
                <p className='py-2 border-y'>{category}</p>
                <p>{review}</p>
                <div className='flex items-center gap-2'>
                    {
                        tags.map((tag, ind) => <div key={ind} className="badge text-green-500 bg-green-50 font-bold">{tag}</div>)
                    }
                </div>
                <div className=" border-t space-y-3">
                    <div className='flex justify-between items-center gap-2'>
                        <span>Number Of Pages: <span>{totalPages}</span></span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span>Publisher: <span>{publisher}</span></span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span>Year Of Publisher: <span>{yearOfPublishing}</span></span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span>Rating: <span>{rating}</span></span>
                    </div>
                    

                    <div className='flex items-center gap-2'>
                        <button className="btn btn-primary">Read</button>
                        <button className="btn btn-primary">WishList</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;