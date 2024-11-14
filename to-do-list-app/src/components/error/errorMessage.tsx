
function ErrorMessage({message="데이터를 불러오는데 오류가 발생하였습니다."}:{message?:string}) {
    return (
        <p>{message}</p>
    );
}

export default ErrorMessage;
