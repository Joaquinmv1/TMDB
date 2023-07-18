import { IoMdHome } from "react-icons/io";
import { IconType } from "react-icons";
import { BiCameraMovie } from "react-icons/bi";
// import { PiTelevisionSimpleBold } from "react-icons/";
import { HeaderSidebar, SidebarLi, SidebarMain } from ".";
import { filterOptions } from "../../../constants/const";

interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const iconMap: Record<string, IconType> = {
  IoMdHome, 
  BiCameraMovie,
};

export const Sidebar = ({ selectedCategory, setSelectedCategory }: SidebarProps) => {
  return (
    <>
      <SidebarMain>
        <HeaderSidebar>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
          <h3>Hi, Joaquin!</h3>
        </HeaderSidebar>
        <ul>
          {filterOptions.map((value) => {
            const IconComponent = iconMap[value.icon];
            return (
              <SidebarLi
                className="sidebar-li"
                style={{ backgroundColor: selectedCategory === value.value ? "#48c3db" : '', color: '#fff', width: '100%' }}
                onClick={() => setSelectedCategory(value.value)}
                key={value.label}
              >
                <div style={{ display: 'flex' }}>
                  <p>{IconComponent && <IconComponent />}</p>
                  <span>{value.label}</span>
                </div>
              </SidebarLi>
            );
          })}
        </ul>
        <div style={{ margin: '0 auto' }}>
          Copyright 2023 @TMDB
        </div>
      </SidebarMain>
    </>
  );
};
