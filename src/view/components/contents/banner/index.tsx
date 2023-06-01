import { Container } from "../../styles/container/style"

const Banner = () => {
    return(
        <>
            <Container pad="30px">
                <Container width="100%" height="250px" radius="20px" color="#c6c6c6" disp="flex" justify="center" overflow="hidden">
                    <img className="banner" width="100%" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2VtfGVufDB8fDB8fHww&w=1000&q=80"/>
                    
                </Container>
            </Container>
        </>
    )
}

export default Banner;