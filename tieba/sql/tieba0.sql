--管理员
create table admin(
	aid varchar2(5) primary key,
	aname varchar2(20) unique not null,
	apassword varchar2(40) default 'a',
	asex  CHAR(2) DEFAULT '男'  CONSTRAINT admin_asex CHECK(asex IN('男','女')),
	aemail varchar2(40) unique,
	apic varchar2(100)
)
--用户(板块管理员，普通用户)
create table users(
	userid varchar2(5) primary key,
	uname varchar2(20) unique not null,
    password varchar2(40) default 'a',
    birthday varchar2(20),
    sex  CHAR(3) DEFAULT '男'  CONSTRAINT users_sex CHECK(sex IN('男','女')),
    telephone varchar2(20) unique,
    email varchar2(40) unique,
    address varchar2(40),
    picPath varchar2(100),
    signs varchar2(50),--签名
    num number DEFAULT 0,--经验值
    regDate date,--注册日期
    status NUMBER DEFAULT 0 CONSTRAINT users_status CHECK(status IN(0,1,2)),--是否被禁言 2删除
    previl NUMBER DEFAULT 0 CONSTRAINT users_previl CHECK(previl IN(0,1)), --权限（0用户,1板块管理员）
    uremark varchar2(20)
)

create sequence users_id start with 1000;--用户ＩＤ

insert into users(userid,uname,password,birthday,sex,telephone,email,address,picPath,signs,num,regDate) values(users_id.nextval||'','莱因哈特','a','2017-03-13','男','12345678911','154131546@qq.com','湖南省衡阳市',null,'努巴尼是个好地方',0,sysdate);
select * from users;
--板块管理员
create table typeadmin(
    taid varchar2(5) primary key,--板块
    userid varchar2(5) constraint fk_typeadmin_userid references users(userid),--用户
    taremark varchar2(20)
)

create  sequence typeadmin_id start with 100000;--版块ID
--板块信息表
drop table types;
create table types(
    tid varchar2(5) primary key,   --版块id
    tname varchar2(50) unique not null,  --版名
    tnum  number,  --版块帖子数量
    tdesc varchar2(100),  --版块格言
    tstate number DEFAULT 1 CONSTRAINT types_tstate CHECK(tstate IN(-1,0,1)),  --版块状态 是否可用(0删除，1可用，-1不可用)
    tremark varchar2(20)
)

drop sequence types_id;
create sequence types_id start with 100;
insert into types(tid,tname,tnum,tdesc,tstate) values(types_id.nextval,'新浪新闻',0,'新鲜事',1);
select * from types where tstate in(1,-1);
update types set tstate = 0 where tid='105';
delete from types where tid=102;

insert into TYPES
select types_id.nextval,
dbms_random.string('l',dbms_random.value(5, 10)),0,
dbms_random.string('l',dbms_random.value(5, 20)),1,'' from dual connect by level <= 10;


create sequence note_id start with 100000;--帖子信息ID
--帖子信息表
create table note(
    nid varchar2(5) primary key,
    ntitle varchar2(50), --帖子标题
    ncontent varchar2(100), --帖子内容
    tid varchar2(5) constraint fk_note_tid references types(tid),    --属于哪个版块   外键
    userid varchar2(5) constraint fk_note_userid references users(userid), --发帖人         外键
    ntimes date,  --发帖时间
    nnum number,--评论数量
	naccess number,--帖子访问量
	ngood number,--帖子点赞数量
    nstatus  NUMBER DEFAULT 0 CONSTRAINT note_nstatus CHECK(nstatus IN(0,1)),--是否删除
    nstates NUMBER DEFAULT 0 CONSTRAINT note_nstates CHECK(nstates IN(0,1)),--是否锁帖（是否能够评论）
    nremark varchar2(20)
)

create sequence comments_id start with 100000;--评论ID
--评论表
create table comments(
    cid varchar2(5) primary key,
    nid varchar2(5) constraint fk_comments_nid references note(nid),--评论哪个帖子 外键
    userid varchar2(5) constraint fk_comments_userid references users(userid),--用户评论 外键
    pcid varchar2(5), --判断是插楼
    ccontent varchar2(100),--评论内容
    ctime varchar2(20),  --评论时间
    cgood number,--点赞数量
    cstatus NUMBER DEFAULT 0 CONSTRAINT comments_cstatus CHECK(cstatus IN(0,1)),--是否删除
    cstates NUMBER DEFAULT 0 CONSTRAINT comments_cstates CHECK(cstates IN(0,1)),--私密状态
    cremark varchar2(20)
)
--收藏表
 create table store(
    userid varchar2(5) constraint fk_store_userid references users(userid),--用户id 外键 
    tid varchar2(5) constraint fk_store_tid references types(tid),--版块id  外键
    sttimes date,
    ststatus NUMBER DEFAULT 0 CONSTRAINT store_status CHECK(status IN(0,1)),--是否删除
    stremark varchar2(20)
)
--关注表
create table concern(
    userida varchar2(5) constraint fk_concern_userida references users(userid),--关注人
    useridb varchar2(5) constraint fk_concern_useridb references users(userid),--被关注人
    cotimes date,--关注时间
    costatus NUMBER DEFAULT 0 CONSTRAINT concern_cstatus CHECK(cstatus IN(0,1)),--是否取消关注
    coremark varchar2(20)
)
--私信表
create table secret(
    userida varchar2(5) constraint fk_secret_userida references users(userid),--发送人
    useridb varchar2(5) constraint fk_secret_useridb references users(userid),--接收人
    stimes date,--私信时间
    sstatus NUMBER DEFAULT 0 CONSTRAINT secret_sstatus CHECK(sstatus IN(0,1)),--是否为系统推送消息
    sstate NUMBER DEFAULT 0 CONSTRAINT secret_sstate CHECK(sstate IN(0,1)),--是否删除，已读
    sremark varchar2(20)
)
