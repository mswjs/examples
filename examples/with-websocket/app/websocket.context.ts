import { createContext } from 'react'

export const WebSocketContext = createContext<WebSocket | undefined>(undefined)
