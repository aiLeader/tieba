package com.yc.tieba.entity;

import java.sql.Date;

public class NoteInfo {
//帖子信息表
	private String nid;
	private String ntitle;
	private String ncontent;
	private Date ntimes;
	private Integer nnum;
	private Integer naccess;
	private Integer ngood;
	private Integer nstatus;
	private Integer nstates;
	private String nremark;
	private Types types;
	private Users users;
	public NoteInfo(String nid, String ntitle, String ncontent, Date ntimes,
			Integer nnum, Integer naccess, Integer ngood, Integer nstatus,
			Integer nstates, String nremark, Types types, Users users) {
		this.nid = nid;
		this.ntitle = ntitle;
		this.ncontent = ncontent;
		this.ntimes = ntimes;
		this.nnum = nnum;
		this.naccess = naccess;
		this.ngood = ngood;
		this.nstatus = nstatus;
		this.nstates = nstates;
		this.nremark = nremark;
		this.types = types;
		this.users = users;
	}
	public NoteInfo() {
	}
	public String getNid() {
		return nid;
	}
	public void setNid(String nid) {
		this.nid = nid;
	}
	public String getNtitle() {
		return ntitle;
	}
	public void setNtitle(String ntitle) {
		this.ntitle = ntitle;
	}
	public String getNcontent() {
		return ncontent;
	}
	public void setNcontent(String ncontent) {
		this.ncontent = ncontent;
	}
	public Date getNtimes() {
		return ntimes;
	}
	public void setNtimes(Date ntimes) {
		this.ntimes = ntimes;
	}
	public Integer getNnum() {
		return nnum;
	}
	public void setNnum(Integer nnum) {
		this.nnum = nnum;
	}
	public Integer getNaccess() {
		return naccess;
	}
	public void setNaccess(Integer naccess) {
		this.naccess = naccess;
	}
	public Integer getNgood() {
		return ngood;
	}
	public void setNgood(Integer ngood) {
		this.ngood = ngood;
	}
	public Integer getNstatus() {
		return nstatus;
	}
	public void setNstatus(Integer nstatus) {
		this.nstatus = nstatus;
	}
	public Integer getNstates() {
		return nstates;
	}
	public void setNstates(Integer nstates) {
		this.nstates = nstates;
	}
	public String getNremark() {
		return nremark;
	}
	public void setNremark(String nremark) {
		this.nremark = nremark;
	}
	public Types getTypes() {
		return types;
	}
	public void setTypes(Types types) {
		this.types = types;
	}
	public Users getUsers() {
		return users;
	}
	public void setUsers(Users users) {
		this.users = users;
	}
	@Override
	public String toString() {
		return "\n\nNoteInfo [nid=" + nid + ", ntitle=" + ntitle + ", ncontent="
				+ ncontent + ", ntimes=" + ntimes + ", nnum=" + nnum
				+ ", naccess=" + naccess + ", ngood=" + ngood + ", nstatus="
				+ nstatus + ", nstates=" + nstates + ", nremark=" + nremark
				+ ", types=" + types + ", users=" + users + "]\n";
	}
}
