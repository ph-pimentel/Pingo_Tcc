import Title from "./components/Title"
import Container from "./components/Container";
import Header from "./components/Header";
import Carrossel from "./components/Carrossel";
import Friends from "./components/Friends";

function App() {
    return (
     <>   
       <Header/>
       <Container>
        <Title></Title>
        <Carrossel></Carrossel>
        <Friends></Friends>
       </Container>
     </>
    );
}

export default App;