import { ax } from "@/apis";
import type {
  GetUserFollowersQueryModel,
  GetUserFollowersServerModelType,
  GetUserOrganizationsQueryModel,
  GetUserOrganizationsServerModelType,
  GetUsersQueryModel,
  GetUsersServerModel,
  GetUserSubscriptionsQueryModel,
  GetUserSubscriptionsServerModelType,
} from "@/types";

const PER_PAGE = 20 as const;

export const getUsersAPI = async (req: GetUsersQueryModel) => {
  const { data } = await ax.get<GetUsersServerModel>(`search/users`, {
    params: { q: req.query.username, page: req.query.page, per_page: PER_PAGE },
  });

  return {
    users: data.items,
    nextPage: req.query.page + 1,
    totalPages: Math.ceil(data.total_count / PER_PAGE),
  };
};

export const getUserFollowersAPI = async (req: GetUserFollowersQueryModel) => {
  const { data } = await ax.get<GetUserFollowersServerModelType>(
    `users/${req.query.username}/followers`,
    { params: { per_page: 100 } }
  );

  return data;
};

export const getUserSubscriptionsAPI = async (
  req: GetUserSubscriptionsQueryModel
) => {
  const { data } = await ax.get<GetUserSubscriptionsServerModelType>(
    `users/${req.query.username}/subscriptions`,
    { params: { per_page: 100 } }
  );

  return data;
};

export const getUserOrganizationsAPI = async (
  req: GetUserOrganizationsQueryModel
) => {
  const { data } = await ax.get<GetUserOrganizationsServerModelType>(
    `users/${req.query.username}/orgs`,
    { params: { per_page: 100 } }
  );

  return data;
};
