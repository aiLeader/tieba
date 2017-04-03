package com.yc.tieba.entity;

import java.sql.Date;

public class NoteInfo {
//帖子信息表
	private String nid;
	private String ntitle;
	private String ncontent;
	private String tid;
	private String userid;
	private Date ntimes;
	private Integer nnum;
	private Integer naccess;
	private Integer ngood;
	private Integer nstatus;
	private Integer nstates;
	private String nremark;
	public NoteInfo(String nid, String ntitle, String ncontent, String tid,
			String userid, Date ntimes, Integer nnum, Integer naccess,
			Integer ngood, Integer nstatus, Integer nstates, String nremark) {
		this.nid = nid;
		this.ntitle = ntitle;
		this.ncontent = ncontent;
		this.tid = tid;
		this.userid = userid;
		this.ntimes = ntimes;
		this.nnum = nnum;
		this.naccess = naccess;
		this.ngood = ngood;
		this.nstatus = nstatus;
		this.nstates = nstates;
		this.nremark = nremark;
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
	public String getTid() {
		return tid;
	}
	public void setTid(String tid) {
		this.tid = tid;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
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
	@Override
	public String toString() {
		return "NoteInfo [nid=" + nid + ", ntitle=" + ntitle + ", ncontent="
				+ ncontent + ", tid=" + tid + ", userid=" + userid
				+ ", ntimes=" + ntimes + ", nnum=" + nnum + ", naccess="
				+ naccess + ", ngood=" + ngood + ", nstatus=" + nstatus
				+ ", nstates=" + nstates + ", nremark=" + nremark + "]";
	}
}
