package com.lms.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.lms.bean.Login;
import com.lms.bean.User;
import com.lms.repo.UserRepository;


@Service
public class UserService {

	@Autowired
	UserRepository repo;
	User user;


	public boolean registerUser(User user) {
		user.setUserType("RegisteredUser");
		repo.save(user);
		return true;
	}
	
	public Login loginUser(User user) {
		User ref = repo.findByUserMailId(user.getUserMailId());
		User pass = repo.findByUserPassword(user.getUserPassword());
		if(ref!=null && pass!=null)
		{
			String value = ref.getUserPassword();
			String word = pass.getUserPassword();
			if(value.equals(word))
			{
				String res = ref.getUserType();
				if(res.equalsIgnoreCase("Admin"))
				{
					return new Login("Admin Success");
				}
				else {
					return new Login("User Success");
				}	
			}
			
			else {
				return new Login("Login Fail");
			}
		}
		return new Login("Login Fail");
		
	}
	
	
	public List<User> getAll() {
		Iterator<User> it = repo.findAll().iterator();
		List<User> lst = new ArrayList<>();
		while (it.hasNext()) {
			lst.add(it.next());
			
		}
		return lst;
	}

	public boolean insertAndUpdateUser(User user) {
		user.setUserType("RegisteredUser");
		repo.save(user);
		return true;
	}	


	public boolean deleteUser(@PathVariable("user_id") long id) {
		repo.deleteById(id);
		return true;
	}

	
	
	
	
}
