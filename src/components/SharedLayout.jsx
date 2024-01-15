import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer'
import { Suspense } from 'react';

export const SharedLayout = () => {
    console.log('kek')
    return (
        <>
            <Header />
            <main>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    );
};