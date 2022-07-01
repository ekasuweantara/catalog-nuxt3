export interface Stock {
  stockLevel: number;
}

export interface Price {
  currencyIso: string;
  value: number;
  priceType: string;
  formattedValue: string;
  type: string;
}

export interface Image {
  url: string;
}

export interface WhitePrice {
  currencyIso: string;
  value: number;
  priceType: string;
  formattedValue: string;
  type: string;
}

export interface PromotionMarker {
  code: string;
  text: string;
  legalText: string;
}

export interface Image2 {
  url: string;
}

export interface WhitePrice2 {
  currencyIso: string;
  value: number;
  priceType: string;
  formattedValue: string;
  type: string;
}

export interface LogoPicture {
  url: string;
}

export interface NormalPicture {
  url: string;
}

export interface Color {
  code: string;
  text: string;
  filterName: string;
  hybrisCode: string;
}

export interface Article {
  code: string;
  name: string;
  images: Image2[];
  pk: string;
  sellingAttributes: string[];
  whitePrice: WhitePrice2;
  logoPicture: LogoPicture[];
  normalPicture: NormalPicture[];
  visible: boolean;
  numbersOfPieces: number;
  ticket: string;
  dummy: boolean;
  ecoTaxValue: number;
  redirectToPdp: boolean;
  comingSoon: boolean;
  color: Color;
  rgbColor: string;
  genArticle: string;
}

export interface Image3 {
  url: string;
}

export interface WhitePrice3 {
  currencyIso: string;
  value: number;
  priceType: string;
  formattedValue: string;
  type: string;
}

export interface LogoPicture2 {
  url: string;
}

export interface NormalPicture2 {
  url: string;
}

export interface Color2 {
  code: string;
  text: string;
  filterName: string;
  hybrisCode: string;
}

export interface DefaultArticle {
  code: string;
  name: string;
  images: Image3[];
  pk: string;
  sellingAttributes: string[];
  whitePrice: WhitePrice3;
  logoPicture: LogoPicture2[];
  normalPicture: NormalPicture2[];
  visible: boolean;
  numbersOfPieces: number;
  ticket: string;
  dummy: boolean;
  ecoTaxValue: number;
  redirectToPdp: boolean;
  comingSoon: boolean;
  color: Color2;
  rgbColor: string;
  genArticle: string;
}

export interface VariantSize {
  orderFilter: number;
  filterCode: string;
}

export interface Catalog {
  code: string;
  name: string;
  stock: Stock;
  price: Price;
  images: Image[];
  categories: any[];
  pk: string;
  sellingAttributes: string[];
  whitePrice: WhitePrice;
  promotionMarker: PromotionMarker;
  articles: Article[];
  visible: boolean;
  concept: string[];
  numbersOfPieces: number;
  defaultArticle: DefaultArticle;
  sale: boolean;
  variantSizes: VariantSize[];
  swatches: any[];
  articleCodes: string[];
  ticket: string;
  searchEngineProductId: string;
  dummy: boolean;
  linkPdp: string;
  categoryName: string;
  rgbColors: string[];
  articleColorNames: string[];
  ecoTaxValue: number;
  swatchesTotal: number;
  showPriceMarker: boolean;
  redirectToPdp: boolean;
  mainCategoryCode: string;
  comingSoon: boolean;
  brandName: string;
}
