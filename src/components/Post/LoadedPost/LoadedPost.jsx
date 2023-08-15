import React from 'react'
import TitleBar from '../TitleBar/TitleBar'

const LoadedPost = (props) => {

    let mockPostData = {
        userName: 'Jdwho',
        content: "This is an example post to show what it looks like. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, mollitia iure sed nulla cupiditate amet ex natus libero veritatis, eveniet ipsa. Quod beatae magnam atque? Est eius molestiae ullam error."
    }
    // Char counts
    // let charCount = mockPostData.content.length;

  return (
    <div className='post'>
        <TitleBar userName={mockPostData.userName}/>
        <div className='post_body'>
            <p>{mockPostData.content}</p>
        </div>
        {/* <div className="post_interact">
            {`${charCount}/250`}
        </div> */}
    </div>
  )
}
// For loading information
// LoadedPost.prototype = {
//     userName: String,
//     created_at: Date
// }

export default LoadedPost