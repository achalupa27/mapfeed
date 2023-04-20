import Link from 'next/link';
import DarkModeButtonIcon from './DarkModeButtonIcon';
import HeaderMenu from './HeaderMenu';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';

function Header() {
    const user = true;
    const [headerMenu, setHeaderMenu] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <header className='flex w-full items-center p-4 px-6'>
            <div className='basis-1/3'>
                <Link href='/'>
                    <Image src={theme === 'light' ? '/logo.png' : '/logo-dark.png'} alt='mapfeed logo' width={48} height={48} />
                </Link>
            </div>
            <div className='hidden flex-1 items-center justify-center space-x-6 lg:flex'>
                <Link href='/features'>Features</Link>
                <Link href='/pricing'>Pricing</Link>
            </div>
            <div className='flex basis-1/3 lg:hidden'></div>
            <div className='flex basis-1/3 justify-end lg:hidden'>
                <button className='cursor-pointer' onClick={() => setHeaderMenu(true)}>
                    <i className='fi fi-rr-menu-burger'></i>
                </button>

                {headerMenu && <HeaderMenu />}
            </div>
            {headerMenu && <div className='absolute top-0 left-0 z-40 h-screen w-screen bg-transparent' onClick={() => setHeaderMenu(false)}></div>}
            <div className='hidden basis-1/3 items-center justify-end space-x-2 lg:flex'>
                <div className='mr-2 pt-1'>
                    <DarkModeButtonIcon />
                </div>
                <Link href={`${user ? '/map' : '/login'}`}>
                    <div className='button-secondary py-1'>
                        {user ? <i className='fi fi-rr-arrow-up-right -ml-[2px] mt-[2px] pr-1 text-xs'></i> : null}
                        {user ? 'Map' : 'Sign In'}
                    </div>
                </Link>
            </div>
        </header>
    );
}

export default Header;
