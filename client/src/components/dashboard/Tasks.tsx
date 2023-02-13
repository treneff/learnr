import React, { useEffect, useState } from "react";
import { useAuthValue } from "../../AuthContext";
import CompletionsService from "../../service/CompletionService";
import StudentService from "../../service/StudentService";

interface TaskProps {
    content: any;
    userID: number;
}


const Tasks: React.FC<TaskProps> = ({content, userID}) => {


    const [completions, setCompletions] = useState([]);
    const [incompletions, setIncompletions] = useState<any>();

    useEffect(() => {
        CompletionsService.getCompletionsByStudentId(userID).then((completions) => {
            setCompletions(completions);

        const tempArr: Array<any> = [];
        completions.map((completion: any) => {
            if (content.id != completion.contentId){
                tempArr.push(content);
                setIncompletions(tempArr);
            }
        })
        })
    }, [])

    console.log(incompletions);

    // const taskItem = incompletions[0].map((title: string, index: number) => {
    //     return <h2>{title}</h2>
    // })

    return(<>
    <h2>Tasks</h2>
    {/* {taskItem} */}
    
    </>)
};

export default Tasks;