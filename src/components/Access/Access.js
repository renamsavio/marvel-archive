import React from 'react'
import styled from 'styled-components'

const Header = styled.h1`
  width: auto
`
const Label = styled.div`
  color: red
`
const Input = styled.input`
  color: blue
`
const Wrapper = styled.div`
  top: '50%',
  width: 0 auto;
`
const Button = styled.button`
  radius: 2px;
  background-color: white;
  border: 1px solid limeGreen;
`
export const Access = ({ onMousOver, onButtonClick }) => (
  <Wrapper>
    <Header>Dados de acesso</Header>
    <Label onMouseEnter={() => onMousOver()}>Private key:</Label>
    <Input type="text" placeholder="Private key here" />
    <Label onMouseEnter={() => onMousOver()}>Public key:</Label>
    <Input type="text" placeholder="Public key here" />
    <br />
    <Button onClick={
      (e) => {
        e.preventDefault()
        onButtonClick()
      }
    }>
      Enviar
    </Button>
  </Wrapper>
)