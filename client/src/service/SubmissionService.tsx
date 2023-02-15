const baseURL = 'http://localhost:8080/api/submissions/';

const SubmissionsService = {

    getSubmissions() {
        return fetch(baseURL).then((res) => res.json());
    },

    getSubmissionsByStudentId(id:number) {
        return fetch(baseURL + "?student=" + id).then((res) => res.json());
    },
    
    postSubmission(contentId:number, studentId:number, url:string, difficulty_level:number, comment:string) {
        return fetch(baseURL, {
            method: "POST",
            body: JSON.stringify({
                contentId: contentId,
                studentId: studentId,
                url: url,
                difficulty_level: difficulty_level,
                comment: comment
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                console.log(res);
                return res.json();
            })
    }

}

export default SubmissionsService;