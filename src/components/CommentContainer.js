import React from 'react';
import CommentList from './CommentList';

const commentData = [
    {
        name:"Ganesh Rasal",
        text: "Lorem ipsum dolor sit amet. Ea aliquid perferend",
        replies:[],
    },
    {
        name:"Virat Kohli",
        text: "Lorem ipsum dolor sit amet. Ea aliquid perferend",
        replies:[{
            name:"Ganesh Rasal",
            text: "Lorem ipsum dolor sit amet. Ea aliquid perferend",
            replies:[],
        },],
    },
    {
        name:"Ganesh Rasal",
        text: "Lorem ipsum dolor sit amet. Ea aliquid perferend",
        replies:[
            {
                name:"Alia Bhatt",
                text: "Lorem ipsum dolor sit amet. Ea aliquid perferend",
                replies:[
                    {
                        name:"Dia Mirza",
                        text: "Lorem ipsum dolor sit amet. Ea aliquid perferend",
                        replies:[],
                    },
                ],
            },
        ],
    },
    {
        name:"Uday Naik",
        text: "Lorem ipsum dolor sit amet. Ea aliquid perferend",
        replies:[
            {
                name:"Maddy",
                text: "Lorem ipsum dolor sit amet. Ea aliquid perferend",
                replies:[
                {
                    name:"sangy",
                    text: "Lorem ipsum dolor sit amet. Ea aliquid perferend",
                    replies:[
                        {
                            name:"Dyanny",
                            text: "Lorem ipsum dolor sit amet. Ea aliquid perferend",
                            replies:[
                                {
                                    name:"Ganesh Rasal",
                                    text: "Lorem ipsum dolor sit amet. Ea aliquid perferend",
                                    replies:[
                                        {
                                            name:"Dia Mirza",
                                            text: "Lorem ipsum dolor sit amet. Ea aliquid perferend",
                                            replies:[],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
            },
        ],
    },
    {
        name:"Dyanny",
        text: "Lorem ipsum dolor sit amet. Ea aliquid perferend",
        replies:[],
    },
    {
        name:"Maddy",
        text: "Lorem ipsum dolor sit amet. Ea aliquid perferend",
        replies:[],
    },
    {
        name:"sangy",
        text: "Lorem ipsum dolor sit amet. Ea aliquid perferend",
        replies:[],
    },
]

const CommentContainer = () => {
  return (
    <div className='p-2 m-5'>
      <h1 className='text-xl font-semibold'>Comments:</h1>
      <CommentList comments={commentData} />
    </div>
  )
}

export default CommentContainer
