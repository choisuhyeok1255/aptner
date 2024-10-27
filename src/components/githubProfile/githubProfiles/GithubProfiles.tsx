import React, { forwardRef } from "react";

import { GithubProfileCard } from "@/components";
import type { User } from "@/types";
import * as S from "./GithubProfiles.styled";

interface GithubProfilesProps {
  profiles: User[];
}

const GithubProfiles = forwardRef<HTMLLIElement, GithubProfilesProps>(
  ({ profiles }, ref) => {
    return (
      <S.GithubProfileWrapper>
        {profiles.map((profile, i) => (
          <GithubProfileCard
            key={profile.id}
            ref={i === profiles.length - 1 ? ref : null}
            name={profile.login}
            githubUrl={profile.html_url}
            profileUrl={profile.avatar_url}
            isBookmark={false}
          />
        ))}
      </S.GithubProfileWrapper>
    );
  }
);

GithubProfiles.displayName = "GithubProfiles";

export default GithubProfiles;
