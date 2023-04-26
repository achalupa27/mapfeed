import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';

function Banner() {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const currentTheme = theme === 'system' ? systemTheme : theme;
    const user = true;
    return (
        <div className='flex min-h-screen flex-col-reverse items-center justify-around px-12 pb-36 lg:flex-row lg:pb-12 2xl:px-0'>
            <div className='h-1/2 md:ml-16 md:mt-16 md:h-auto'>
                <div className='w-[500px] text-4xl font-semibold'>Global Financial Markets</div>
                <div className='text-2xl'>All in one place.</div>
                <div className='my-8 text-lg'></div>
                <div className='flex flex-col space-y-2 lg:flex-row lg:space-x-3 lg:space-y-0'>
                    {user ? (
                        <Link href='/map' className='button-primary hover:scale-105 active:scale-90 lg:w-1/2'>
                            <i className='fi fi-rr-arrow-up-right -ml-[3px] mt-[2px] pr-2'></i>
                            <span>Open Map</span>
                        </Link>
                    ) : (
                        <Link href='/register' className='button-primary space-x-2 font-semibold lg:w-1/2'>
                            <span>Get Started</span>
                            <i className='fi fi-rr-arrow-right'></i>
                        </Link>
                    )}
                    <Link href='/features' className='button-secondary active:scale-90 lg:w-1/2'>
                        View Features
                    </Link>
                </div>
            </div>
            <div className='flex basis-1/2 items-center justify-center lg:pb-32'>
                <div className='relative h-[32rem] w-[32rem] 2xl:h-[52rem] 2xl:w-[60rem]'>
                    <Image fill alt='banner' className='lg:pb-24' object-fit='contain' src={theme === 'light' ? '/banner.svg' : '/banner-dark.svg'} />
                </div>
            </div>
        </div>
    );
}

Banner.displayName = 'Banner';
export default Banner;
