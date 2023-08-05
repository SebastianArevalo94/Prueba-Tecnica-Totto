const url = "";

export const CheckUser = async (email) => {
  try {
    const resp = await fetch(`${url}/api/Users/GetAll`, {
      method: "POST",
      headers: {
        //Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: email,
    });
    const json = await resp.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const PostInfo = async (info) => {
  try {
    const resp = await fetch(`${url}/api/Users/GetAll`, {
      method: "POST",
      headers: {
        //Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    const json = await resp.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
