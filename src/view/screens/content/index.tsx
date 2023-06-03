import { useEffect, useState } from "react";
import { Container } from "../../components/styles/container/style";
import { useParams } from "react-router-dom";
import TypeText from "../../components/contents/text";
import { FaDownload } from "react-icons/fa";

const ContentWallpaper = () => {

    const [initPage, setInitPage] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setInitPage(true);
        setTimeout(() => {
            setInitPage(false)
        }, 2500)
    }, [])

    const { id } = useParams();
    const [post, setPost] = useState<WallaperModel>();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASEURL}/api/content-wallpapers/${id}?populate=*`).then(response => response.json()).then(data => setPost(data.data));
        console.log(post);
        setLoading(true);
    }, [])


    return (
        <>
            {
                initPage ? <div><h1 className="textanimation">M. Messias</h1></div> : <div>
                    {post &&
                        <Container pad="25px 10%" disp="flex" justify="center" direc="column" aligh="center">
                            <TypeText tag="h3">Wallpaper</TypeText>
                            <Container margin="50px 0px" disp="flex" height="80vh" overflow="hidden" radius="30px">
                                <img className="banner" src={post.attributes.wallpaper.data[0].attributes.formats.large.url} />
                            </Container>
                            <Container>
                                {post.attributes.name}
                            </Container>
                            <Container width="80%">
                                <a>
                                    <Container margin="40px 0px" height="100px" color="#f1f1f1" disp="flex" justify="center" aligh="center" radius="10px">
                                        <FaDownload />
                                        <Container pad="10px 10px">
                                            <TypeText tag="h3">Download</TypeText>
                                        </Container>
                                    </Container>

                                </a>

                            </Container>
                        </Container>

                    }

                </div>


            }
        </>
    )
}

export default ContentWallpaper;