export class Login {
    email: string;
    otp: string;
    mobile: string;
    password: string;
    user_type: string;
}


export class Product {
    title: string;
    description: string;
    metaDescription: string;

    priceType: string;

    shipping: string;

    sellerId: string;
    stock: string;
    seoKeywords: string;

    categoryId: string;
    subCategoryId: string;
    secSubCategoryId: string;

    measurementUnitQtn: string;
    measurementUnit: string;
    measurementBoxQtn: string;
    measurementBoxUnit: string;

    brandName: string;
    moq: string;
    productCode: string;

    price: string;
    Multprice: Array<any>;
    priceArray: Array<any>;
    specification: Array<any>;
    warranty: string;
    returnPolicy: string;
    warrantyDetail: string;
    additionalDetails: Array<any>;
    metaData: Array<any>;
    forHomeDemo: string;

    gallaryImages: Array<any>;
    featuredImage: string;
    featuredImageThumb: string;


    visible: boolean;
    featured: boolean;
    showOnHome: boolean;
}
export class ProductCategories {
    title: string;
    description: string;
    image: string;
    thumb: string;
    commission: string;
    visible: boolean;
    featured: boolean;
    showOnHome: boolean;
}
export class ProductSubCategories {
    productCategory: string;
    title: string;
    description: string;
    image: string;
    thumb: string;
    visible: boolean;
    featured: boolean;
    showOnHome: boolean;
}
export class ProductSecondSubCategories {
    subcategoryId: string;
    title: string;
    description: string;
    image: string;
    thumb: string;
    visible: boolean;
    featured: boolean;
}
export class Offers {
    vendorId: string;
    title: string;
    description: string;
    image: string;
    thumbImage: string;

    offerType: string; // 1 = product, 2 = store, 

    used: number;
    maxUsed: number;

    discount: number;
    discountPercentage: number;

    startDate: string;
    lastDate: string;
}

export class Order {
    productId: string;
    customerId: string;
    shippingAddress: string;
    billingAddress: string;
    discount: discountObj;
    notes: string;
    shipping: shippingObj;
    tags: Array<any>;
    emailInvoice:boolean;
    payment:string; //paid , pending, credit card
    paymentType:string; //cash, debit card, credit card, bank transfer
}

export class shippingObj {
    type: string; // free or custom
    customName: string;
    customPrice: string;
}
export class discountObj {
    type: string; // percentage or Rs
    reason: string;
}
