import React, { forwardRef } from "react";

import { GithubProfileCard } from "@/components";
import type { User } from "@/types";
import { useBookmark } from "./hooks";
import * as S from "./GithubProfiles.styled";

interface GithubProfilesProps {
  profiles: User[];
}

const GithubProfiles = forwardRef<HTMLLIElement, GithubProfilesProps>(
  ({ profiles }, ref) => {
    const { handleBookmark, handleCheckBookmark } = useBookmark();

    return (
      <S.GithubProfileWrapper>
        {profiles.map((profile, i) => (
          <GithubProfileCard
            key={profile.id}
            ref={i === profiles.length - 1 ? ref : null}
            profile={profile}
            isBookmark={handleCheckBookmark(profile)}
            handleBookmark={handleBookmark}
          />
        ))}
      </S.GithubProfileWrapper>
    );
  }
);

GithubProfiles.displayName = "GithubProfiles";

export default GithubProfiles;
