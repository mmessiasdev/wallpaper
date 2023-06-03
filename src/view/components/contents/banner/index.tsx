import { Container } from "../../styles/container/style"

interface props{
    img: string,
}

const Banner = ({img}: props) => {
    return(
        <>
            <Container pad="30px">
                <Container width="100%" height="250px" radius="20px" color="#c6c6c6" disp="flex" justify="center" overflow="hidden">
                    <img className="banner" width="100%" src={img}/>
                    
                </Container>
            </Container>
        </>
    )
}

export default Banner;