import axios from "axios";

const ApiService = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});

export const getAllPointsOfInterest = (): Promise<PointOfInterest[]> => ApiService
    .get('poi')
    .then((res) => res.data)
    .catch(err => {
        console.log(err);
        return []
    });

export const registerPointOfInterest = (newPoi: PointOfInterest) => ApiService
    .post('poi', newPoi)
    .then((res) => res.data)
    .catch(err => console.log(err));

export const getAllAccessPoints = (): Promise<AccessPoint[]> => ApiService
    .get('access-point')
    .then((res) => res.data)
    .catch(err => {
        console.log(err);
        return []
    });

export const registerAccessPoint = (newAccessPoint: AccessPoint) => ApiService
    .post('access-point', newAccessPoint)
    .then((res) => res.data)
    .catch(err => console.log(err));

export const getAllImages = (): Promise<Image[]> => ApiService
    .get('image')
    .then((res) => res.data)
    .catch(err => console.log(err));

export const registerImage = (newImage: Image) => ApiService
    .post('image', newImage)
    .then((res) => res.data)
    .catch(err => console.log(err));