import { useContext } from 'react';
import Switch from 'react-switch';
import { shade } from 'polished';
import { ThemeContext } from 'styled-components';
import { FaMoon } from 'react-icons/fa';
import { Container, ContainerHeader } from '../../styles/container/style';

interface props{
    toggleTheme: VoidFunction;
}
    

const ThemeContainer = ({ toggleTheme }: props) => {
    const { colors, title } = useContext(ThemeContext);
    return (
        <>
       
            <ContainerHeader data-aos="fade-left" data-aos-delay="1200" data-aos-duration='1500'>
                <Container pad='0px 10px'>
                    <FaMoon />
                </Container>
                <Switch
                    onChange={toggleTheme}
                    checked={title == 'light'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={30}
                    handleDiameter={20}
                    offColor={shade(0.15, colors.background)}
                    onColor={shade(0, colors.background)}
                    onHandleColor={shade(0, colors.text)}
                    offHandleColor={shade(0, colors.text)}
                />
            </ContainerHeader>


        </>
    )
};

export default ThemeContainer;