import { FriendRequestStatus, PaginationParams } from "@/types/types";
import api from "./middleware";

export const getAllFriendRequests = async ({
  page = 1,
  limit = 30,
}: PaginationParams) => {
  try {
    const { data } = await api.get("/friends/requests", {
      withCredentials: true,
      params: {
        page,
        limit,
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

export const getSentRequests = async ({
  page = 1,
  limit = 30,
}: PaginationParams) => {
  try {
    const { data } = await api.get("/friends/requests/sent", {
      withCredentials: true,
      params: {
        page,
        limit,
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

export const sendFriendRequest = async (id: string) => {
  try {
    const { data } = await api.post(
      `/friends/request/${id}`,
      {},
      { withCredentials: true }
    );

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

export const respondToFriendRequest = async ({
  id,
  status,
}: {
  id: string;
  status: FriendRequestStatus;
}) => {
  try {
    const { data } = await api.patch(
      `/friends/request/${id}`,
      { status },
      { withCredentials: true }
    );

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

export const withdrawFriendRequest = async (id: string) => {
  try {
    const { data } = await api.delete(`/friends/request/withdraw/${id}`, {
      withCredentials: true,
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

export const removeFriend = async (id: string) => {
  try {
    const { data } = await api.delete(`/friends/request/${id}`, {
      withCredentials: true,
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
