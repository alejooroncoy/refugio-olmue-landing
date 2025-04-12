import type React from "react"

import { useState, useEffect, useRef } from "react"

const TOAST_TIMEOUT = 5000

export interface Toast {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
  variant?: "default" | "destructive"
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])
  const toastTimeoutsRef = useRef<NodeJS.Timeout[]>([])

  useEffect(() => {
    return () => {
      toastTimeoutsRef.current.forEach((timeout) => clearTimeout(timeout))
    }
  }, [])

  function toast({ title, description, action, ...props }: Omit<Toast, "id">) {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = {
      id,
      title,
      description,
      action,
      ...props,
    }

    setToasts((prevToasts) => [...prevToasts, newToast])

    const timeoutId = setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
    }, TOAST_TIMEOUT)

    toastTimeoutsRef.current.push(timeoutId)

    return {
      id,
      dismiss: () => setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id)),
    }
  }

  return {
    toast,
    toasts,
    dismiss: (toastId: string) => setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== toastId)),
  }
}
