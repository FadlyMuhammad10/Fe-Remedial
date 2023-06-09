import axios from "axios";

export const postLogin = (data) => async (dispatch) => {
  try {
    const res = await axios.post(
      `https://be4-skilvul-production.up.railway.app/user/login`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res)
    if(res.data.message === "user not found"){

    }else {
      localStorage.setItem("token", res?.data?.token);
    }
  } catch (err) {
    console.log("ERORBTUHGTBOBO", err);
  }
};
