import { useGetUsers } from "@/services";
import { useInfinityScroll } from "@/hooks";

interface UseSearchProfileProps {
  usernameQuery: string;
}

const useSearchProfile = ({ usernameQuery }: UseSearchProfileProps) => {
  const {
    data: profile,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useGetUsers(
    { query: { username: usernameQuery, page: 1 } },
    !!usernameQuery
  );

  const { lastRef } = useInfinityScroll({
    hasNextPage,
    handleFetchNextPage: fetchNextPage,
  });

  const profiles = profile?.pages.flatMap((item) => item.users) || [];

  const profileStatus = {
    hasQuery: !!usernameQuery,
    isSearchingProfile: !!usernameQuery && isFetching && !profiles.length,
    isEmptyProfiles: !!usernameQuery && !isFetching && !profiles.length,
    hasProfiles: !!profiles.length,
    isFetchingNextPage,
  };

  return {
    lastRef,
    profiles,
    profileStatus,
  };
};

export default useSearchProfile;
