import styled from 'styled-components';

interface WeeklyContentProps {
    isOpen: boolean;
    key: number;
    dailyContent: any;
}
const WeeklyContent: React.FC<WeeklyContentProps> = ({ dailyContent, isOpen }) => {
    return <Content style={{ maxHeight: isOpen ? '100%' : 0 }}>{dailyContent.title}</Content>;
};

export default WeeklyContent;

const Content = styled.ul`
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;
`;
