<script setup lang="ts">
  import {ref} from 'vue'
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Navigation, Pagination, FreeMode } from "swiper";
  import "swiper/css";
  import "swiper/css/free-mode";
  import "swiper/css/pagination";
  import { useCart } from '~/stores/cart';
  import { useToast } from '~/stores/toast';

  const router = useRoute()
  const cart = useCart()
  const toast = useToast()
  const {getCatalogDetails, getCatalogFilter, catalog} = useCatalog();
  const {data} = await getCatalogDetails(router.params.id);
  const product = ref(data.value?.product)
  const articleCode = ref('')
  const size = ref('')

  articleCode.value = data.value?.product?.articlesList[0].code;

  onMounted(async () => {
    getCatalogFilter({
      country: 'us', 
      lang: 'en',  
      categories: product.value?.customerGroup,
      currentpage: 0, 
      pagesize: '6'
    }, true)
  })

  
  const selectedArticle = computed(() => {
    if (!articleCode.value) {
      return product.value?.articlesList[0]
    } else {
      const article = product.value?.articlesList?.find((item: any) => item.code === articleCode.value)
      return article
    }
  });

  const changeCatalogType = (code: string) => {
    articleCode.value = code;
  }

  const addToCart = () => {
    cart.add({
      code: router.params.id,
      name: product.value?.name,
      size: size.value,
      currency: product.value?.whitePrice?.currency,
      price: product.value?.whitePrice?.price
    })
    toast.set({
      isShow: true,
      type: 'success',
      msg: `${product.value?.name} added successfully`
    })
  }

  const modules = [Navigation, Pagination, FreeMode];

</script>

<template>
  <div v-if="product">
    <div class="mt-10px font-size-2em">
      {{product?.name}}
    </div> 
    <hr/>
    <div class="mt-20px mb-20px">
      <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :freeMode="true"
        :pagination="{
          clickable: true,
        }"
        navigation
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="article in selectedArticle?.galleryDetails" style="{min-height: 200px}">
          <img :src="article.url" />
        </swiper-slide>
      </swiper>
    </div>
    <hr/>
    <div class="container__row justify-space-between mt-20px">
      <div class="container__col-12 container__col-sm-6 container__col-md-4 container__col-lg-3">
        <div class="mt-10px">
          <div class="d-flex flex-wrap">
            <button v-for="item in product.articlesList" class="btn-size cursor-pointer" @click="changeCatalogType(item.code)">
              {{item.color.text}}
            </button>
          </div>
        </div>
      </div>
      <div class="container__col-12 container__col-sm-6 container__col-md-8 container__col-lg-9">
        <div class="mt-10px font-weight-bold">
          {{`${product?.whitePrice?.currency} ${product?.whitePrice?.price}`}}
        </div>
        <div class="mt-10px">
          {{`${product?.customerGroup} | ${product?.constructionDescr}`}}
        </div>
        <div class="mt-10px">
          <div class="container__col-12 container__col-sm-6 container__col-md-4 container__col-lg-3 container__col-xl-2 text-right">
            <select class="select-size mt-10px" v-model="size">
              <option value="">Size</option>
              <option v-for="size in selectedArticle?.variantsList" :value="size.size.name">{{ size.size.name }}</option>
            </select>
          </div>
        </div>
        <div class="mt-10px">
          {{product?.description}}
        </div>
        <div class="case-instructions">
          Care Instructions:
          <ul>
            <li v-for="item in selectedArticle?.careInstructions">
              {{item}}
            </li>
          </ul>
        </div>
        <div class="mt-10px">
          <button class="btn-cart" @click="addToCart()">Add to Cart</button>
        </div>
      </div>
    </div>
    <div class="container__row mt-20px">
      <div class="container__col container__col-sm-6 container__col-md-2 flex-same-height" v-for="(item, i) in catalog">
        <NuxtLink :to="`/catalog/${item?.articles[0]?.code}`" class="text-decoration-none justify-center">
          <CardCatalog :catalog="item"/>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.btn-cart {
  background-color: transparent;
  border: 1px solid #111;
  border-radius: 8px;
  color: #111;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-weight: 700;
  font-size: 1.14286rem;
  line-height: 22px;
  outline: none;
  position: relative;
  padding: 6px 10px;
}
.case-instructions {
  margin-top: 10px;
  ul {
    margin-top: 2px;
  }
}
.select-size {
  display: block;
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

.btn-size {
  background: gray;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  border: 0px;
  margin: 5px;
}
.swiper {
  position: inherit !important;
  width: 100%;
  height: 100%;
}

.swiper-wrapper{
  position: inherit !important;
  transform: none !important;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  position: inherit !important;
  transform: none !important;
}

.swiper-slide img {
  min-height: 200px;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>