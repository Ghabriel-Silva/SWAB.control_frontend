import { SwabCheckType } from "../types/swab";


export const defineColorTypeSwab = (v: SwabCheckType) => {
    switch (v) {
        case SwabCheckType.ATP
            : return 'red'
        case SwabCheckType.MICRO
            : return 'green'
        case SwabCheckType.VISUAL
            : return 'blue'
    }
}