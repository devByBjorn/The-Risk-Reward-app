import styled from 'styled-components'

const LogoutButton = styled.button`
  background: transparent;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
  font-weight: 600;
  padding: 2px 10px;
  transition: background .3s ease;
  &:hover {
    background: #eee;
  }
`

export default LogoutButton