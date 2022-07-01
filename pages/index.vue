<script setup lang="ts">
  import {ref} from 'vue'
  
  const {getCategory, getCatalogFilter, catalog, pagination} = useCatalog();
  const selectedCat = ref("")
  const page = ref(0)
  const {data: category} = await getCategory();
  
  const loadMoreCatalog = async () => {
    page.value++;
    const payload = {
      country: 'us', 
      lang: 'en', 
      categories: selectedCat.value,
      currentpage: page.value, 
      pagesize: '30'
    }

    if (!selectedCat.value) {
      delete payload.categories;
    }

    getCatalogFilter(payload, false)
  }

  onMounted(() => {
    getCatalogFilter({
      country: 'us', 
      lang: 'en', 
      currentpage: page.value, 
      pagesize: '30'
    }, false)
  })

  const loadWithCategory = async () => {
    page.value = 0;
    getCatalogFilter({
      country: 'us', 
      lang: 'en',  
      categories: selectedCat.value,
      currentpage: page.value, 
      pagesize: '30'
    }, true)
  }
</script>

<template>
  <div>
    <div class="container__row justify-space-between">
      <div class="container__col-12 container__col-sm-6 container__col-md-8 container__col-lg-9 container__col-xl-10 mx-auto">
        <div class="mt-10px font-weight-600 font-size-20px">
          Catalog
        </div>
      </div>
      <div class="container__col-12 container__col-sm-6 container__col-md-4 container__col-lg-3 container__col-xl-2 text-right mx-auto">
        <select @change="loadWithCategory()" class="select-catalog ml-auto mt-10px" v-model="selectedCat">
          <option value="">Select Category</option>
          <option v-for="item in category" :value="item?.CatName">{{ item?.CatName }}</option>
        </select>
      </div>
    </div>
    <div class="container__row mt-20px">
      <div class="container__col container__col-sm-6 container__col-md-2 flex-same-height" v-for="(item, i) in catalog">
        <NuxtLink :to="`/catalog/${item?.articles[0]?.code}`" class="text-decoration-none justify-center">
          <CardCatalog :catalog="item"/>
        </NuxtLink>
      </div>
    </div>
    <div class="container__row">
      <div class="container__col my-auto">
        <button v-if="pagination && pagination.numberOfPages > page" @click="loadMoreCatalog()" class="btn-load-more">Load More Results</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.select-catalog {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
</style>
