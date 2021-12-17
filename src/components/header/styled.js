import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.25rem;
  input {
    border: 1px solid #b4a495;
    border-radius: 0.5rem;
    width: 100%;
    height: 2.75rem;
    padding: 0.5rem;
    color: #13323b;
    font-weight: 500;

    &:focus {
    outline: none;
    }
  }
  button {
    background-color: #13323b;
    padding: 0.5rem 1rem;
    margin: 0 1rem;
    border-radius: 0.5rem;
    &:hover {
      opacity: 0.9;
    }
    span {
      font-weight: 600;
      color: #eff5dd;
    }
  }

  i {
    display: flex;
    align-items: center;
    margin-right: 1rem;
    font-size: 1.5rem;
    color: #13323b;
  }
`;