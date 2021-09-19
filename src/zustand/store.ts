import create from 'zustand';
import { getAllImages, getAllPointsOfInterest } from '../utils/apiService';
import { getAllAccessPoints } from './../utils/apiService';

type State = {
  customPoint: Coordinates,
  pointsOfInterest: PointOfInterest[],
  accessPoints: AccessPoint[],
  images: Image[],
  setPoint: (coordinates: Coordinates) => void,
  setPointName: (newName: string) => void,
  setPointAmenity: (newAmenity: string) => void,
  fetchPois: () => void,
  fetchAccessPoints: () => void,
  fetchImages: () => void,
}
const initialState = {
  customPoint: null,
  pointsOfInterest: [],
  accessPoints: [],
  images: [],
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
  },
  fetchImages: async () => {
    const images = await getAllImages();
    set(state => ({ ...state, images }));
  }
}))