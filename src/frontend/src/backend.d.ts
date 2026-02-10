import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface backendInterface {
    addCertificate(id: string): Promise<void>;
    enrollInCourse(courseId: string): Promise<void>;
    isEnrolledInCourse(courseId: string): Promise<boolean>;
    removeCertificate(id: string): Promise<void>;
    verifyCertificate(id: string): Promise<boolean>;
}
