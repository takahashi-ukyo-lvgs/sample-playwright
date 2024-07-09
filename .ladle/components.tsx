import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime"
import "../app/globals.css"
import React from "react"
import { GlobalProvider } from "@ladle/react"
import { Providers } from "../app/providers"

export const Provider: GlobalProvider = ({ children }) => {
  return (
    <AppRouterContext.Provider
      value={{
        back: () => {
          // Do nothing
          console.info("back")
        },
        forward: () => {
          // Do nothing
        },
        prefetch: () => {
          // Do nothing
        },
        push: () => {
          // Do nothing
        },
        refresh: () => {
          // Do nothing
        },
        replace: () => {
          // Do nothing
        },
      }}
    >
      <Providers>{children}</Providers>
    </AppRouterContext.Provider>
  )
}
