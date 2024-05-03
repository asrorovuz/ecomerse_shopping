

interface IProduct {
    id: number;
    img: string;
    rating: number;
    price: number;
    extraPrice: string;
    name: string;
    extraImg: string[];
    size: string[];
    color: string[];
    comment: string;
}

interface ICustomerProduct {
    id: number;
    productId: number;
    count: number | undefined;
    name: string | undefined;
    color: string | undefined;
    price: number | undefined;
    extraPrice: string | undefined;
    img: string | undefined;
    rating: number | undefined;
    size: string | undefined;
}

export type { ICustomerProduct, IProduct };