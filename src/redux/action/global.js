import axios from "axios";

export const postSignUp = (data) => async (dispatch) => {
  try {
    const res = await axios.post(
      `https://express-vercel-rho-woad.vercel.app/user/register`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);
    if (res && res.data && res.data.message === "success register") {
      localStorage.setItem("register", "success");
    }
  } catch (err) {
    console.log("ERORBTUHGTBOBO", err);
  }
};

export const postLogin = (data) => async (dispatch) => {
  try {
    const res = await axios.post(
      `https://express-vercel-rho-woad.vercel.app/user/login`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);
    if (res && res.data && res.data.token) {
      localStorage.setItem("token", res?.data?.token);
      const nama = res.data.nama_lengkap;
      const email = res.data.email;
      const user_id = res.data.user_id;
      localStorage.setItem("nama_lengkap", nama);
      localStorage.setItem("email", email);
      localStorage.setItem("user_id", user_id);
    }
  } catch (err) {
    console.log("ERORBTUHGTBOBO", err);
  }
};
