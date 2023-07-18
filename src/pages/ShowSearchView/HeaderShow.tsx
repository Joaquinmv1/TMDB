import { AiOutlineSearch } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"
import { IoMdNotificationsOutline } from "react-icons/io"
import { ContainerSvgs } from "."

export const HeaderShow = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '50px', alignItems: 'center', width: '83%', marginBlock: '1rem' }}>
        <h3>Featured</h3>
        <ContainerSvgs>
          <AiOutlineSearch />
          <BsBookmark />
          <IoMdNotificationsOutline />
        </ContainerSvgs>
      </div>
    </>
  )
}