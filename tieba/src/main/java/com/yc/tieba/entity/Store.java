package com.yc.tieba.entity;

import java.util.Date;

public class Store {
	private Users users;
	private NoteInfo notes;
	private Date sttimes;
	private Integer status;
	public Store() {
		// TODO Auto-generated constructor stub
	}
	
	public Store(Users users, NoteInfo notes, Date sttimes, Integer status) {
		super();
		this.users = users;
		this.notes = notes;
		this.sttimes = sttimes;
		this.status = status;
	}

	public Users getUsers() {
		return users;
	}
	public void setUsers(Users users) {
		this.users = users;
	}
	public NoteInfo getNotes() {
		return notes;
	}
	public void setNotes(NoteInfo notes) {
		this.notes = notes;
	}
	public Date getSttimes() {
		return sttimes;
	}
	public void setSttimes(Date sttimes) {
		this.sttimes = sttimes;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "\nStore [users=" + users + ", notes=" + notes + ", sttimes=" + sttimes + ", status=" + status + "]";
	}
	
}
