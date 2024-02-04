import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import courses from "../data/courses";
import { useEffect, useState } from "react";

const SORT_KEYS = ["slug", "title", "id"];

function sortCourses(arr, key) {
    const sortedCourses = [...arr];
    if (!key || !SORT_KEYS.includes(key)) {
        return sortedCourses;
    }
    sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    return sortedCourses;
}

const Courses = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const query = queryString.parse(location.search);
    const [sortKey, setSortKey] = useState(query.sort);
    const [sortedCourses, setSortedCourses] = useState(
        sortCourses(courses, sortKey)
    );
    useEffect(() => {
        if (!SORT_KEYS.includes(sortKey)) {
            navigate(".");
            setSortKey();
            setSortedCourses([...courses]);
        }
    }, [sortKey, navigate]);
    return (
        <>
            <h1>{sortKey ? `Courses sorted by ${sortKey}` : "Courses"}</h1>
            {sortedCourses.map((course) => (
                <div key={course.id}>
                    <Link
                        className="courseLink"
                        to={course.slug}
                        course={course}
                    >
                        {course.title}
                    </Link>
                    <br />
                </div>
            ))}
        </>
    );
};

export default Courses;
