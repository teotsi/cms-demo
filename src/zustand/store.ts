import create from 'zustand'

type State = {
  customLat: number,
  customLon: number,
  setLat: (newLat) => void,
  setLon: (newLon) => void,
  resetForm: () => void,
}
const initialState = {
  customLat: null,
  customLon: null,
}
export const useStore = create<State>(set => ({
  ...initialState,
  setLat: (newLat) => set(state => ({ ...state, customLat: newLat })),
  setLon: (newLon) => set(state => ({ ...state, customLon: newLon })),
  resetForm: () => set(initialState)
}))