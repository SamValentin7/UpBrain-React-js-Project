import axios from "axios";
export const getComments = async () => {

  const auth = "Bearer b004889acd3ef39f3911f1949f7c2db9e2940b36d807ae50976d005a914ca2325044959365e0f9f37c9e185685cf04b4aaedb99c532bb0a305a93b0d118df2011664113e5994b96aa76c5d2899873d6a8d84273acf29198e7414df4a43fe0c3ce105562f96fca6425835bf593bf1900c787434e43bf873f2827f80d805cc6a91";
  const url = "http://localhost:1337/api/comments";

  axios.defaults.headers.common['Authorization'] = auth;

  try {
    const response = await axios.get(url);
    console.log(response)
    return response.data.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const createComment = async (text, username, userId, parentId = null) => {
  axios.defaults.headers.common['Authorization'] = "Bearer b004889acd3ef39f3911f1949f7c2db9e2940b36d807ae50976d005a914ca2325044959365e0f9f37c9e185685cf04b4aaedb99c532bb0a305a93b0d118df2011664113e5994b96aa76c5d2899873d6a8d84273acf29198e7414df4a43fe0c3ce105562f96fca6425835bf593bf1900c787434e43bf873f2827f80d805cc6a91";

  try {
    const response = await axios.post(`http://localhost:1337/api/comments/`, {
      body: text,
      username,
      userId,
      parentId
    });

    console.log(response)
    return response.data.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const updateComment = async (text, username, commentId) => {
  axios.defaults.headers.common['Authorization'] = auth;

  try {
    const response = await axios.put(`http://localhost:1337/api/comments/${commentId}`, { 
      data: text 
    });
    console.log(response)
    return response.data.data;
  } catch (e) {
    console.log(e);
    return [];
  }
  // return { text };
};

export const deleteComment = async (commentId) => {
  axios.defaults.headers.common['Authorization'] = auth;

  try {
    const response = await axios.delete(`http://localhost:1337/api/comments/${commentId}`);
    // console.log(response)
    return response.data.data;
  } catch (e) {
    console.log(e);
    return [];
  }
  // return {};
};
