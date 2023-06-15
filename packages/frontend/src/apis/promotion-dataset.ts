import { Promotion, PromotionType } from './../../../entity/src/promotion/promotion.entity';

export const bannersDataset: Record<string, Promotion> = {
  mainBanners: {
    id: 1686743683341,
    type: PromotionType.BANNER,
    title: 'mainBanners',
    items: [
      {
        id: 1686743729919,
        order: 1,
        imageUrl: '/img/main_slider_img.png',
      },
      {
        id: 1686743889571,
        order: 2,
        imageUrl: '/img/main_slider_img_2.png',
      },
      {
        id: 1686743893629,
        order: 3,
        imageUrl: '/img/main_slider_img_3.gif',
      },
    ],
  },
  categoryBanners: {
    id: 1686745086899,
    type: PromotionType.BANNER,
    title: 'categoryBanners',
    items: [
      {
        id: 1686745098615,
        order: 1,
        imageUrl: './img/category_banner_1.png',
        title: 'PANTS',
        description: '언제 어디서든 편안하게',
      },
      {
        id: 1686745104181,
        order: 2,
        imageUrl: './img/category_banner_2.png',
        title: 'ONE PIECE',
        description: '어디서든 나를 돋보이게',
      },
      {
        id: 1686745109428,
        order: 3,
        imageUrl: './img/category_banner_3.png',
        title: 'CARDIGAN',
        description: '어디서든 산뜻하게',
      },
      {
        id: 1686745116173,
        order: 4,
        imageUrl: './img/category_banner_4.png',
        title: 'T-SHIRT',
        description: '꾸민듯 안 꾸민듯 자연스럽게',
      },
    ],
  },
  eventBanners1: {
    id: 1686747596166,
    type: PromotionType.BANNER,
    title: 'eventBanners1',
    items: [
      {
        id: 1686747601816,
        order: 1,
        imageUrl: '/img/event_banner.png',
      },
    ],
  },
  eventBanners2: {
    id: 1686747628463,
    type: PromotionType.BANNER,
    title: 'eventBanners2',
    items: [
      {
        id: 1686747632371,
        order: 1,
        imageUrl: '/img/event_banner.png',
      },
    ],
  },
};
