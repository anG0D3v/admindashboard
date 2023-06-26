const Endpoints = {
    FETCH_APPLICANTS:"personalinfo/applicants",
    FETCH_USER_BY_ID:"userProf/UserAccounts",
    FETCH_ACCOUNTS:"userProf/UserAccounts",
    SET_REMARKS:"userProf/Remarks",
    CREATE_SCHOLAR:"scholar/createScho",
    CREATE_NEWS:"news/create",
    FETCH_NEWS: 'news/newsinfo',
    FETCH_ADMIN:"admin/login",
    LOGIN_USER:"user/login",
    FETCH_APPLICANTSINFO: 'personalinfo/ApplicantFdetails/',
    FETCH_SUBMITTED: 'requirements/',
    CHECK_SUBMITTED: 'requirements/Check',
    CHECK_APPLICANTS: 'requirements/CheckApplicants',
    FETCH_QUALIFIED: 'Appointment/List',
    CREATE_APPOINT: 'Appointment/appoint',
    FETCH_APPOINTLIST: 'Appointment/appointList',
    FETCH_SCHOPROG: 'scholar/schoCat',
    UPDATE_SCHOPROG: 'scholar/UpdateStatus',
    RE_APPOINT: 'Appointment/Reappointed',
    SET_APPROVED: 'Appointment/SetApproved',
    SET_APPLICANT: 'Appointment/SetApplicants',
    ADD_APPLICANTLIST: 'Appointment/Addusertolist',
    UPDATE_SCHEDULE: 'Appointment/UpdateSchedule',
    FETCH_BMCCSCHOLAR: 'BMCCScholar/Scholars',
    FETCH_BMCCSCHOLARINFO: 'BMCCScholar/SchoInfo/',
    CREATE_SCORECARD: 'Scorecard/score',
    FETCH_SCORECARD: 'Scorecard/getScore/',
    FETCH_USERSCORE: 'Scorecard/UserScore/',
    LIST_REQUIREMENTS: 'documents/Requirements',
    ADD_REQUIREMENTS: 'documents/AddRequirements',
    BMCC_ADD: 'admin/Create',
    BMCC_FETCH: 'admin/BMCCmembers',
    ACTIVITY_LOG: 'admin/Activitylog',
    UPDATE_EMP: 'admin/Update',
    UPDATE_PASS: 'admin/Updatepassword',
    UPDATE_PROFILE: 'admin/Updateprofile',
}

export default Endpoints