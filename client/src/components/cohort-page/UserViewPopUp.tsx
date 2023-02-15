import React from 'react';
import styled from 'styled-components';

interface PopUpProps {
    content: any;
    handleClose: any;
}

const UserViewPopUp: React.FC<PopUpProps> = ({ content, handleClose }) => {
    return (
        <Overlay>
            <PopUp>
                <div>
                    <CloseX onClick={handleClose}>X</CloseX>
                    {content}
                </div>
            </PopUp>
        </Overlay>
    );
};

export default UserViewPopUp;

const PopUp = styled.div`
    background-color: var(--tertiary-color);
    color: var(--tertiary-color);
    position: absolute;
    transform: translateY(-50%);
    margin-left: -150px;
    width: 30vw;
    height: 30vh;
    left: 50%;
    top: 50%;
    background-color: var(--background-color);
    padding: 40px;
    justify-content: center;
    text-align: center;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background-color: var(--tertiary-color);
    background-color: rgba(0, 0, 0, 0.75);
`;

const CloseX = styled.span`
    content: 'x';
    cursor: pointer;
    position: relative;
    color: var(--secondary-color);
`;
