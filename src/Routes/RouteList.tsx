import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { Notfound } from '../pages/notFound';

export const RouteList = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Notfound />}/>
        </Routes>
    );
};

export default RouteList