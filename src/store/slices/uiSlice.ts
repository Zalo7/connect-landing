import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  navOpen: boolean;
  heroSlide: number;
  faqOpenId: string | null;
}

const initialState: UIState = {
  navOpen: false,
  heroSlide: 0,
  faqOpenId: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openNav(state) {
      state.navOpen = true;
    },
    closeNav(state) {
      state.navOpen = false;
    },
    setHeroSlide(state, action: PayloadAction<number>) {
      state.heroSlide = action.payload;
    },
    toggleFaq(state, action: PayloadAction<string>) {
      state.faqOpenId =
        state.faqOpenId === action.payload ? null : action.payload;
    },
  },
});

export const { openNav, closeNav, setHeroSlide, toggleFaq } = uiSlice.actions;
export default uiSlice.reducer;
