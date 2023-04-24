import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
import freeFeatures from '../data/features-free.json';
import basicFeatures from '../data/features-basic.json';
import professionalFeatures from '../data/features-professional.json';
import Link from 'next/link';

function Pricing() {
    //monthly basic - price_1MV9BxFcFQVvj4RKvh3caJfZ
    //monthly professional - price_1MV9BxFcFQVvj4RKAmWkAPE3

    const user = false;

    async function purchaseSubscription(type: string, term: string) {
        var price;
        if (type === 'Basic' && term === 'Monthly') {
            price = 'price_1MV9BxFcFQVvj4RKvh3caJfZ';
        } else if (type === 'Basic' && term === 'Yearly') {
            price = 'price_1MZMbnFcFQVvj4RKgTSS8bQU';
        } else if (type === 'Professional' && term === 'Monthly') {
            price = 'price_1MV9BxFcFQVvj4RKAmWkAPE3';
        } else if (type === 'Professional' && term === 'Yearly') {
            price = 'price_1MZMacFcFQVvj4RKO4ehFLva';
        }

        const stripe = await loadStripe('pk_test_51MV97ZFcFQVvj4RK5IxZX1DkxYgiJXx5uoB18RP50uRxWXd9At9xpIxcFbjsGeEDnqpLsJGRGmoMkKBExTjCNhG2009xsqUoI2');
        const { error }: any = await stripe?.redirectToCheckout({
            lineItems: [
                {
                    price,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            successUrl: 'https://www.mapfeed.io/app',
            cancelUrl: 'https://www.mapfeed.io/features',
        });

        if (error) {
            console.log(error);
        }
    }

    var selectedTerm: string = 'Yearly';

    const [term, setTerm] = useState('Yearly');

    const handleTerm = (term: string) => {
        setTerm(term);
        selectedTerm = term;
    };

    return (
        <div className='flex min-h-screen flex-col items-center gap-12 py-8'>
            <h1>Take the next step.</h1>
            <div className=' flex h-10 w-80 rounded bg-primary p-[2px] text-secondary dark:bg-primary-dark dark:text-secondary-dark'>
                <div className={`flex w-1/2 items-center justify-center space-x-2 rounded text-sm font-semibold transition duration-200 ${term == 'Monthly' ? ' bg-secondary text-primary dark:bg-secondary-dark dark:text-primary-dark' : ''}`} onClick={() => handleTerm('Monthly')}>
                    Monthly
                </div>
                <div className={`flex w-1/2 items-center justify-center space-x-2 rounded text-sm font-semibold transition duration-200 ${term == 'Yearly' ? ' bg-secondary text-primary dark:bg-secondary-dark dark:text-primary-dark' : ''}`} id='optionYearly' onClick={() => handleTerm('Yearly')}>
                    <p>Yearly</p>
                    <div className='text-xs text-[#39c269]'>
                        <strong>SAVE 20%</strong>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap justify-center gap-8'>
                <div className='flex h-[32rem] w-[18rem] flex-col rounded border border-primary p-1 dark:border-secondary'>
                    <div className='px-2 py-1'>
                        <div className='text-2xl'>Free</div>
                        <div className='text-sm'>No Credit Card required.</div>
                    </div>
                    <div className='grow'>
                        {freeFeatures.map((feature, i) => (
                            <div key={i} className='flex items-center gap-3 px-2 text-sm leading-8'>
                                <i className='fi fi-rr-check'></i> <div>{feature.feature}</div>
                            </div>
                        ))}
                    </div>
                    {user ? (
                        <Link href='/app'>
                            <button className={`button-secondary w-full`}>Go to Map</button>
                        </Link>
                    ) : (
                        <Link href='/authenticate'>
                            <button className={`button-secondary w-full`}>Sign Up</button>
                        </Link>
                    )}
                </div>

                <div className='flex h-[32rem] w-[18rem] flex-col rounded bg-primary p-1 text-secondary dark:bg-primary-dark dark:text-secondary-dark'>
                    <div className='px-2 py-1'>
                        <div className='text-2xl'>Basic</div>
                        <div className='text-sm'>{term === 'Monthly' ? '$29.95' : '$23.96'} USD per month</div>
                    </div>
                    <div className='grow'>
                        {basicFeatures.map((feature, i) => (
                            <div key={i} className='flex items-center gap-3 px-2 text-sm leading-8'>
                                <i className='fi fi-rr-check'></i> <div>{feature.feature}</div>
                            </div>
                        ))}
                    </div>
                    {user ? (
                        <button className='button-primary-alt hover:translate-y-[6px]' onClick={() => purchaseSubscription('Basic', selectedTerm)}>
                            Start Trial
                        </button>
                    ) : (
                        <Link href='/register'>
                            <button className='button-primary-alt w-full hover:translate-y-[6px]'>Sign Up</button>
                        </Link>
                    )}
                </div>

                <div className='flex h-[32rem] w-[18rem] flex-col rounded bg-primary p-1 text-secondary dark:bg-primary-dark dark:text-secondary-dark'>
                    <div className='px-2 py-1'>
                        <div className='text-2xl'>
                            <strong>Professional</strong>
                        </div>
                        <div className='text-sm'>{term === 'Monthly' ? '$39.95' : '$31.96'} USD per month</div>
                    </div>
                    <div className='grow'>
                        {professionalFeatures.map((feature, i) => (
                            <div key={i} className='flex items-center gap-3 px-2 text-sm leading-8'>
                                <i className='fi fi-rr-check'></i> <div>{feature.feature}</div>
                            </div>
                        ))}
                    </div>
                    {user ? (
                        <button className='button-primary-alt hover:translate-y-[6px]' onClick={() => purchaseSubscription('Professional', selectedTerm)}>
                            Start Trial
                        </button>
                    ) : (
                        <Link href='/register'>
                            <button className='button-primary-alt w-full hover:translate-y-[6px]'>Sign Up</button>
                        </Link>
                    )}
                </div>
            </div>
            <div className='flex flex-col items-center justify-center px-6'>
                <p className='text-xl'>New features are always being added!</p>
                <p className='mt-1 text-center text-xs'>That means prices will go up! Subscribe to Professional Yearly to lock in the current price for your subscription year.</p>
            </div>
        </div>
    );
}

export default Pricing;
