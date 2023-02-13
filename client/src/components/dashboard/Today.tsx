import React, { useEffect, useState } from "react";
import TodaysContent from "./TodaysContent";


interface DayProps {
    dayTitle: string,
    weekNumber: Number,
    dayNumber: Number,
    content: Array<ContentType>,
}

type ContentType = {
    title: string;
    detail: string;
    day: DayType;
}


type DayType = {
    dayTitle: string;
    weekNumber: Number;
    dayNumber: Number;
    course: Object;
    content: Array<ContentType>;
}

const Today: React.FC<DayProps> = ({dayTitle, content, weekNumber, dayNumber}) => {

    // Need to pull in a day to display through day service fetch on page load
    

    return(<>
        <p><b>{dayTitle}</b></p>
        Week: {weekNumber}
        Day: {dayNumber}
       {content.map((content: ContentType) => {
        return <TodaysContent title={content.title} detail={content.detail}/>
       })}
    </>)
};

export default Today;