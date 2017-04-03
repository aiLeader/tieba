package com.yc.tieba.entity;

import java.util.Date;

public class Concern {
	private String userida;
	private String useridb;
	private Date cotimes;
	private Integer cstatus;
	public Concern() {
		// TODO Auto-generated constructor stub
	}
	public Concern(String userida, String useridb, Date cotimes, Integer cstatus) {
		this.userida = userida;
		this.useridb = useridb;
		this.cotimes = cotimes;
		this.cstatus = cstatus;
	}
	public String getUserida() {
		return userida;
	}
	public void setUserida(String userida) {
		this.userida = userida;
	}
	public String getUseridb() {
		return useridb;
	}
	public void setUseridb(String useridb) {
		this.useridb = useridb;
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
		return "\nConcern [userida=" + userida + ", useridb=" + useridb + ", cotimes=" + cotimes + ", cstatus=" + cstatus
				+ "]";
	}
	
}
