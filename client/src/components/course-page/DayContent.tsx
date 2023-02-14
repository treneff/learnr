import React from 'react';
import styled from 'styled-components';
interface DayContentProps {
    openTopicNumber: number|undefined;
    content:any;
}

const DayContent:React.FC<DayContentProps> = ({openTopicNumber, content}) => {
    return (
        <Content
            style={{
                maxHeight: openTopicNumber === content.id ? '100%' : '0',
                opacity: openTopicNumber === content.id ? '1' : '0',
            }}>
            {content.detail}
        </Content>
    );
};

export default DayContent;

const Content = styled.ul`
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 1.2s, opacity 2s ease-in-out;
`;
