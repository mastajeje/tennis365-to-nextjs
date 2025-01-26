export const dummyProducts = [
  {
    id: 1,
    product_name: 'Product 1',
    price: 100,
    rating: '3',
    description: 'This is product 2',
    imgURL: '/images/1.jpg',
  },
  {
    id: 2,
    product_name: 'Product 2',
    price: 200,
    rating: '4',
    description: 'This is product 2',
    imgURL: '/images/2.jpg',
  },
  {
    id: 3,
    product_name: 'Product 3',
    price: 300,
    rating: '5',
    description: 'This is product 3',
    imgURL: '/images/4.jpg',
  },
];

export const dummyUser = {
  name: '김철수',
  address1: '서울시 강남구',
  address2: '역삼동',
  email: 'ironWater@gmail.com',
};

export const dummyOrders = [
  {
    merchant_uid: '20210809-000001',
    status: 0,
    orderedAt: '2021-08-09',
    pay_method: 'card',
    grandTotal: 50000,
  },
  {
    merchant_uid: '20210809-000002',
    status: 1,
    orderedAt: '2021-08-10',
    pay_method: 'samsung',
    grandTotal: 100000,
  },
  {
    merchant_uid: '20210809-000003',
    status: 2,
    orderedAt: '2021-08-11',
    pay_method: 'kakaopay',
    grandTotal: 150000,
  },
  {
    merchant_uid: '20210809-000004',
    status: 3,
    orderedAt: '2021-08-12',
    pay_method: 'card',
    grandTotal: 200000,
  },
  {
    merchant_uid: '20210809-000005',
    status: 4,
    orderedAt: '2021-08-13',
    pay_method: 'samsung',
    grandTotal: 250000,
  },
  {
    merchant_uid: '20210809-000006',
    status: 5,
    orderedAt: '2021-08-14',
    pay_method: 'kakaopay',
    grandTotal: 300000,
  },
];

export const dummyOrderItems = [
  {
    id: 1,
    product_name: 'product1',
    price: 50000,
    quantity: 1,
  },
  ,
  {
    id: 2,
    product_name: 'product2',
    price: 100000,
    quantity: 1,
  },
  ,
  {
    id: 3,
    product_name: 'product3',
    price: 150000,
    quantity: 1,
  },
  ,
  {
    id: 4,
    product_name: 'product4',
    price: 200000,
    quantity: 1,
  },
  ,
  {
    id: 5,
    product_name: 'product5',
    price: 250000,
    quantity: 1,
  },
  ,
  {
    id: 6,
    product_name: 'product6',
    price: 300000,
    quantity: 1,
  },
];

export const dummyOrderInfo = {
    grandTotal: 10000,

}

export const dummyTransactionInfo = {
    user_id: 1,
    order_id: 1,
}

export const dummyCartItems = [
    {
      id: 1,
      product_name: '테니스라켓',
      brand: '1',
      price: 50000,
      quantity: 1,
      stock: 10,
      imgURL: '/images/1.jpg',
    },
    {
      id: 2,
      product_name: '테니스라켓',
      brand: '2',
      price: 100000,
      quantity: 1,
      stock: 10,
      imgURL: '/images/2.jpg',
    },
    {
      id: 3,
      product_name: '테니스라켓',
      brand: '3',
      price: 150000,
      quantity: 1,
      stock: 10,
      imgURL: '/images/4.jpg',
    },
    {
      id: 4,
      product_name: '테니스라켓',
      brand: '4',
      price: 200000,
      quantity: 1,
      stock: 10,
      imgURL: '/images/2.jpg',
    },
  ];