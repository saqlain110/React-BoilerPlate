const initialUserSlice = { user: {} };

export const CreateUserSlice = (set) => ({
  ...initialUserSlice,
  setUser: (payload) => {
    set((state) => ({
      ...state,
      user: payload,
    }));
  },
});
