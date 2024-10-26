import {
  getUserFollowersAPI,
  getUserOrganizationsAPI,
  getUsersAPI,
  getUserSubscriptionsAPI,
} from "@/apis";
import {
  GetUserFollowersQueryModel,
  GetUserOrganizationsQueryModel,
  GetUsersQueryModel,
  GetUserSubscriptionsQueryModel,
} from "@/types";
import { useQuery } from "@tanstack/react-query";

const userKeys = {
  all: ["user"] as const,
  users: () => [...userKeys.all, "user"] as const,
  user: (req: GetUsersQueryModel) => [...userKeys.users(), req] as const,
  followers: () => [...userKeys.all, "followers"] as const,
  follower: (req: GetUserFollowersQueryModel) =>
    [...userKeys.followers(), req] as const,
  subscriptions: () => [...userKeys.all, "subscription"] as const,
  subscription: (req: GetUserSubscriptionsQueryModel) =>
    [...userKeys.subscriptions(), req] as const,
  Organizations: () => [...userKeys.all, "organization"] as const,
  Organization: (req: GetUserOrganizationsQueryModel) =>
    [...userKeys.Organizations(), req] as const,
};

export const useGetUsers = (req: GetUsersQueryModel) => {
  return useQuery({
    queryKey: userKeys.user(req),
    queryFn: () => getUsersAPI(req),
  });
};

export const useGetUserFollowers = (
  req: GetUserFollowersQueryModel,
  enabled: boolean
) => {
  return useQuery({
    queryKey: userKeys.follower(req),
    queryFn: () => getUserFollowersAPI(req),
    enabled,
  });
};

export const useGetUserSubscriptions = (
  req: GetUserSubscriptionsQueryModel,
  enabled: boolean
) => {
  return useQuery({
    queryKey: userKeys.subscription(req),
    queryFn: () => getUserSubscriptionsAPI(req),
    enabled,
  });
};

export const useGetUserOrganizations = (
  req: GetUserOrganizationsQueryModel,
  enabled: boolean
) => {
  return useQuery({
    queryKey: userKeys.Organization(req),
    queryFn: () => getUserOrganizationsAPI(req),
    enabled,
  });
};
