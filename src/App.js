import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs((props) => ({
  required: props.rq,
  placeholder: props.ph || "text",
}))`
  background-color: tomato;
`;

function App() {
  return (
    <Father>
      <Input rq={true} />
      <Input rq={false} ph={"nickname"} />
    </Father>
  );
}

export default App;
