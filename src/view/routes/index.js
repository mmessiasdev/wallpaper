import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import History from '../../controller/history';
import Style from '../../style';

import GlobalStyle from '../styles/global';
import HomePage from '../screens/homepage';
import ContentWallpaper from '../screens/content';


function RoutesPage() {
    return (
        <>
            <Style />
            <GlobalStyle />
            <Router history={History}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/wallpaper/' element={<HomePage />} />
                    <Route path='/wallpaper/:id' element={<ContentWallpaper />} />
                </Routes>
            </Router>
        </>
    )
}

export default RoutesPage;