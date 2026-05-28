import { Box } from "@chakra-ui/react"
import Image from "next/image"
import imageSwab from "@/assets/swab.img.png"

export const ImageLogin = () => {
    return (
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