

export const ImageLogin = () => {
    return (
        <Box
            flex={{ base: 1, md: 1.5, lg: 2 }}
            display={{ base: "none", md: "block" }}
            overflow="hidden"
            position="relative"
        >
            <Image
                src={imageSwab}
                alt="imagem conceitual de pessoa fazendo swab"
                style={{
                    height: "100vh",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                }}
            />
            )
}