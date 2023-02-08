import { useState } from 'react';

import WeeklyContent from './WeeklyContent';
import styled from 'styled-components';

const WeekListItem: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const ListItem = styled.li`
    background-color: var(--secondary-color);
    margin: 5px 0px;
    `
    return (
        <ListItem onClick={() => setIsOpen(!isOpen)}>
            Week
            <WeeklyContent isOpen={isOpen} />
        </ListItem>
    );
};

export default WeekListItem;
