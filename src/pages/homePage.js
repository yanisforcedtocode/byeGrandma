// === packages
// === components
import MainSlide from "../components/layout/mainSlide";
import MessageBoard from "../components/layout/messageBoard";
import Body from './../components/sections/body'

function HomePage (props){
    return (
        <Body>
            <MainSlide/>
            <MessageBoard/>
        </Body>

    )
}

export default HomePage;