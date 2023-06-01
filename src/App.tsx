import { ThemeProvider } from "styled-components";
import usePeristedState from "./utils/useperisted";
import ThemeContainer from "./view/components/contents/theme";
import { Container } from "./view/components/styles/container/style";
import RoutesPage from "./view/routes";
import light from './view/styles/themes/light';
import dark from './view/styles/themes/dark';

const App = () => {

  const [theme, setTheme] = usePeristedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container width='100%' disp='flex' justify='end'>
        <ThemeContainer toggleTheme={toggleTheme} />
      </Container>
      <RoutesPage />
    </ThemeProvider>
  );
}

export default App;