export function useDevice() {
  const isMobile = ref(window.innerWidth < 768);
  const isIpad = ref(window.innerWidth >= 768 && window.innerWidth <= 1024);
  const isDesktop = ref(window.innerWidth > 1024);

  function update() {
    const innerWidth = window.innerWidth;

    isMobile.value = innerWidth < 768;
    isIpad.value = innerWidth >= 768 && innerWidth <= 1024;
    isDesktop.value = innerWidth > 1024;
  }

  onMounted(() => window.addEventListener("resize", update));
  onUnmounted(() => window.removeEventListener("resize", update));

  return {
    isMobile,
    isIpad,
    isDesktop,
  };
}
