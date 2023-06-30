import { HeaderSidebar, SidebarLi, SidebarMain } from "."
import { filterOptions } from "../../../constants/const"

interface SidebarProps {
  selectedCategory: string
  setSelectedCategory: any
}

export const Sidebar = ({ selectedCategory, setSelectedCategory }: SidebarProps) => {
  return (
    <>
      <SidebarMain>
        <HeaderSidebar>
          <img src="onepiece.jpg" alt="header sidebar" />
        </HeaderSidebar>
        <h3>Nuestras categorias</h3>
        <ul>
          {filterOptions.map((value) => {
            return (
              <SidebarLi
                className="sidebar-li"
                style={{ backgroundColor: selectedCategory === value.value ? "#48c3db" : '', color: '#fff', width: '100%' }}
                onClick={() => setSelectedCategory(value.value)}
                key={value.label}
              >
                <span>{value.label}</span>
              </SidebarLi>
            )
          })}
        </ul>
        <div style={{ margin: '0 auto' }}>
          Copyright 2023 @TMDB
        </div>
      </SidebarMain>
    </>
  )
}
