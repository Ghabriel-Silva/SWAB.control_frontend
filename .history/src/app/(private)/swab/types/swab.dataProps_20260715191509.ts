import React from "react";
import { SwabApiItem } from "./swab.response";

export interface SwabDataProps {
    swab: SwabApiItem,
    onSuccess?: () => void
    formRef?:React.re
}