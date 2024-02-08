package com.lms.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="tbl_user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name ="user_id")
	private long userId;
	
	@Column(name="user_mail")
	private String userMailId;
	
	@Column(name="user_firstname")
	private String userFirstName;
	
	@Column(name="user_lastname")
	private String userLastName;
	
	@Column(name="user_type")
	private String userType;
	
	@Column(name=" user_pwd")
	private String userPassword;
	
	
	public User() {
		super();
	}
	
	
	public User(long userId, String userMailId, String userFirstName, String userLastName, String userType,
			String userPassword) {
		super();
		this.userId = userId;
		this.userMailId = userMailId;
		this.userFirstName = userFirstName;
		this.userLastName = userLastName;
		this.userType = userType;
		this.userPassword = userPassword;
	}


	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public String getUserMailId() {
		return userMailId;
	}
	public void setUserMailId(String userMailId) {
		this.userMailId = userMailId;
	}
	public String getUserFirstName() {
		return userFirstName;
	}
	public void setUserFirstName(String userFirstName) {
		this.userFirstName = userFirstName;
	}
	public String getUserLastName() {
		return userLastName;
	}
	public void setUserLastName(String userLastName) {
		this.userLastName = userLastName;
	}
	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

}
