export function capitalizeWords(text: string): string {
    return text.toLocaleLowerCase("pt-BR").replace(/\S+/gu, (word) =>
        word.replace(/\p{L}/u, (letter) => letter.toLocaleUpperCase("pt-BR"))
    );
}
