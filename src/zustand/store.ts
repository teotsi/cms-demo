import axios from 'axios';
import create from 'zustand';

type State = {
  customPoint: Record<string, string | number>,
  pointsOfInterest: Record<string, any>[],
  setPoint: (newPoint) => void,
  setPointName: (newName) => void,
  setPointAmenity: (newAmenity) => void,
  resetForm: () => void,
  fetchPois: () => void,
}
const initialState = {
  customPoint: null,
  pointsOfInterest: [],
}
export const useStore = create<State>(set => ({
  ...initialState,
  setPoint: (newPoint) => set(state => ({ ...state, customPoint: newPoint })),
  setPointName: (newName) => set(state => ({ ...state, customPoint: { ...state.customPoint, name: newName } })),
  setPointAmenity: (newAmenity) => set(state => ({ ...state, customPoint: { ...state.customPoint, amenity: newAmenity } })),
  resetForm: () => set(initialState),
  fetchPois: async () => {
    const { data } = await axios.get("http://localhost:8081/poi");
    console.log(data)
    set(state => ({ ...state, pointsOfInterest: data }));
  }
}))