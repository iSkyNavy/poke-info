import axios from "axios";
import { ref } from "vue";

export const useGetData = () => {
    const data = ref(null);
    const isLoading = ref(true);
    const isError = ref(false);
    const getData = async (url, detailed = false) => {
        isLoading.value = true;
        try {
            const res = await axios.get(url);
            if (detailed) {
                const resp = await getFullData(res.data);
                console.log(resp, "***");
                data.value = resp;
                return;
            }
            data.value = res.data;
        } catch (error) {
            console.log(error);
            isError.value = true;
        } finally {
            isLoading.value = false;
        }
    }

    const getFullData = async (data) => {
        const results = data.results || [];
        data.results = await Promise.all(
            results.map(async (item) => {
                const resp = await axios.get(item.url);
                const detail = resp.data;
                item.detail = detail;
                return item;
            })
        );
        // data.results = newResults
        return data;
    }
    return {
        getData,
        data,
        isLoading,
        isError
    }
}