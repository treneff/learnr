const baseURL = 'http://localhost:8080/api/teachers/';

const TeacherService = {
    getTeachers() {
        return fetch(baseURL).then((res) => res.json());
    }
};

export default TeacherService;