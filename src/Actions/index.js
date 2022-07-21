import ClothesApi from "../Apis/ClothesApi";

export const fetchClothes = () => async (dispatch) => {
  const response = await ClothesApi.get("/api/v1/products?keyword=&page=null");
  console.log(response);
  dispatch({ type: "FETCH_CLOTHES", payload: response.data });
};
