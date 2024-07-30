// import React from 'react'
// import appwriteService from "../appwrite/config"
// import {Link} from 'react-router-dom'

// function PostCard({$id, title, featuredimage}) {
    
//   return (
//     <Link to={`/post/${$id}`}>
//         <div className='w-full h-full bg-gray-300 rounded-xl p-4'>
//             <div className='w-full max-h-42 justify-center mb-4'>
//                 <img src={appwriteService.getFilePreview(featuredimage)} alt={title}
//                 className='rounded-xl ' />

//             </div>
//             <h2
//             className='text-xl font-bold'
//             >{title}</h2>
//         </div>
//     </Link>
//   )
// }


// export default PostCard


// import React from 'react';
// import appwriteService from "../appwrite/config";
// import { Link } from 'react-router-dom';

// function PostCard({ $id, title, featuredimage }) {
//     return (
//         <Link to={`/post/${$id}`} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
//             <div className="w-full h-full bg-gray-200 rounded-xl p-4 flex flex-col items-center ">
//                 <div className="w-full h-48 mb-2 overflow-hidden">
//                     <img
//                         src={appwriteService.getFilePreview(featuredimage)}
//                         alt={title}
//                         className="w-full h-full object-cover rounded-xl"
//                     />
//                 </div>
//                 <h2 className="text-xl font-bold text-center mt-2">{title}</h2>
//             </div>
//         </Link>
//     );
// }

// export default PostCard;


import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredimage }) {
    return (
        <Link to={`/post/${$id}`} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 ">
            <div className="w-full bg-gray-200 rounded-xl p-4 flex flex-col items-center overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="w-full h-48 mb-2 overflow-hidden rounded-xl">
                    <img
                        src={appwriteService.getFilePreview(featuredimage)}
                        alt={title}
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>
                <h2 className="text-xl font-bold text-center mt-2">
                    {title}
                </h2>
            </div>
        </Link>
    );
}

export default PostCard;
