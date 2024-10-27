import { useCallback } from "react";

interface UseInfinityScrollProps {
  hasNextPage: boolean;
  handleFetchNextPage: () => void;
}

const useInfinityScroll = ({
  hasNextPage,
  handleFetchNextPage,
}: UseInfinityScrollProps) => {
  const lastRef = useCallback(
    (node: HTMLLIElement | null) => {
      if (!node) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasNextPage) {
            handleFetchNextPage();
          }
        },
        { threshold: 1 }
      );

      observer.observe(node);

      return () => {
        observer.unobserve(node);
      };
    },
    [handleFetchNextPage, hasNextPage]
  );

  return { lastRef };
};

export default useInfinityScroll;
