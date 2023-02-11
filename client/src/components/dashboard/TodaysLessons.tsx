import React, { useEffect, useState } from "react";
import DayService from "../../service/DayService";


interface DayProps {
    title: string,
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
    title: string;
    weekNumber: Number;
    dayNumber: Number;
    course: Object;
    content: Array<ContentType>;
}

const TodaysLessons: React.FC<DayProps> = ({title, content, weekNumber, dayNumber}) => {

    // Need to pull in a day to display through day service fetch on page load
    

    return(<>
        <p><b>{title}</b></p>
       <p>{content[0].title}</p> 
        <p>{content[0].detail}</p>
    </>)
};

export default TodaysLessons;