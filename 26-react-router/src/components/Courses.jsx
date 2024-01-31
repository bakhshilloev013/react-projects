import { Link, useLocation } from "react-router-dom";
import courses from "../data/courses";

const Courses = () => {
    const location = useLocation();
    console.log(location);
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
