import Footer from './Footer';
import Header from './Header';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { COMPANY_NAME } from '../constants';

function Layout({ children }: any) {
    const router = useRouter();
    if (router.pathname != '/map') {
        return (
            <div className='bg-secondary text-primary dark:bg-secondary-dark dark:text-primary-dark'>
                <Head>
                    <title>{COMPANY_NAME} - Global Financial Markets</title>
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
                    <title>{COMPANY_NAME} - Global View</title>
                </Head>
                {children}
            </main>
        );
}

export default Layout;
