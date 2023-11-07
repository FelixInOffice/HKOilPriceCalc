import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import axiosApp from "../network/axios";
import endpoints from "../network/endpoints";

export const useAllOilPriceStore = defineStore("allOilPrice", () => {

  const allOilPrice = ref(null);

  async function getAllOilPrice() {
    const data = await axiosApp.get(endpoints.allOilPriceApi);  
    console.log(data);
    allOilPrice.value = data;
  }


  return { allOilPrice, getAllOilPrice };
});
