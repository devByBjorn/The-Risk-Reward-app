import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

const Nav = styled.nav`
position: absolute;
display: flex;
top: 0;
width: 100%;
background: #fafafa;
`

const Ul = styled.ul`
  display: flex;
  align-items: stretch;
  list-style-type: none;
  border:none;
  border-bottom: 1px solid #eee;
  width: 100%;
`

const Li = styled.li`
  display: inline-block;
  position: relative;
  width: 250px;
  height: 100px;
 

  &:last-child: {
    background: #fafafa;
    clip-path: none;
  }
`
// clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
const Button = styled.button`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width:249px;
  width: 100%;

  background: #fff;
  border: none;
  border-bottom: 1px solid #f50057;
  color: #1b3a57;
  font-size: 1.4rem;
  margin-bottom: -1px;
  padding-left: 2rem;
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
    color: #bdbdbd;

    &:hover {
      background: #fafafa;
      cursor: default;
    }

  &:focused {
    outline: none;
  }
`
//clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);

const formNavStyled = makeStyles((theme) => ({
  nav: {
    position: 'absolute',
    display: 'flex',
    width: '100%',
    background: '#fafafa',
  },
  list: {
    display: 'flex',
    alignItems: 'strech',
    // color: '#3f51b5',
    listStyleType: 'none',
  },
  listItem: {
    position: 'relative',
    width: '25rem',
    height: '100%',

    '&:first-child': {
      borderLeft: '1px solid #f50057'
    }
  }
}))

export default formNavStyled
export { Nav, Ul, Li, Button }