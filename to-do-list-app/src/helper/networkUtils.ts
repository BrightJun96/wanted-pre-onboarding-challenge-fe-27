// parameter type
interface NetworkSuccess {
    alertMessage: string;
    redirectUrl?: string;
}
// network 성공시, 알럿과 메시지
export function handleNetworkSuccess({alertMessage,redirectUrl}:NetworkSuccess) {

    alert(alertMessage);
    if(redirectUrl) {
        window.location.href = redirectUrl;
    }

}


// network 실패시, 에러 메시지 처리
export function handleNetworkError(error:unknown) {
    if (error instanceof Error) {
        console.error(error.message);
        alert(error.message);

    } else {
        console.error("An unknown error occurred");
    }
}

// network 요청 실행
export async function executeNetworkRequest<P, T>({
                                                      requestFunction,
                                                      requestParams,
                                                      onSuccess,
                                                      onError,
                                                  }: {
    requestFunction: (params: P) => Promise<T> | (() => Promise<T>); // 인자가 없을 수도 있음
    requestParams?: P; // 선택적 인자
    onSuccess: () => void;
    onError: (error: unknown) => void;
}) {
    try {
        const success =
            requestParams !== undefined
                ? await (requestFunction as (params: P) => Promise<T>)(requestParams) // 인자 있는 경우
                : await (requestFunction as () => Promise<T>)(); // 인자 없는 경우
        if (success) {
            onSuccess();
        }
    } catch (error) {
        onError(error);
    }
}

