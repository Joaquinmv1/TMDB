import { SidebarMain } from "."
import { filterOptions } from "../../../constants/images"

export const Sidebar = () => {
  return (
    <>
       <SidebarMain>
          <h3>Nuestras categorias</h3>
          <ul>
            {filterOptions.map((value) => {
              return (
                <li key={value.label}>
                  <p>{value.label}</p>
                </li>
              )
            })}
          </ul>
          <div style={{margin: '0 auto'}}>
            Copyright 2023 @TMDB
          </div>
        </SidebarMain>
    </>
  )
}