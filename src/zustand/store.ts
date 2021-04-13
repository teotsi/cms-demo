import create from 'zustand';
import { getAllPointsOfInterest } from '../utils/apiService';

type State = {
  customPoint: PointOfInterest,
  pointsOfInterest: PointOfInterest[],
  setPoint: (newPoint: PointOfInterest) => void,
  setPointName: (newName: string) => void,
  setPointAmenity: (newAmenity: string) => void,
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
    const pois = await getAllPointsOfInterest();
    set(state => ({ ...state, pointsOfInterest: pois }));
  }
}))