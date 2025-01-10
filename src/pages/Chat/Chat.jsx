import React from 'react'
import './Chat.css'
import LeftSidebar from '../../component/LeftSidebar/LeftSidebar'
import ChatBox from '../../component/ChatBox/ChatBox'
import RightSidebar from '../../component/RightSidebar/RightSidebar'
function Chat() {
  return (
    <div className='chat'>
      <div className="chat-container">
        <LeftSidebar></LeftSidebar>
        <ChatBox></ChatBox>
        <RightSidebar></RightSidebar>
      </div>
    </div>
  )
}

export default Chat
