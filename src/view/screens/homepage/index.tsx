import { useParams } from "react-router-dom";
import Banner from "../../components/contents/banner";
import ItemList from "../../components/contents/itemlist";
import TypeText from "../../components/contents/text";
import DefaultTitle from "../../components/contents/title";
import { Container } from "../../components/styles/container/style";
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Item from "../../components/contents/item";

const HomePage = () => {

    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState<WallaperModel[]>([]);


    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASEURL}/api/content-wallpapers?populate=*`).then(response => response.json()).then(data => setPost(data.data));
        console.log(post);
        setLoading(true);
    }, [])


    const { id } = useParams();

    return (
        <>
            <DefaultTitle>
                <TypeText tag="h1">Wallpaper</TypeText>
            </DefaultTitle>
            <Container pad="0px 0px 100px 0px">
                <Container margin="20px 20px" pad="50px 0px 0px 0px">
                    <TypeText tag="h4">All Wallpapers</TypeText>
                </Container>
                <Container className="banner" disp="flex" overflow="scroll" pad="20px 0px">
                    {post.map((res) => {
                        return (
                            <>
                                <Item href={`/wallpaper/${res.id}`} img={res.attributes.wallpaper.data[0].attributes.formats.large.url} />
                            </>
                        )
                    })}
                </Container>
            </Container>

        </>
    )
}

export default HomePage;