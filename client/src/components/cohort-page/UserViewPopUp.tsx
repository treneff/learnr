import React from 'react';
import styled from 'styled-components';
import { PopupOverlay, PopUp, CloseX } from "../../GlobalStyles";


interface PopUpProps {
    content: any;
    handleClose: any;
}

const UserViewPopUp: React.FC<PopUpProps> = ({ content, handleClose }) => {
    return (
        <PopupOverlay>
            <PopUp>
                <div>
                    <CloseX onClick={handleClose}>X</CloseX>
                    {content}
                </div>
            </PopUp>
        </PopupOverlay>
    );
};

export default UserViewPopUp;
