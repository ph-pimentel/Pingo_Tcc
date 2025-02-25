import Title from "../../components/Title/index";
import Container from "../../components/Container/index";
import Header from "../../components/Header/index";
import Carrossel from "../../components/Carrossel/index";

function Home() {
    return (
        <>   
            <Header/>
            <Container>
                <Title />
                <Carrossel />
            </Container>
        </>
    );
}

export default Home;
