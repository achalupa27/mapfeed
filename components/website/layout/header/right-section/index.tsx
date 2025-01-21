'use client';

import { Button } from '@/components/ui/button';
import { Moon, Sun, User } from 'lucide-react';
import MobileMenu from './mobile-menu';
// import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const RightSection = () => {
    // const { data: session } = useSession();
    const session = true;

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <div className='mr-4 flex flex-1 justify-end lg:space-x-2'>
            {currentTheme === 'dark' ? (
                <Button size='icon-lg' variant='ghost' className='flex cursor-pointer items-center' onClick={() => setTheme('light')}>
                    <Sun />
                </Button>
            ) : (
                <Button size='icon-lg' variant='ghost' className='flex cursor-pointer items-center' onClick={() => setTheme('dark')}>
                    <Moon />
                </Button>
            )}
            {session ? (
                <Link href='/profile'>
                    <Button variant='secondary' size='icon-lg' className='hidden lg:flex'>
                        <User />
                    </Button>
                </Link>
            ) : (
                <Button variant='secondary' size='lg' onClick={undefined} className='hidden lg:flex'>
                    Log in
                </Button>
            )}
            <Link href={`${session ? '/dashboard' : '/register'}`}>
                <Button size='lg' className='hidden lg:flex'>
                    {session ? 'Map' : 'Sign Up'}
                </Button>
            </Link>
            <MobileMenu />
        </div>
    );
};

export default RightSection;
