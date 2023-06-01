import cloneDeep from "lodash/cloneDeep";
import clone from "lodash/cloneDeep";

export default function useVueApp() {
  return {
    $env: import.meta.env,
    $deepCopy: cloneDeep,
    $shallowCopy: clone,
  };
}
