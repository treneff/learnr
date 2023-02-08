import styled from 'styled-components';

interface IsOpenProps {
    isOpen: boolean;
}

const WeeklyContent: React.FC<IsOpenProps> = ({ isOpen }) => {
    const Content = styled.div`
        
        max-height: 0;
        overflow: hidden;
     
        transition: max-height 0.2s ease-out;
    `;
    return <Content style={{ maxHeight: isOpen ? '100%' : 0 }}>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
    </Content>;
};

export default WeeklyContent;
