// função resposavel para definir assitatura no header das paginas por exemplo se o nome do usuário for Laboratório fisco essa função retorna LBS 

export function getInitials(name: string): string {
    const words = name.trim().split(/\s+/)

    if (words.length === 1) {
        return words[0].slice(0, 3).toUpperCase()
    }

    return words
        .slice(0, 3)
        .map(word => word[0])
        .join('')
        .toUpperCase()
}