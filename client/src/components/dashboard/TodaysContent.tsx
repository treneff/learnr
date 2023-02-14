import styled from "styled-components";

interface ContentProps {
    title: string;
    detail: string;
}

const TodaysContent: React.FC<ContentProps> = ({ title }) => {
    return (
        <>
            <DayContent>{title}</DayContent>
        </>
    );
};

export default TodaysContent;

const DayContent = styled.p`
    color: var(--tertiary-color);
`
