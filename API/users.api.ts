import { QueryParams } from "@/types/types";
import api from "./middleware";

export const getCurrentUser = async ({}: {}) => {
  try {
    const { data } = await api.get("/users/me", { withCredentials: true });

    return {
      success: true,
      response: data.data,
    };
  } catch (error: any) {
    return {
      success: false,
      response: error?.response?.data?.message || "Something went wrong",
    };
  }
};

export const getUserById = async (id: string) => {
  try {
    const { data } = await api.get(`/users/${id}`, { withCredentials: true });

    return {
      success: true,
      response: data.data,
    };
  } catch (error: any) {
    return {
      success: false,
      response: error?.response?.data?.message || "Something went wrong",
    };
  }
};

export const getAllUsers = async (query: QueryParams) => {
  try {
    const { page = 1, limit = 25, search, filter, sort } = query;
    const { data } = await api.get("/users", {
      withCredentials: true,
      params: {
        page,
        limit,
        search,
        filter,
        sort,
      },
    });

    return {
      success: true,
      response: data.data,
    };
  } catch (error: any) {
    return {
      success: false,
      response: error?.response?.data?.message || "Something went wrong",
    };
  }
};
