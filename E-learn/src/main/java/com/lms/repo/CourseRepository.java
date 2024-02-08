package com.lms.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lms.bean.Course;

@Repository
public interface CourseRepository extends  JpaRepository<Course, Long> {

	

}
