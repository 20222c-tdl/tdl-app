export interface ILoginViewProps{
    name: string;
    lastname?: string;
    onLoginClick: () => void;
}

export interface ILoginFormData{
    email: string;
    password: string;
}