import styled from "styled-components";

export const Container = styled.div`
    padding-top: 3rem;
    text-align: left;
    color: #ea9f11;
`;

export const HorizontalLine = styled.hr`
    border-top: 3px dotted wheat;
`;

export const ParentText = styled.h5`
    padding-left: 14px;
`;

export const Text = styled.span`
    padding-left: 2px;
    color: black;
`;

export const Field = styled.p`
    padding-left: 14px;
`;

export const KidContainer = styled.div`
    padding-top: 1rem;
    text-align: left;
    color: #ea9f11;
`;

export const ImmuStatus = styled.span`
    padding-left: 2px;
    color: ${(props) => (props.status === "Pending" ? "red" : "green")};
`;

export const FieldFlex = styled.span`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    ${"" /* padding-left: 14px; */}
`;
