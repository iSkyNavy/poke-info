export const useLocalStorage = (key) => {
    const getData = () => JSON.parse(localStorage.getItem(key));
    const setData = (data) => localStorage.setItem(key, JSON.stringify(data));

    return {
        getData,
        setData
    }
}