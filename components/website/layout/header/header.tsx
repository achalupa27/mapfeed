'use client';

import LeftSection from './left-section';
import MiddleSection from './middle-section';
import RightSection from './right-section';

const Header = () => {
    return (
        <header className='relative mx-auto flex h-24 max-w-screen-2xl items-center justify-between px-8 py-6'>
            <LeftSection />
            <MiddleSection />
            <RightSection />
        </header>
    );
};

export default Header;
