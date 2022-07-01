import {ref} from 'vue'

const useCatalog = () => {
  const baseUrl = ref('https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com')
  const catalog = ref([])
  const pagination = ref(null)

  const getCatalog = (params: any) => {
    return useFetch(`${baseUrl.value}/products/list`, {
      headers: {
        'X-RapidAPI-Key' : '8453ad2fa0msh21875f1cfb62ef9p1d1a0bjsn7d58b800df3b',
        'X-RapidAPI-Host' : 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
      },
      params: params
    })
  }

  const getCategory = () => {
    return useFetch(`${baseUrl.value}/categories/list`, {
      headers: {
        'X-RapidAPI-Key' : '8453ad2fa0msh21875f1cfb62ef9p1d1a0bjsn7d58b800df3b',
        'X-RapidAPI-Host' : 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
      },
      params: {
        lang: 'en', country: 'us'
      }
    })
  }

  const getCatalogDetails = (productCode: string) => {
    return useFetch(`${baseUrl.value}/products/detail`, {
      headers: {
        'X-RapidAPI-Key' : '8453ad2fa0msh21875f1cfb62ef9p1d1a0bjsn7d58b800df3b',
        'X-RapidAPI-Host' : 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
      },
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
