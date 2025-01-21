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
                <Button asChild size='lg' variant='secondary'>
                    <Link href='/features'>View Features</Link>
                </Button>
                {session ? (
                    <Button size='lg' asChild>
                        <Link href='/dashboard'>
                            <i className='fi fi-rr-earth-americas ' />
                            <span>Map</span>
                        </Link>
                    </Button>
                ) : (
                    <Button size='lg' asChild>
                        <Link href='/register'>
                            <span>Start Now</span>
                        </Link>
                    </Button>
                )}
            </div>
            <div className='aspect-video w-[90%] rounded-2xl border-2 border-slate-50 bg-slate-100 shadow dark:border-slate-800 dark:bg-slate-900 lg:mt-8'></div>
        </section>
    );
};

export default HeroSection;
