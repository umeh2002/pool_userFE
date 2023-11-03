import axios from "axios";

const url: string = "http://localhost:3474/api";
// const url: string = "https://pool-user-challenge.onrender.com/api";

export const createUser = async (data: any) => {
  try {
    const config: {} = {
      "content-type": "multipart/form-data",
    };
    return await axios
      .post(`${url}/create-user`, data, config)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};

export const viewUser = async () => {
  try {
    return await axios.get(`${url}/find-users`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const viewOneUser = async (userID: string) => {
  try {
    return await axios.get(`${url}/${userID}/find-user`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const LikeOneUser = async (userID: string) => {
  try {
    return await axios.patch(`${url}/${userID}/like-user`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const sendFriendRequst = async (
  userID: string,
  friendID: string,
) => {
  try {
    return await axios
      .patch(`${url}/${userID}/${friendID}/send-request`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const confirmRequst = async (
  userID: string,
  friendID: string,
) => {
  try {
    return await axios
      .patch(`${url}/${userID}/${friendID}/confirm-request`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const declineRequst = async (
  userID: string,
  friendID: string,
) => {
  try {
    return await axios
      .patch(`${url}/${userID}/${friendID}/decline-request`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};