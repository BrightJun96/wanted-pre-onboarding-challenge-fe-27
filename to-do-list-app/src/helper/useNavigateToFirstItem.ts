import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

/**
 * @description 첫 번째 항목으로 이동하는 로직을 추상화한 훅
 * @param items - 목록 배열
 * @param getId - 항목에서 ID를 추출하는 함수
 * @param generatePath - ID를 기반으로 경로를 생성하는 함수
 */
function useNavigateToFirstItem<T>({
                                       items,
                                       getId,
                                       generatePath,
                                   }: {
    items: T[];
    getId: (item: T) => string | number;
    generatePath: (id: string | number) => string;
}) {
    const navigate = useNavigate();

    useEffect(() => {
        if (items.length > 0) {
            const firstItemId = getId(items[0]);
            navigate(generatePath(firstItemId));
        }
    }, [items]);
}

export default useNavigateToFirstItem
