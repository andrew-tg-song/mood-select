import { ProductCategory, ProductTag } from 'entity';

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
];

export const categoriesDataset: ProductCategory[] = [
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
];
categoriesDataset.forEach((category, i) => {
  category.id = i;
});

// 아우터
categoriesDataset[0].childrenCategories = categoriesDataset.slice(1, 10);
for (let i = 1; i < 10; ++i) {
  categoriesDataset[i].parentCategory = categoriesDataset[0];
}
