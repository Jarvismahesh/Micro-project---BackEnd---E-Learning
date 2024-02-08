package com.lms.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.DeleteExchange;


import com.lms.bean.Login;
import com.lms.bean.User;
import com.lms.repo.UserRepository;
import com.lms.service.UserService;

@RestController
@CrossOrigin("http://localhost:4200")
public class UserController {

	@Autowired
	UserService service;
	UserRepository repo;

	@PostMapping("/register")
	public void performRegister(@RequestBody User user) {

		service.registerUser(user);
		
	}

	@RequestMapping("/login")
	public ResponseEntity<?> performLogin(@RequestBody User user) {

		Login res = service.loginUser(user);
		return ResponseEntity.ok(res);

	}
	
	@PutMapping("/performUpdateUser")
	public void performUpdate(@RequestBody User user) {
		service.insertAndUpdateUser(user);
		
	}

	@DeleteExchange("/performDeleteUser/{user_id}")
	public void performDelete(@PathVariable("user_id") long id) {
		service.deleteUser(id);
		
	}
	
	@GetMapping("/ViewAllUser")
	public List<User> getAll() {
				List<User> list;
				 list = service.getAll();
				return list;
	}


}
