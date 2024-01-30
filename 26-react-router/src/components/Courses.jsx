import { Link } from "react-router-dom";
import courses from "../data/courses";

const Courses = () => {
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
