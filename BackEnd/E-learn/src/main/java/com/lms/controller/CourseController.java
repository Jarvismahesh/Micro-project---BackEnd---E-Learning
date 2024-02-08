package com.lms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.lms.bean.Course;
import com.lms.service.CourseService;


@RestController
@CrossOrigin("http://localhost:4200")
public class CourseController {
	
	@Autowired
	CourseService storage;
	
	@PostMapping("/performInsertCourse")
	public void performInsert(@RequestBody Course coure) {
		storage.insertAndUpdateCourse(coure);
	
	}
	
	@PutMapping("/performUpdateCourse")
	public void performUpdate(@RequestBody Course course) {
		storage.insertAndUpdateCourse(course);
	}

	@DeleteMapping("/performDeleteCourse/{course_id}")
	public String performDelete(@PathVariable("course_id") long id) {
		storage.deleteCourse(id);
		return " Deleted";
	}
	
	@GetMapping("/ViewAllCourse")
	public List<Course> getAll() {
		List<Course> course =  storage.getAllCourse();
		
		return course;
	}
		
	
}
