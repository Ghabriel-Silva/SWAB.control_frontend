import { SwabCheckType } from "../types/swab";


export const defineColorTypeSwab = (v: SwabCheckType) => {
    switch (v) {
        case SwabCheckType.ATP
            : return 'orange'
        case SwabCheckType.MICRO
            : return 'green'
        case SwabCheckType.VISUAL
            : return 'blue'
    }
}