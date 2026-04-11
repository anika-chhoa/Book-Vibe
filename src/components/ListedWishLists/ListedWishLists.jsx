import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../context/BookContextProvider';
import Book from '../UI/Book';

const ListedWishLists = ({sortingType}) => {
    const {wishLists} = useContext(BookContext);
    const [filteredWishLists, setFilteredWishLists]=useState(wishLists)
    useEffect(()=>{
        if(sortingType){
            if(sortingType==="pages"){
                const sortedLists=[...wishLists].sort((a,b)=>b.totalPages-a.totalPages);
                setFilteredWishLists(sortedLists)
            }else if(sortingType==="rating"){
                const sortedLists=[...wishLists].sort((a,b)=>b.rating-a.rating);
                setFilteredWishLists(sortedLists)
            }
        }
    },[sortingType,wishLists]);


    if (filteredWishLists.length===0){
        return <div className='h-[50vh] flex justify-center items-center bg-green-100 rounded-xl my-8'>
            <h1 className='text-3xl font-bold text-green-700'>No Wish List Book Found</h1>
        </div>
    }

    return (
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8'>
            {filteredWishLists.map((book,ind)=><Book key={ind} book={book}/>)}
        </div>
    );
};

export default ListedWishLists;