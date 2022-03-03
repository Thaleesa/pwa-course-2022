import App from './App.js';
import Profile from './Profile.js';
import ProfileApp from './ProfileApp.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/profileapp" element={<ProfileApp/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;