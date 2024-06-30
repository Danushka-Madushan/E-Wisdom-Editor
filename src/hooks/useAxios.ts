import axios from 'axios';
import { Dispatch, SetStateAction, useState } from 'react';
import toast from 'react-hot-toast';
import { BACKEND_URL } from '../config/config';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';

interface AxiosRequest {
    endpoint: `/${ string }`,
    method: "GET" | "POST",
    data?: object,
    message?: string,
    supressMessage?: boolean,
    headers?: Record<string, string>,
    /* When below field is set to (false | undefined), any 403 reqeust will redirect user to login page */
    inLoginPage?: boolean,
    onUploadProgress?: Dispatch<SetStateAction<number>>
}

type ReturnType<T> = {
    success: boolean,
    data: T
}

const useAxios = () => {
    const Navigate = useNavigate()

    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState<object>({})
    const { authHeaders } = useAuth()

    const request = async <T>({ method, endpoint, message, data: payload, headers, inLoginPage, supressMessage, onUploadProgress }: AxiosRequest) => {
        setLoading(true);
        try {
            const response = await axios.request<ReturnType<T>>({
                method,
                url: `${BACKEND_URL}${endpoint}`,
                data: payload,
                headers: headers ?? { Authorization: `Bearer ${authHeaders && authHeaders.token}` },
                onUploadProgress: (progressEvent) => {
                    if (onUploadProgress) {
                        onUploadProgress(Math.round((progressEvent.loaded * 100) / (progressEvent.total as number) ))
                    }
                },
            });
            setData(response.data)
            if (!supressMessage) { toast.success(message || "Success"); }
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.data?.message || "An error occurred"
                toast.error(errorMessage)
                if (!inLoginPage && error.response?.status === 403) { Navigate('/login', { replace: true }) }
            } else {
                toast.error("An error occurred")
            }
            throw error;
        } finally {
            setLoading(false)
        }
    }

    return { data, request, isLoading };
}

export default useAxios
