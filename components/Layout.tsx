import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from './website/layout/header/header';
import Footer from './website/layout/footer/footer';

function Layout({ children }: any) {
    const router = useRouter();
    if (router.pathname != '/dashboard') {
        return (
            <div className='min-h-screen bg-secondary text-primary dark:bg-secondary-dark dark:text-primary-dark'>
                <Head>
                    <title>Mapfeed - Global Financial Markets</title>
                </Head>
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        );
    } else
        return (
            <main>
                <Head>
                    <title>Mapfeed - Global View</title>
                </Head>
                {children}
            </main>
        );
}

Layout.displayName = 'Layout';
export default Layout;
