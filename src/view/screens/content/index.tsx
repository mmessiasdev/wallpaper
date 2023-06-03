import { useEffect, useState } from "react";
import { Container } from "../../components/styles/container/style";
import { useParams } from "react-router-dom";
import TypeText from "../../components/contents/text";

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
                        <Container>
                            <TypeText tag="h3">Messias</TypeText>
                        </Container>
                    }

                </div>


            }
        </>
    )
}

export default ContentWallpaper;