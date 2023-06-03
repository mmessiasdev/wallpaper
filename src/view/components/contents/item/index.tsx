import { Link } from "react-router-dom";
import { Container } from "../../styles/container/style"


interface props {
    img: string,
    href: string,
}

const Item = ({ img, href }: props) => {
    return (
        <>
            <Link to={href}>
            
                <Container margin="0px 30px" color="#bfbfbf" height="260px" radius="20px" width="140px" overflow="hidden" disp="flex" justify="center" aligh="center">
                    <img className="banner" height="100%" src={img} />

                </Container>

            </Link>
        </>
    )
}

export default Item;