export type ApiReturnObject = {
    label: string | null;
    value: number | null;
}

export type EmptyFunctionArgs = {
    setData(setState: boolean): void;
}

export type FormStateFunction = {
    getFormState(state: ApiReturnObject, district: ApiReturnObject, date: string | null, isSubmitted: boolean | null, setData: EmptyFunctionArgs, setReset: EmptyFunctionArgs): void;
}