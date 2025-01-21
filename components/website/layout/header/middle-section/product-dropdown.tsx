'use client';

import DropdownItem from './dropdown-item';
import { products } from '../data';
import { Separator } from '@/components/ui/separator';

type Props = {
    category: string;
};

const ProductDropdown = ({ category }: Props) => {
    const items = products[category];

    if (!items) return null;

    return (
        <div className='dark:bg-slate-950 z-50 flex h-fit flex-col items-center gap-3 rounded border border-slate-200 bg-slate-50 p-3 shadow dark:border-slate-700 xl:h-52 xl:flex-row'>
            {items.map((item, index) => (
                <>
                    <DropdownItem label={item.label} summary={item.summary} />
                    {index < items.length - 1 && (
                        <>
                            <Separator className='hidden xl:block' orientation='vertical' />
                            <Separator className='xl:hidden' orientation='horizontal' />
                        </>
                    )}
                </>
            ))}
        </div>
    );
};

export default ProductDropdown;
