import { AxiosResponse } from "axios";
import { ISignupProviderFormData } from "views/SignupProvider/types";
import { get, post, put } from "./api";

export async function signupProvider(formData: ISignupProviderFormData): Promise<AxiosResponse> {
    const response = await post("/providers", formData);
    return response;
}

export async function loginProvider(formData: ISignupProviderFormData): Promise<AxiosResponse> {
    const response = await post("/providers/login", formData);
    return response;
}

export async function getAllCategories(): Promise<AxiosResponse> {
    const response = await get(`/providers/categories?page=1&take=10`);
    return response;
}


export async function filterCategory(idCategoryChoosed: string): Promise<any> {
    const response = await get(`/providers/categories?page=1&take=10?categoryId=${idCategoryChoosed}`);
    return response;
}

export async function getAllProviders(): Promise<AxiosResponse> {
    const response = await get("/providers");
    return (
        response
    )
}

export async function getProviderInfo(providerId: string): Promise<any> {
    //const response = await get(`/providers?providerId=${providerId}`);
    const response = {
        id: "14e879d6-f86c-419d-bd77-819cebfccb02",
        email: "robertolopez@gmail.com",
        password: "$2b$10$P8k8Mk0MCls9Az./9U0hI.ZACyb10fdycs1S10d.hCzutTfkeGXj6",
        firstName: "Roberto",
        lastName: "Lopez",
        identityNumber: "123443234",
        phoneNumber: "214123142",
        categoryId: "3760322d-ddf0-405d-8103-e08736118742",
        category: {
            id: "3760322d-ddf0-405d-8103-e08736118742",
            name: "Electricista"
        },
        reviews: [
            {
                calification: 10,
                reviewDescription: "Muy bueno  y rapidooooooooooooooooooooo",
                firstName: "Tomas",
                lastname: "Rodriguez"
            },
            {
                calification: 9,
                reviewDescription: "Muy bueno",
                firstName: "Juan",
                lastname: "Alvarez"
            },
            {
                calification: 8,
                reviewDescription: "De verda bueno",
                firstName: "Ricardo",
                lastname: "Hortiguera"
            },
        ],
        average_calification: 9,
        services: [{
            serviceId: 1,
            providerId: "14e879d6-f86c-419d-bd77-819cebfccb02",
            title: "Arreglo luces, cambio lamparitas",
            description: "Hago de todo",
            pricePerHour: 1500,
            monetizationType: "fixed"
        },
        {
            serviceId: 2,
            providerId: "14e879d6-f86c-419d-bd77-819cebfccb02",
            title: "Realizo instalaciones electricas",
            description: "Hago de todo",
            pricePerHour: 1500,
            monetizationType: "byDuration"
        }]
    }
    return response;
}
