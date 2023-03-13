import styled from "@emotion/styled";

export const Button = styled.button`
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #485987;
    text-transform: capitalize;
    color: #f2f4f7;
    font-weight: 500;
    box-shadow: 0 4px #999;
    &:not(:last-child) {
        margin-right: 15px;
    }
    &:hover, :focus {
        background-color: #303e63;
    }
    &:active {
        background-color: #485987;
        box-shadow: 0 3px #666;
        transform: translateY(2px);
    }
`;