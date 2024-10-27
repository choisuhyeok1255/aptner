import { usePathname } from "next/navigation";

const useCurrentPath = () => {
  const pathname = usePathname();

  const isCurrentPath = (currentPath: string): boolean => {
    return pathname === currentPath;
  };

  return { isCurrentPath };
};

export default useCurrentPath;
