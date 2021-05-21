import create from 'zustand';
import { getAllPointsOfInterest } from '../utils/apiService';
import { getAllAccessPoints } from './../utils/apiService';

type State = {
  customPoint: Coordinates,
  pointsOfInterest: PointOfInterest[],
  accessPoints: AccessPoint[],
  setPoint: (coordinates: Coordinates) => void,
  setPointName: (newName: string) => void,
  setPointAmenity: (newAmenity: string) => void,
  fetchPois: () => void,
  fetchAccessPoints: () => void,
}
const initialState = {
  customPoint: null,
  pointsOfInterest: [],
  accessPoints: [],
}
export const useStore = create<State>(set => ({
  ...initialState,
  setPoint: (coordinates) => set(state => ({ ...state, customPoint: coordinates })),
  setPointName: (newName) => set(state => ({ ...state, customPoint: { ...state.customPoint, name: newName } })),
  setPointAmenity: (newAmenity) => set(state => ({ ...state, customPoint: { ...state.customPoint, amenity: newAmenity } })),
  fetchPois: async () => {
    const pointsOfInterest = await getAllPointsOfInterest();
    set(state => ({ ...state, pointsOfInterest }));
  },
  fetchAccessPoints: async () => {
    const accessPoints = await getAllAccessPoints();
    set(state => ({ ...state, accessPoints }));
  }
}))