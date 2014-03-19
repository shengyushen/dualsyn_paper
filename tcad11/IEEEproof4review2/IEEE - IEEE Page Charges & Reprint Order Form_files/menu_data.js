fixMozillaZIndex=false; //Fixes Z-Index problem with Mozilla browsers but causes odd scrolling problem, toggle to see if it helps 
_subOffsetTop=2; 
_subOffsetLeft=-2;
_menuOpenDelay=1500;
_menuCloseDelay=4000;
horizontalMenuDelay = true;

with(AllImagesStyle=new mm_style()){ 
styleid=1; 
bordercolor="#000000"; 
borderstyle="solid"; 
fontstyle="normal"; 
fontweight="normal"; 
padding=3; 
} 

with(cssStyle=new mm_style()) 
{ 
onclass="topUnderlineLinksOn"; 
offclass="topUnderlineLinksOff"; 
separatorcolor="#FFFFFF"; 
separatorsize=1; 
separatorpadding=4; 
} 

with(milonic=new menuname("conferences")){ 
left="offset=-80;minimum=30";
top=168; 
screenposition="center" 
orientation="horizontal"; 
style=cssStyle; 
position="absolute"
aI("text=Conferences Home;url=javascript:trackAndLaunch('hpconf_home_oc','/web/conferences/home/index.html');pagematch=conferences/home;"); 
aI("text=Find a Conference;url=javascript:trackAndLaunch('hpconf_find_a_conf_oc','/web/conferences/search/index.html');pagematch=conferences/search;"); 
aI("text=Find a Meeting;url=javascript:trackAndLaunch('hpconf_find_a_meet_oc','http://www.ieee.org/mps');"); 
aI("text=Organize a Conference;url=javascript:trackAndLaunch('hpconf_org_a_conf_oc','/web/conferences/organizers/index.html');pagematch=conferences/organizers;"); 
aI("text=Meeting & Conf Mgmt;url=javascript:trackAndLaunch('hpconf_mcmscv_oc','/web/conferences/services/index.html');pagematch=conferences/services;"); 
aI("text=Call for Papers;url=javascript:trackAndLaunch('hpconf_cfp_oc','/web/conferences/callforpapers/index.html');pagematch=conferences/search;"); 
} 

with(milonic=new menuname("standards")){ 
left="offset=-108;minimum=30";
top=168; 
screenposition="center" 
orientation="horizontal"; 
style=cssStyle; 
position="absolute"
aI("text=Standards Home;url=javascript:trackAndLaunch('hpstd_home_oc','/web/standards/home/index.html');pagematch=standards/home;"); 
aI("text=Buy Standards;url=javascript:trackAndLaunch('hpstd_std_buy_std_oc','http://shop.ieee.org/ieeestore/');"); 
aI("text=Standards Services;url=javascript:trackAndLaunch('hpstd_std_svc_oc','http://standards.ieee.org/prod-serv/index.html');"); 
aI("text=Search Standards Projects;url=javascript:trackAndLaunch('hpstd_search_std_oc','http://standards.ieee.org/db/status/index.shtml');"); 
aI("text=Join Standards Association;url=javascript:trackAndLaunch('hpstd_join_stdassoc_oc','http://standards.ieee.org/sa-mem/index.html');"); 
}

with(milonic=new menuname("careers")){ 
left="offset=-335;minimum=30";
top=168; 
screenposition="center" 
orientation="horizontal"; 
style=cssStyle; 
position="absolute"
aI("text=Careers Home;url=javascript:trackAndLaunch('hpcar_home_oc','/web/careers/home/index.html#search');pagematch=careers;"); 
//aI("text=For Professionals;url=javascript:trackAndLaunch('hpcar_prof_oc','/web/careers/home/index.html#search');pagematch=careers;"); 
//aI("text=For Employers & Recruiters;url=/web/careers/home/index.html#employers;pagematch=careers;"); 
//aI("text=For Students;url=/web/careers/home/index.html#students;pagematch=careers;"); 
//aI("text=Career Advice & Strategy;url=/web/careers/home/index.html#advice;pagematch=careers;"); 
aI("text=Jobs at IEEE;url=javascript:trackAndLaunch('hpcar_jobs_ieee_oc','/web/careers/JobsatIEEE/Positions.html');pagematch=careers;"); 
}

with(milonic=new menuname("aboutus")){ 
left="offset=-111;minimum=30";
top=168; 
screenposition="center" 
orientation="horizontal"; 
style=cssStyle; 
position="absolute"
aI("text=About the IEEE;url=javascript:trackAndLaunch('hpabt_aboutieee_oc','/web/aboutus/home/index.html');pagematch=aboutus/home;"); 
aI("text=Newsroom;url=javascript:trackAndLaunch('hpabt_newsroom_oc','/web/aboutus/news/index.html');pagematch=aboutus/news;"); 
aI("text=IEEE Today;url=javascript:trackAndLaunch('hpabt_ieeetoday_oc','/web/aboutus/today/index.html');pagematch=aboutus/today;"); 
aI("text=History;url=javascript:trackAndLaunch('hpabt_history_oc','/web/aboutus/history/index.html');pagematch=aboutus/history;"); 
aI("text=Organization;url=javascript:trackAndLaunch('hpabt_org_oc','/web/aboutus/organizations.html');pagematch=aboutus/organizations;");  
aI("text=Vision & Mission;url=javascript:trackAndLaunch('hpabt_vis_mis_oc','/web/aboutus/visionmission.html');pagematch=aboutus/visionmission;"); 
aI("text=Awards;url=javascript:trackAndLaunch('hpabt_aw_fel_oc','/portal/pages/about/awards/index.html');pagematch=about/awards;"); 
aI("text=Elections;url=javascript:trackAndLaunch('hpabt_elections_oc','/web/aboutus/corporate/election/index.html');pagematch=corporate/election;"); 
aI("text=&amp; more;url=javascript:trackAndLaunch('hpabt_andmore_oc','/web/aboutus/home/index.html');pagematch=aboutus/home;"); 
} 

with(milonic=new menuname("membership")){ 
left="offset=-137;minimum=30";
top=168; 
screenposition="center" 
orientation="horizontal"; 
style=cssStyle; 
position="absolute"
aI("text=Membership Home;url=javascript:trackAndLaunch('hpmem_home_oc','/web/membership/home/index.html');pagematch=membership/home/index;");
aI("text=Join IEEE;url=javascript:trackAndLaunch('hpmem_join_ieee_oc','/web/membership/join/join.html');pagematch=membership/join/join;"); 
aI("text=Dues;url=javascript:trackAndLaunch('hpmem_dues_oc','/web/membership/Cost/dues.html');pagematch=membership/Cost/dues;"); 
aI("text=Qualifications;url=javascript:trackAndLaunch('hpmem_qual_oc','/web/membership/qualifications/qualifications.html');pagematch=membership/qualifications/qualifications;");
aI("text=Renew Membership;url=javascript:trackAndLaunch('hpmem_memb_oc','/web/membership/renew/index.html');pagematch=membership/renew/index;"); 
aI("text=Benefits;url=javascript:trackAndLaunch('hpmem_benefits_oc','/web/membership/benefits/index.html');pagematch=membership/benefits/index;"); 
aI("text=Grade Elevation;url=javascript:trackAndLaunch('hpmem_grade_el_oc','/web/membership/grade_elevation/grade_elevation.html');pagematch=/membership/grade_elevation/grade_elevation;");
} 

with(milonic=new menuname("publications")){ 
left="offset=-69;minimum=30";
top=168; 
screenposition="center" 
orientation="horizontal"; 
style=cssStyle; 
position="absolute"
aI("text=Publications Home;url=javascript:trackAndLaunch('hppub_home_oc','/web/publications/home/index.html');pagematch=publications/home;"); 
aI("text=Journals & Magazines;url=javascript:trackAndLaunch('hppub_journmag_oc','/web/publications/journmag/index.html');pagematch=publications/journmag;"); 
aI("text=Conference Proceedings;url=javascript:trackAndLaunch('hppub_confproc_oc','/web/publications/confproc/index.html');pagematch=publications/confproc;"); 
aI("text=Standards;url=javascript:trackAndLaunch('hppub_stnd_oc','/web/publications/standards/index.html');pagematch=publications/standards;"); 
aI("text=Books;url=javascript:trackAndLaunch('hppub_books_oc','/web/publications/books/index.html');pagematch=publications/books;"); 
aI("text=Newsletters;url=javascript:trackAndLaunch('hppub_nwsl_oc','/web/publications/newsletters/index.html');pagematch=publications/newsletters;");
aI("text=Digital Subscriptions;url=javascript:trackAndLaunch('hppub_dig_sub_oc','/web/publications/subscriptions/index.html');pagematch=publications/subscriptions;");
}

with(milonic=new menuname("education")){ 
left="offset=-85;minimum=30";
top=168; 
screenposition="center" 
orientation="horizontal"; 
style=cssStyle; 
position="absolute"
aI("text=Education Home;url=javascript:trackAndLaunch('hpedu_home_oc','/web/education/home/index.html');pagematch=education/home;"); 
aI("text=Continuing Education;url=javascript:trackAndLaunch('hpedu_cont_edu_oc','/web/education/Continuing_Education/index.html');pagematch=education/Continuing_Education;"); 
aI("text=Professional Certification;url=javascript:trackAndLaunch('hpnav_edu_prof_cert_oc','/web/education/professional_certification/index.html');pagematch=education/professional_certification;"); 
aI("text=Volunteers;url=javascript:trackAndLaunch('hpedu_vol_oc','/web/education/EABVolunteers/index.html');pagematch=education/EABvolunteers;"); 
aI("text=University;url=javascript:trackAndLaunch('hpedu_accred_oc','/web/education/apc/index.html');pagematch=education/apc;"); 
aI("text=Pre-University;url=javascript:trackAndLaunch('hpedu_pre_univ_oc','/web/education/preuniversity/home.html');pagematch=education/preuniversity;"); 
aI("text=Awards;url=javascript:trackAndLaunch('hpedu_awards_oc','/web/education/EABAwards/index.html');pagematch=education/EABAwards;"); 
} 

with(milonic=new menuname("volunteers")){ 
left="offset=-190;minimum=30";
top=168; 
screenposition="center" 
orientation="horizontal"; 
style=cssStyle; 
position="absolute"
aI("text=Volunteers Home;url=javascript:trackAndLaunch('hpvol_home_oc','/web/volunteers/home/index.html');pagematch=volunteers/home;"); 
aI("text=Find a Meeting;url=javascript:trackAndLaunch('hpvol_find_meet_oc','http://www.ieee.org/mps');"); 
aI("text=Meeting & Conf Mgmt;url=javascript:trackAndLaunch('hpvol_mps_oc','http://www.ieee.org/web/conferences/services/index.html');"); 
aI("text=Volunteer Resources;url=javascript:trackAndLaunch('hpvol_resources_oc','/web/volunteers/resources/index.html');pagematch=volunteers/resources;"); 
} 

with(milonic=new menuname("societies")){ 
left="offset=-223;minimum=30";
top=168; 
screenposition="center" 
orientation="horizontal"; 
style=cssStyle; 
position="absolute"
aI("text=Societies Home;url=javascript:trackAndLaunch('hpsoc_home_oc','/web/societies/home/index.html');pagematch=societies/home;");
aI("text=IEEE Societies, Councils and Technical Communities;url=javascript:trackAndLaunch('hpsoc_sctc_oc','/web/societies/home/index.html');pagematch=societies/home;"); 
} 

with(milonic=new menuname("geo")){ 
left="offset=-76;minimum=30";
top=168; 
screenposition="center" 
orientation="horizontal"; 
style=cssStyle; 
position="absolute"
aI("text=Geographic Activities Home;url=javascript:trackAndLaunch('hpga_home_oc','/web/geo_activities/home/index.html');pagematch=geo_activities/home/index;"); 
aI("text=USA, Canada &amp; Latin America;url=javascript:trackAndLaunch('hpga_ucla_oc','/web/geo_activities/home/northamerica.html');pagematch=geo_activities/home/northamerica;"); 
aI("text=Europe, Middle East, &amp; Africa;url=javascript:trackAndLaunch('hpga_emea_oc','/web/geo_activities/home/region8.html');pagematch=geo_activities/home/region8;"); 
aI("text=Asia &amp; Pacific;url=javascript:trackAndLaunch('hpga_asiapac_oc','/web/geo_activities/home/region10.html');pagematch=geo_activities/home/region10;"); 
aI("text=Student Branches;url=javascript:trackAndLaunch('hpga_stud_branches_oc','/web/geo_activities/home/student.html');pagematch=geo_activities/home/;"); 
} 

drawMenus(); 