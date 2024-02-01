import { Link, useLocation } from "react-router-dom";
import queryString from 'query-string';
import courses from "../data/courses";
import { useState } from "react";

function sortCourses(courses, key) {
    const sortedCourses = [...courses];
    sortedCourses.sort((a, b) => a[key] > b[key]? 1 : -1 );
    return sortCourses;
}

const Courses = () => {
    const location = useLocation();
    const query = queryString.parse(location.search);
    const [sortKey, setSortKey] = useState(query.sort);
    console.log(sortCourses(courses, sortKey));
    const [sortedCourses, setSortedCourses] = useState();
    return (
        <>
            <h1>Courses</h1>
            {courses.map((course) => (
                <div key={course.id}>
                    <Link className="courseLink" to={course.slug} course={course}>{course.title}</Link>
                    <br />
                </div>
            ))}
        </>
    );
};

export default Courses;
