import React from 'react'

export interface ModalContextState {
    onClose(): void
}

export const ModalContext = React.createContext<ModalContextState>({} as ModalContextState)

export function useModal(): ModalContextState {
    return React.useContext(ModalContext)
}
