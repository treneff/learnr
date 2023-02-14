const baseURL = 'http://localhost:8080/api/completions/';

const CompletionsService = {

    getCompletions() {
        return fetch(baseURL).then((res) => res.json());
    },

    getCompletionsByStudentId(id:number) {
        return fetch(baseURL + "?student=" + id).then((res) => res.json());
    },
    
    postCompletion(contentId:number, studentId:number) {
        // e.preventDefault();
        return fetch(baseURL, {
            method: "POST",
            body: JSON.stringify({
                contentId: contentId,
                studentId:studentId
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

export default CompletionsService;