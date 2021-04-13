import axios from "axios";

const ApiService = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});

export const getAllPointsOfInterest = () => ApiService.get('poi').then((res) => res.data);

export const registerPointOfInterest = (newPoi : PointOfInterest) => ApiService.post('poi', newPoi).then((res) => res.data);