import { ShowSearchContainer } from "..";

interface Props {
  children: React.ReactNode;
}

export const ShowSearchView = ({ children }: Props) => {
  return (
    <>
      <ShowSearchContainer>
        <div style={{ display: 'flex', margin: '0 auto', justifyContent: 'center', width: '95%', alignItems: 'center', flexDirection: 'column' }}>
          {children}
          <div style={{ display: 'flex', justifyContent: 'flex-start', width: '82%' }}>
            <h3 style={{ marginBlock: '1rem', textAlign: 'start' }}>Just Added</h3>
          </div>
        </div>
      </ShowSearchContainer>
    </>
  )
}