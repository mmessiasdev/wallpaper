import { Container } from "../../styles/container/style"
import Item from "../item";
import TypeText from "../text";

interface Props{
    title: string;
}

const ItemList = ({title}: Props) => {
    return(
        <>
            <Container width="100%" disp="flex" justify="center" direc="column">
                <Container width="100%" justify="start" pad="50px">
                    <TypeText tag="h4">{title}</TypeText>
                </Container>
                <Container disp="fkex" overflow="scroll" pad="20px 0px">
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </Container>
            </Container>
        </>
    )
}

export default ItemList;