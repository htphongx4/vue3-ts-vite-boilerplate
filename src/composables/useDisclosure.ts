export default function useDisclosure() {
  const isOpen = ref(false);

  const onOpen = () => {
    isOpen.value = true;
  };

  const onClose = () => {
    isOpen.value = false;
  };

  const onToggle = () => {
    isOpen.value = !isOpen.value;
  };

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
}
