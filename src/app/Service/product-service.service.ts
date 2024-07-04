import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

  }

  getProductsData() {
    return [
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            price: 65,
            category: 'Accessories',
            quantity: 24,
        },
        {
            id: '1001',
            code: 'nvklal433',
            name: 'Black Watch',
            price: 72,
            category: 'Accessories',
            quantity: 61,
        },
        {
            id: '1002',
            code: 'zz21cz3c1',
            name: 'Blue Band',
            price: 79,
            category: 'Fitness',
            quantity: 2,
        },
        {
            id: '1003',
            code: '244wgerg2',
            name: 'Blue T-Shirt',
            price: 29,
            category: 'Clothing',
            quantity: 25,
        },
        {
            id: '1004',
            code: 'h456wer53',
            name: 'Bracelet',
            price: 15,
            category: 'Accessories',
            quantity: 73,
        },
        {
            id: '1005',
            code: 'av2231fwg',
            name: 'Brown Purse',
            price: 120,
            category: 'Accessories',
            quantity: 0,
        },
        {
            id: '1006',
            code: 'bib36pfvm',
            name: 'Chakra Bracelet',
            price: 32,
            category: 'Accessories',
            quantity: 5,
        },
        {
            id: '1007',
            code: 'mbvjkgip5',
            name: 'Galaxy Earrings',
            price: 34,
            category: 'Accessories',
            quantity: 23,
        },
        {
            id: '1008',
            code: 'vbb124btr',
            name: 'Game Controller',
            price: 99,
            category: 'Electronics',
            quantity: 2,
        },
        {
            id: '1009',
            code: 'cm230f032',
            name: 'Gaming Set',
            price: 299,
            category: 'Electronics',
            quantity: 63,
        },
        {
            id: '1010',
            code: 'plb34234v',
            name: 'Gold Phone Case',
            price: 24,
            category: 'Accessories',
            quantity: 0,
        },
        {
            id: '1011',
            code: '4920nnc2d',
            name: 'Green Earbuds',
            price: 89,
            category: 'Electronics',
            quantity: 23,
        },
        {
            id: '1012',
            code: '250vm23cc',
            name: 'Green T-Shirt',
            price: 49,
            category: 'Clothing',
            quantity: 74,
        },
        {
            id: '1013',
            code: 'fldsmn31b',
            name: 'Grey T-Shirt',
            price: 48,
            category: 'Clothing',
            quantity: 0,
        },
        {
            id: '1014',
            code: 'waas1x2as',
            name: 'Headphones',
            price: 175,
            category: 'Electronics',
            quantity: 8,
        },
        {
            id: '1015',
            code: 'vb34btbg5',
            name: 'Light Green T-Shirt',
            price: 49,
            category: 'Clothing',
            quantity: 34,
        },
        {
            id: '1016',
            code: 'k8l6j58jl',
            name: 'Lime Band',
            price: 79,
            category: 'Fitness',
            quantity: 12,
        },
        {
            id: '1017',
            code: 'v435nn85n',
            name: 'Mini Speakers',
            price: 85,
            category: 'Clothing',
            quantity: 42,
        },
        {
            id: '1018',
            code: '09zx9c0zc',
            name: 'Painted Phone Case',
            price: 56,
            category: 'Accessories',
            quantity: 41,
        },
        {
            id: '1019',
            code: 'mnb5mb2m5',
            name: 'Pink Band',
            price: 79,
            category: 'Fitness',
            quantity: 63,
        },
        {
            id: '1020',
            code: 'r23fwf2w3',
            name: 'Pink Purse',
            price: 110,
            category: 'Accessories',
            quantity: 0,
        },
        {
            id: '1021',
            code: 'pxpzczo23',
            name: 'Purple Band',
            price: 79,
            category: 'Fitness',
            quantity: 6,
        },
        {
            id: '1022',
            code: '2c42cb5cb',
            name: 'Purple Gemstone Necklace',
            price: 45,
            category: 'Accessories',
            quantity: 62,
        },
        {
            id: '1023',
            code: '5k43kkk23',
            name: 'Purple T-Shirt',
            price: 49,
            category: 'Clothing',
            quantity: 2,
        },
        {
            id: '1024',
            code: 'lm2tny2k4',
            name: 'Shoes',
            price: 64,
            category: 'Clothing',
            quantity: 0,
        },
        {
            id: '1025',
            code: 'nbm5mv45n',
            name: 'Sneakers',
            price: 78,
            category: 'Clothing',
            quantity: 52,
        },
        {
            id: '1026',
            code: 'zx23zc42c',
            name: 'Teal T-Shirt',
            price: 49,
            category: 'Clothing',
            quantity: 3,
        },
        {
            id: '1027',
            code: 'acvx872gc',
            name: 'Yellow Earbuds',
            price: 89,
            category: 'Electronics',
            quantity: 35,
        },
        {
            id: '1028',
            code: 'tx125ck42',
            name: 'Yoga Mat',
            price: 20,
            category: 'Fitness',
            quantity: 15,
        },
        {
            id: '1029',
            code: 'gwuby345v',
            name: 'Yoga Set',
            price: 20,
            category: 'Fitness',
            quantity: 25,
        }
    ];
}


getProducts() {
    return Promise.resolve(this.getProductsData());
}


}
