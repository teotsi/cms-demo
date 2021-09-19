declare module "*.svg" {
    const content: any;
    export default content;
}

declare type PointOfInterest = Coordinates & {
    name: string;
    amenity: string;
    description?: string;
    icon?: string;
}

declare type AccessPoint = {
    ssid: string;
    bssid: string;
    level: number;
    h: number;
    position: AccessPointPosition;
}
declare type Coordinates = {
    lat: number;
    lon: number;
}

declare type AccessPointPosition = Coordinates & {
    id?: number;
    x?: number;
    y?: number;
    positionX?: number;
    positionY?: number;
}

declare type Image = Coordinates & {
    classId: string;
    description?: string;
    uuid?: string;
    distance?: number;
}