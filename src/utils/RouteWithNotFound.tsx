import { Route, Routes } from "react-router-dom"

interface RouteWithNotFoundProps {
  children: React.ReactNode
}

export const RouteWithNotFound = ({ children }: RouteWithNotFoundProps) => {
  return (
    <>
      <Routes>
        <Route path="*" element={<>Not found</>} />
        {children}
      </Routes>
    </>
  )
}