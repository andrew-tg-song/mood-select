/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Product, ProductCategory, ProductTag } from 'entity';

export const tagsDataset: ProductTag[] = [
  {
    id: 1,
    name: 'NEW',
  },
  {
    id: 2,
    name: 'BEST',
  },
  {
    id: 3,
    name: '오늘 출발 제품 🚛',
  },
  {
    id: 4,
    name: 'SALE',
  },
  {
    id: 5,
    name: 'EVENT 🥳',
  },
  {
    id: 6,
    name: 'MAIN BEST',
  },
  {
    id: 7,
    name: 'MAIN NEW',
  },
  {
    id: 8,
    name: 'MAIN TODAY DELIVERY',
  },
];

export const categoriesDataset: ProductCategory[] = [
  // 아우터
  {
    id: 0,
    categoryLevel: 1,
    name: '아우터',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '트위드',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '패딩',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '자켓',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '가디건',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '니트',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '조끼',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '점퍼',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '가죽&모피',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '셋업',
    childrenCategories: [],
  },
  // 원피스
  {
    id: 0,
    categoryLevel: 1,
    name: '원피스',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '하객룩',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '미니',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '미디',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '롱',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '패턴',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '니트',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: 'H라인',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: 'A라인',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '서스펜더',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '투피스',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '머메이드',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '플레어',
    childrenCategories: [],
  },
  // 블라우스&셔츠
  {
    id: 0,
    categoryLevel: 1,
    name: '블라우스&셔츠',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '무지',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '셔츠',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '민소매',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '패턴',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '리본&타이',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '오프숄더',
    childrenCategories: [],
  },
  {
    id: 0,
    categoryLevel: 2,
    name: '레이스',
    childrenCategories: [],
  },
];
categoriesDataset.forEach((category, i) => {
  category.id = i;
});

// 아우터
categoriesDataset[0].childrenCategories = categoriesDataset.slice(1, 10);
for (let i = 1; i < 10; ++i) {
  categoriesDataset[i].parentCategory = categoriesDataset[0];
}

// 원피스
categoriesDataset[10].childrenCategories = categoriesDataset.slice(11, 23);
for (let i = 11; i < 23; ++i) {
  categoriesDataset[i].parentCategory = categoriesDataset[10];
}

// 블라우스&셔츠
categoriesDataset[23].childrenCategories = categoriesDataset.slice(24, 31);
for (let i = 24; i < 31; ++i) {
  categoriesDataset[i].parentCategory = categoriesDataset[23];
}

export const productsDataset: Product[] = [
  {
    id: 1687267354794,
    title: '펠로킹 체크 시스루 루즈핏 셔츠',
    description: '하늘하늘한 소재와 베이직한 디자인으로 활용도가 높은 셔츠 소개드려요:)',
    price: 26800,
    salePrice: 24120,
    createdAt: new Date(),
    updatedAt: new Date(),
    thumbnails: [
      {
        id: 1687267359804,
        url: '/img/today_delivery_product_3.png',
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 1687267441137,
        url: '/img/product_1-2.png',
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 1687267458271,
        url: '/img/product_1-3.png',
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 1687267491258,
        url: '/img/product_1-4.png',
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 1687267501804,
        url: '/img/product_1-5.png',
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    categories: [
      categoriesDataset.find((category) => category.name === '블라우스&셔츠')!,
      categoriesDataset.find((category) => category.name === '셔츠')!,
    ],
    tags: [
      tagsDataset.find((tag) => tag.name === 'BEST')!,
      tagsDataset.find((tag) => tag.name === '오늘 출발 제품 🚛')!,
      tagsDataset.find((tag) => tag.name === 'MAIN TODAY DELIVERY')!,
    ],
    options: [
      {
        id: 1687268176066,
        name: '색상',
        createdAt: new Date(),
        updatedAt: new Date(),
        items: [
          {
            id: 1687268260145,
            name: 'gray',
            imageUrl: '/img/color-gray.png',
            additionalPrice: 0,
            childrenOptions: [],
          },
          {
            id: 1687268662212,
            name: 'lavender',
            imageUrl: '/img/color-lavender.png',
            additionalPrice: 0,
            childrenOptions: [],
          },
          {
            id: 1687268654868,
            name: 'white',
            imageUrl: '/img/color-white.png',
            additionalPrice: 0,
            childrenOptions: [],
          },
          {
            id: 1687268650701,
            name: 'black',
            imageUrl: '/img/color-black.png',
            additionalPrice: 0,
            childrenOptions: [],
          },
          {
            id: 1687268646876,
            name: 'yellowgreen',
            imageUrl: '/img/color-yellowgreen.png',
            additionalPrice: 0,
            childrenOptions: [],
          },
        ],
      },
      {
        id: 1687268687545,
        name: '사이즈',
        createdAt: new Date(),
        updatedAt: new Date(),
        items: [
          {
            id: 1687268701243,
            name: '44~88',
            additionalPrice: 0,
            childrenOptions: [],
          },
          {
            id: 1687268728149,
            name: '99~120(+1,000won)',
            additionalPrice: 1000,
            childrenOptions: [],
          },
        ],
      },
    ],
    similarProducts: [],
  },
];
