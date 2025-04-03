export function DateMask(value: string) {
    return new Date(value).toLocaleDateString("pt-BR");
}