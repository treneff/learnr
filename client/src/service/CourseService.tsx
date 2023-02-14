const baseURL = 'http://localhost:8080/api/courses/';

const CourseService = {
    getCourses() {
        return fetch(baseURL).then((res) => res.json());
    },
};

export default CourseService;