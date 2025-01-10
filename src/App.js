import Title from "./components/Title"
import Container from "./components/Container";
import Header from "./components/Header";
import Carrossel from "./components/Carrossel";

function App() {
    return (
     <>   
       <Header/>
       <Container>
        <Title></Title>
        <Carrossel></Carrossel>
       </Container>
     </>
    );
}

export default App;