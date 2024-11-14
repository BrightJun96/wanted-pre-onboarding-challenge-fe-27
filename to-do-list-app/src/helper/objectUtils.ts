
// 객체 내부의 undefined 값을 제거하는 함수
export function filterUndefinedValues<T extends object>(obj: T): Record<string, string> {
    return Object.fromEntries(
        Object.entries(obj).filter(([_, v]) => v !== undefined)
    ) as Record<string, string>;
}
