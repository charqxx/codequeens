
import { useState } from '@lynx-js/react'

export default function Chat() {
    const [text, setText] = useState("")
    const [messages, setMessages] = useState([])

    const sendMessage = () => {
        if (!text.trim()) return
        setMessages([...messages, { text, sender: "user" }])
        setText("")
    }

    return (
    <view className="chatContainer">

      {/* Input row */}
      <view className="inputView">
        <input
          className="inputBox"
          placeholder="Type a message..."
          value={text}
          onInput={e => setText(e.detail.value)}
        />
        <view className="sendButton" bindtap={sendMessage}>
          <text className="sendIcon">➤</text>
        </view>
      </view>
    </view>
  );
}