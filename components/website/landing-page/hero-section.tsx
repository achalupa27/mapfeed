import Link from 'next/link';
import { Button } from '../../ui/button';

const HeroSection = () => {
    const session = true;

    return (
        <section className='flex flex-col items-center px-8'>
            <div className='mt-8 flex flex-col items-center space-y-3 text-center md:mt-16'>
                <h1>Global Financial Markets</h1>
                <h3>All in one place.</h3>
            </div>
            <div className='my-10 flex space-x-3'>
                <Button asChild variant='secondary'>
                    <Link href='/features' className='button-secondary'>
                        View Features
                    </Link>
                </Button>
                {session ? (
                    <Button asChild>
                        <Link href='/app'>
                            <i className='fi fi-rr-americas' />
                            <span>Open Dashboard</span>
                        </Link>
                    </Button>
                ) : (
                    <Button asChild>
                        <Link href='/register'>
                            <span>Start Now</span>
                        </Link>
                    </Button>
                )}
            </div>
            <div className='aspect-video w-full rounded-2xl border-2 border-stone-50 bg-stone-100 shadow dark:border-stone-900 dark:bg-stone-900 lg:mt-8'></div>
            <div className='my-16 flex flex-col items-center'>
                <span className=''>★★★★★</span>
                <div className='text-lg'>&quot;The best app to reach your goals in 2025.&quot;</div>
                {/* <div className='mt-1 text-sm'>-Unknown</div> */}
            </div>
        </section>
    );
};

export default HeroSection;
