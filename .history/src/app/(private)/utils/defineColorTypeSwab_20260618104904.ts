import { SwabCheckType } from "../types/swab";


export const defineColorTypeSwab = (v: SwabCheckType) => {
    switch(v){
        case SwabCheckType.ATP
        : return ''
        case  SwabCheckType.MICRO
        : return ''
        case SwabCheckType.VISUAL
        : return ''
    }
}