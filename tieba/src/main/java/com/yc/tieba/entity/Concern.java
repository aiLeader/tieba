package com.yc.tieba.entity;

import java.util.Date;

public class Concern {
	private String userida;
	private Users users;
	private Date cotimes;
	private Integer cstatus;
	public Concern() {
		// TODO Auto-generated constructor stub
	}
	
	public Concern(String userida, Users users, Date cotimes, Integer cstatus) {
		super();
		this.userida = userida;
		this.users = users;
		this.cotimes = cotimes;
		this.cstatus = cstatus;
	}

	public String getUserida() {
		return userida;
	}
	public void setUserida(String userida) {
		this.userida = userida;
	}
	
	public Users getusers() {
		return users;
	}

	public void setusers(Users users) {
		this.users = users;
	}

	public Date getCotimes() {
		return cotimes;
	}
	public void setCotimes(Date cotimes) {
		this.cotimes = cotimes;
	}
	public Integer getCstatus() {
		return cstatus;
	}
	public void setCstatus(Integer cstatus) {
		this.cstatus = cstatus;
	}

	@Override
	public String toString() {
		return "Concern [userida=" + userida + ", users=" + users + ", cotimes=" + cotimes + ", cstatus=" + cstatus
				+ "]";
	}
}
