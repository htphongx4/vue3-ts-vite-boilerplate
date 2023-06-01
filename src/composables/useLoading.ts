import useStore from "@/store";
const { start, finish } = useStore();

const useLoading = () => ({
  start,
  finish,
});

export default useLoading;
