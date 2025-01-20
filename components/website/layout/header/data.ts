type ProductCategory<T = string> = {
    label: string;
    summary: string;
};

type Products<T = string> = {
    [category: string]: ProductCategory<T>[];
};

export const products: Products = {
    products: [
        {
            label: 'Map',
            summary: 'Global financial heatmap.',
        },
    ],
};
