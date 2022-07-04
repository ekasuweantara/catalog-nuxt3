import {ref} from 'vue'
import { useCustomFetch } from './useCustomFetch';

const useCatalog = () => {
  const catalog = ref([])
  const pagination = ref(null)

  const getCatalog = (params: any) => {
    return useCustomFetch('/products/list', {
      params: params
    })
  }

  const getCategory = () => {
    return useCustomFetch('/categories/list', {
      params: {
        lang: 'en', country: 'us'
      }
    })
  }

  const getCatalogDetails = (productCode: string) => {
    return useCustomFetch('/products/detail', {
      params: {
        lang: 'en', productcode: productCode, country: 'us'
      }
    })
  }

  const getCatalogFilter = async (payload: any, isReset: boolean) => {
    const {data} = await getCatalog(payload);
    if (isReset) {
      catalog.value = [...[], ...data.value?.results]
    } else {
      catalog.value = [...catalog.value, ...data.value?.results]
    }
    pagination.value = data.value?.pagination
  }

  return {
    getCatalog,
    getCategory,
    getCatalogDetails,
    getCatalogFilter,
    catalog,
    pagination
  }
};

export default useCatalog;
