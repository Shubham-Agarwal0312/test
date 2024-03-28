import React from 'react'
import CommentView from './CommentView'

const commentsObj = [
    {
        author: "Shubham Agarwal",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        reply: [
            {
                author: "Ayushi Garg",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                author: "Kapil Agarwal",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
        ]
    },
    {
        author: "Ayushi Garg",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        reply: [
            {
                author: "Shubham Agarwal",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                reply: [
                    {
                        author: "Ayushi Garg",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    },
                    {
                        author: "Kapil Agarwal",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                ]
            }
        ]
    },
    {
        author: "Kapil Agarwal",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        reply: [
            {
                author: "Ayushi Garg",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                reply: [
                    {
                        author: "Shubham Agarwal",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        reply: [
                            {
                                author: "Ayushi Garg",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            },
                            {
                                author: "Kapil Agarwal",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

const CommentLayout = () => {
  return (
    <div>
      {commentsObj.map((commentObj, index) => {
        return <CommentView commentObj={commentObj} />;
      })}
      
    </div>
  )
}

export default CommentLayout
