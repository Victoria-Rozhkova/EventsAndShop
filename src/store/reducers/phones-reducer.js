import phone1 from "../../assets/images/phone-1.jpg";
import phone2 from "../../assets/images/phone-2.jpg";
import phone3 from "../../assets/images/phone-3.jpg";

const initialState = {
  phones: [
    {
      id: 1,
      name: "Смартфон iPhone 13 mini 256GB Global",
      brand: "Apple",
      screen_diagonal: "5.4",
      screen_resolution: "2340x1080",
      matrix: "OLED",
      memory: "256 ГБ",
      img: phone1,
      rating: 5,
      rating_count: 775,
      discount: "17%",
      installment_plan: "0-0-6",
      price: 84990,
      price_discount: 69990,
      price_with_card: 68940,
    },
    {
      id: 2,
      name: "Смартфон iPhone 13 Pro 256GB, графитовый",
      brand: "Apple",
      screen_diagonal: "6.1",
      screen_resolution: "2532x1170",
      matrix: "OLED",
      memory: "256 ГБ",
      img: phone2,
      rating: 4,
      rating_count: 601,
      discount: "38%",
      installment_plan: "0-0-6",
      price: 164990,
      price_discount: 100790,
      price_with_card: 96758,
    },
    {
      id: 3,
      name: "Смартфон iPhone 13 mini 256GB, темная ночь",
      brand: "Apple",
      screen_diagonal: "5.4",
      screen_resolution: "2340x1080",
      matrix: "OLED",
      memory: "256 ГБ",
      img: phone3,
      rating: 3,
      rating_count: 546,
      discount: "16%",
      installment_plan: "0-0-6",
      price: 89990,
      price_discount: 75499,
      price_with_card: 74367,
    },
  ],
};

export const phonesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
