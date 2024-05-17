import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
            'ac667572-04f0-4a82-a834-39fc3aaff95d', 
            props.user.username, 
            props.user.secret
        );
    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }}/>
        </div>
    )
}



export default ChatsPage