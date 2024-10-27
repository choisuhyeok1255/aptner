import { useState } from "react";

import {
  useGetUserFollowers,
  useGetUserOrganizations,
  useGetUserSubscriptions,
} from "@/services";
import { CONTENT_NAMES } from "@/constants/index";

interface UseProfileDetailProps {
  name: string;
}

const useProfileDetail = ({ name }: UseProfileDetailProps) => {
  const [content, setContent] = useState<
    Record<(typeof CONTENT_NAMES)[number], { isOpen: boolean }>
  >({
    followers: { isOpen: false },
    organizations: { isOpen: false },
    subscriptions: { isOpen: false },
  });

  const { data: followers } = useGetUserFollowers(
    { query: { username: name } },
    content.followers.isOpen
  );
  const { data: subscriptions } = useGetUserSubscriptions(
    { query: { username: name } },
    content.subscriptions.isOpen
  );
  const { data: organizations } = useGetUserOrganizations(
    { query: { username: name } },
    content.organizations.isOpen
  );

  const handleSearchContent =
    (contentKey: (typeof CONTENT_NAMES)[number]) => (): void => {
      setContent((prevContent) => ({
        ...prevContent,
        [contentKey]: { isOpen: true },
      }));
    };

  return {
    content,
    followers,
    subscriptions,
    organizations,
    handleSearchContent,
  };
};

export default useProfileDetail;
