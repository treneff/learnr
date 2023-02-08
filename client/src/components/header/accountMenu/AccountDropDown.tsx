import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

type DropDownProps = {
    options: string[];
    showDropDown: boolean;
    toggleDropDown: Function;
    optionSelection: Function;
};

const DropDown = ({
    options,
    optionSelection,
}: DropDownProps) => {

    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    const onClickHandler = (option: string): void => {
        optionSelection(option);
    };

    useEffect(() => {
        setShowDropDown(showDropDown);
    }, [showDropDown]);

    return(
        <>
            <DropDownBox className={showDropDown ? 'dropdown' : 'dropdown active'}>
            {options.map(
                (option: string, index: number)  => {
                    return (
                        <DropDownItem key={index} onClick={(): void => {
                            onClickHandler(option);
                        }}
                        >
                            {option}
                        </DropDownItem>
                    );
                }
            )}
            </DropDownBox>
        </>

    )
};

export default DropDown;

const DropDownBox = styled.div`  
  position: absolute;
  top: 38px;
  left: -1px;
  border: 1px solid rgb(197, 197, 197);
  background: #fff;
  padding: 0;
  color: var(--tertiary-color);
  text-align: left;
  border-radius: 0.25rem;
  width: 9vw;
  text-align: center;
`

const DropDownItem = styled.p`
  margin: 0;
  padding: 0.375rem 0.88rem;
  border-bottom: 1px solid rgb(235, 235, 235);
  min-width: 140px;
  :hover{
    background-color: var(--tertiary-color);
    color: var(--background-color);
  }
`