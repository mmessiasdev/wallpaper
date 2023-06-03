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
    const [initPage, setInitPage] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setInitPage(true);
        setTimeout(() => {
            setInitPage(false)
        }, 2500)
    }, [])

    const [post, setPost] = useState<WallaperModel[]>([]);
    const [banner, setBanner] = useState<WallaperModel>();



    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASEURL}/api/content-wallpapers?populate=*`).then(response => response.json()).then(data => setPost(data.data));
        console.log(post);
        setLoading(true);
    }, [])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASEURL}/api/content-wallpapers/8?populate=*`).then(response => response.json()).then(data => setBanner(data.data));
        console.log(banner);
        setLoading(true);
    }, [])


    const { id } = useParams();

    return (
        <>
            {
                initPage ? <div><h1 className="textanimation">M. Messias Dev</h1></div> : <div>
                    <DefaultTitle>
                        <TypeText tag="h1">Wallpaper</TypeText>
                    </DefaultTitle>
                    <Container pad="50px 0px 100px 0px">
                        <Container margin="20px 20px" pad="0px 10%">
                            <TypeText tag="h4">All Wallpapers</TypeText>
                        </Container>
                        <Container pad="0px 10%">
                            <Banner img={banner?.attributes.wallpaper.data[0].attributes.formats.large.url} />

                        </Container>
                        <Container className="banner" disp="flex" overflow="scroll" pad="0px 10%">
                            {post.map((res) => {
                                return (
                                    <>
                                        <Container pad="30px 0px">
                                            <Item href={`/wallpaper/${res.id}`} img={res.attributes.wallpaper.data[0].attributes.formats.large.url} />

                                        </Container>
                                    </>
                                )
                            })}
                        </Container>
                    </Container>
                </div>
            }

        </>
    )
}

export default HomePage;