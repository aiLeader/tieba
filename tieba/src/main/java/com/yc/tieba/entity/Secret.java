package com.yc.tieba.entity;

import java.util.Date;

public class Secret {
	private String userida;
	private String useridb;
	private Date stimes;
	private Integer sstatus;//是否系统推送
	private Integer sstate;//是否删除
	public Secret() {
		// TODO Auto-generated constructor stub
	}
	public Secret(String userida, String useridb, Date stimes, Integer sstatus, Integer sstate) {
		this.userida = userida;
		this.useridb = useridb;
		this.stimes = stimes;
		this.sstatus = sstatus;
		this.sstate = sstate;
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
	public Date getStimes() {
		return stimes;
	}
	public void setStimes(Date stimes) {
		this.stimes = stimes;
	}
	public Integer getSstatus() {
		return sstatus;
	}
	public void setSstatus(Integer sstatus) {
		this.sstatus = sstatus;
	}
	public Integer getSstate() {
		return sstate;
	}
	public void setSstate(Integer sstate) {
		this.sstate = sstate;
	}
	@Override
	public String toString() {
		return "\nSecret [userida=" + userida + ", useridb=" + useridb + ", stimes=" + stimes + ", sstatus=" + sstatus
				+ ", sstate=" + sstate + "]";
	}
	
}
