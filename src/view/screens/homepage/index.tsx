import Banner from "../../components/contents/banner";
import ItemList from "../../components/contents/itemlist";
import TypeText from "../../components/contents/text";
import DefaultTitle from "../../components/contents/title";
import { Container } from "../../components/styles/container/style";

const HomePage = () => {
    return (
        <>
            <DefaultTitle>
                <TypeText tag="h1">Wallpaper</TypeText>
            </DefaultTitle>
            <ItemList title="Top Wallpapers" />
            <Container margin="75px 0px 0px 0px">
                <Banner />
            </Container>
            <ItemList title="Categorías" />
        </>
    )
}

export default HomePage;