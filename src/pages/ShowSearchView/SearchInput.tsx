import { AiOutlineSearch } from "react-icons/ai"
import { InputContainer } from "."

interface Props {
  // handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  searchText:string
}

export const SearchInput = (props: Props) => {
  return (
    <>
      <InputContainer>
        <input type="text" value={props.searchText} placeholder="Search..." />
        <AiOutlineSearch style={{ position: 'relative', right: '30px' }} />
      </InputContainer>
    </>
  )
}