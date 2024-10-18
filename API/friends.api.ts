import api from "./middleware";

export const fn = async ({}: {}) => {
  try {
    const { data } = await api.get("/friends");

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
