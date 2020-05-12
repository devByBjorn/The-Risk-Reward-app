import styled from 'styled-components'

const Nav = styled.nav`
position: absolute;
display: flex;
top: 0;
width: 100%;
background: #fafafa;
z-index: 999;
  
@media(max-width: 850px) {
  overflow-x: auto;
}
`

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  border:none;
  width: 100%;
`

const Li = styled.li`
  display: inline-block;
  position: relative;
  flex: 1;
  min-height: 100px;
  min-width: 125px;

  @media(max-width: 850px) {
    white-space: wrap;
  }
`
// clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
//  width:249px;
const Button = styled.button`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;

  background: #fff;
  border: none;
  border-bottom: 1px solid #f50057;
  color: #1b3a57;
  font-size: 1.4rem;
  margin-bottom: -1px;
  padding: 0 1.5rem;
  text-align: left;

  span {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  &:hover {
    background: #eee;
    cursor: pointer;
  }

  &:disabled {
    background: #fafafa;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    color: #bdbdbd;
    padding: 0 1.5rem;

    &:hover {
      background: #fafafa;
      cursor: default;
    }

  &:focused {
    outline: none;
  }

  @media(max-width: 850px) {
    font-size: 1.2rem;
    padding: 5px;
  };
`
export { Nav, Ul, Li, Button }