import styled from "styled-components";

export const FormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Form = styled("div")`
  @apply min-w-full sm:min-w-[450px] max-w-full sm:max-w-[600px] border md:border-gray-300 rounded-lg p-4 w-[25vw];
`;
