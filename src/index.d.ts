declare module "*.svg" {
    const content: any;
    export default content;
}

declare type PointOfInterest = Coordinates & {
    name: string;
    amenity: string;
}

declare type Coordinates = {
    lat: number;
    lon: number;
}