import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const Modal = ({ children, url }) => {
  const navigate = useNavigate();
  return (
    <ModalContainer>
      <ModalContent>
        <div>{children}</div>
        <Button
          width={"150px"}
          onClick={() => {
            navigate(url);
          }}
        >
          확인
        </Button>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150%;
  background-color: rgba(0, 0, 0, 0.4);
`;
const ModalContent = styled.div`
  position: fixed;
  width: 400px !important;
  height: 200px !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 2px solid #fff;
  border-radius: 12px;
  /* padding: 15px 90px 20px 90px; */
  padding: 35px 90px 5px 90px;
  width: 15%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  font-size: 18px;
`;
const ModalCheckBtn = styled.button`
  margin: 0 auto;
  width: 100px !important;
  height: 20px !important;
  padding: 20px !important;
`;
