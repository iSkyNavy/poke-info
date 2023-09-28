import axios from "axios";
import { ref } from "vue";

export const useGetData = () => {
    const data = ref(null);
    const isLoading = ref(true);
    const isError = ref(false);
    const getData = async (url) => {
        isLoading.value = true;
        try {
            const res = await axios.get(url);
            data.value = res.data;
            console.log(res, '{{{');
        } catch (error) {
            console.log(error);
            isError.value = true;
        } finally {
            isLoading.value = false;
        }
    }
    return {
        getData,
        data,
        isLoading,
        isError
    }
}