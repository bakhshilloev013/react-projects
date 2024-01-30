import { Link, NavLink } from 'react-router-dom';

const SingleCourse = ({ course }) => {
    return (
        <>
            <NavLink to={`/courses/${course.slug}`}>{course.title}</NavLink>
            <br />
        </>
    );
};

export default SingleCourse;
