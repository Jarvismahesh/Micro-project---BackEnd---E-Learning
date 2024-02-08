package com.lms.service;



import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.web.bind.annotation.PathVariable;


import com.lms.bean.Course;
import com.lms.repo.CourseRepository;

@Service
public class CourseService {

	@Autowired
	private CourseRepository courseRep;
	
	 
	public List<Course> getAllCourse() {
		Iterator<Course> it=courseRep.findAll().iterator();
		List<Course> lst ;
		lst = new ArrayList<>();
		while (it.hasNext()) {
			lst.add(it.next());	
		}
		return lst;
		
	}

	public boolean insertAndUpdateCourse(Course course) {
		courseRep.save(course);
		return true;
	}	


	public boolean deleteCourse(@PathVariable("course_id") long id) {
		courseRep.deleteById(id);
		return true;
	}




}
