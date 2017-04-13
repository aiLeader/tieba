package com.yc.tieba.entity;

import java.util.Date;

public class Users { 
	private String userid;
	private String uname;
	private String password;
	private String sex;
	private String email;
	private String address;
	private String telephone;
	private String birthday;
	private String picPath; //头像路径
	private String signs;  //签名
	private Integer num;  //经验值
	private String regDate;  //注册日期
	private Integer status;  //是否被禁言 0 1
	private Integer previl;     //权限 0 1 2
	public Users() {
	}
	public Users(String userid, String uname, String password, String sex, String email, String address,
			String telephone, String birthday, String picPath, String signs, Integer num, String regDate, Integer status,
			Integer previl) {
		this.userid = userid;
		this.uname = uname;
		this.password = password;
		this.sex = sex;
		this.email = email;
		this.address = address;
		this.telephone = telephone;
		this.birthday = birthday;
		this.picPath = picPath;
		this.signs = signs;
		this.num = num;
		this.regDate = regDate;
		this.status = status;
		this.previl = previl;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getTelephone() {
		return telephone;
	}
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	public String getBirthday() {
		return birthday;
	}
	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}
	public String getPicPath() {
		return picPath;
	}
	public void setPicPath(String picPath) {
		this.picPath = picPath;
	}
	public String getSigns() {
		return signs;
	}
	public void setSigns(String signs) {
		this.signs = signs;
	}
	public Integer getNum() {
		return num;
	}
	public void setNum(Integer num) {
		this.num = num;
	}
	public String getRegDate() {
		return regDate;
	}
	public void setRegDate(String regDate) {
		this.regDate = regDate;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	public Integer getPrevil() {
		return previl;
	}
	public void setPrevil(Integer previl) {
		this.previl = previl;
	}
	@Override
	public String toString() {
		return "\nUsers [userid=" + userid + ", uname=" + uname + ", password=" + password + ", sex=" + sex + ", email="
				+ email + ", address=" + address + ", telephone=" + telephone + ", birthday=" + birthday + ", picPath="
				+ picPath + ", signs=" + signs + ", num=" + num + ", regDate=" + regDate + ", status=" + status
				+ ", previl=" + previl + "]";
	}
	
	

}

