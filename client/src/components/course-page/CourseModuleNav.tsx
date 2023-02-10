import styled from 'styled-components';

const CourseModuleNav = () => {
    return (
        <nav>
            <ModuleMenuList>
                <ModuleButton>Python</ModuleButton>
                <ModuleButton>Javascript</ModuleButton>
                <ModuleButton>Java</ModuleButton>
            </ModuleMenuList>
        </nav>
    );
};

export default CourseModuleNav;

const ModuleMenuList = styled.ul`
    display: flex;
    justify-content: center;
    gap:2rem;
    height:2rem;
    align-items:center;
`;
const ModuleButton = styled.li`
    background:var(--tertiary-color);
    color:white;
    padding:5px;
    border-radius:3px;
`