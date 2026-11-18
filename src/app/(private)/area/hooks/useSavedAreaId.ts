import { useSyncExternalStore } from "react"

const storageKey = "swab.areaId"

const subscribe = () => () => {}

function readAreaId() {
    try {
        return window.localStorage.getItem(storageKey) ?? ""
    } catch {
        return ""
    }
}

export function saveAreaId(areaId: string) {
    try {
        if (areaId) {
            window.localStorage.setItem(storageKey, areaId)
        } else {
            window.localStorage.removeItem(storageKey)
        }
    } catch {
        return;
    }
}

export function useSavedAreaId() {
    return useSyncExternalStore(subscribe, readAreaId, () => null)
}
