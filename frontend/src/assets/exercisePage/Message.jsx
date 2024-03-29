import YouMsg from "./YouMsg";
import MyMsg from "./MyMsg";
const Message = ({
    isTyping,
    id,
    currentTypingId,
    message,
    pageOwnerId
  }) => {
    

    return (
      //메세지 타입에 따라 클래스 이름이 달라지도록! 
      <div>
        {Number(pageOwnerId) == message.senderId ?  (<MyMsg message={message} />) : (<YouMsg message={message}  />)}
      </div>
    );
  };

  export default Message;