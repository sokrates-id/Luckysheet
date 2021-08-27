import {errorHandlerHttp} from "../libs/errorHandler";

// const apiUrl = 'https://api.sokrates.co.id';
const apiUrl = 'https://api.sokrates.xyz';

const apiResult = (auth, params, backUrl) => {
  return {
    back_url: backUrl,
    auth: {
      username: auth.username,
      token: auth.token,
    },
    params,
    url: {
      get_schools: `${apiUrl}/academic/academic-data/v1/academic-data?size=20&offset=0`,
      get_school_levels: `${apiUrl}/academic/school-master/v1/school-levels?size=100&offset=0`,
      get_year_levels: `${apiUrl}/academic/school-master/v1/year-levels?size=100&offset=0`,
      get_religions: `${apiUrl}/general/v1/religion-list`,
      get_nationalities: `${apiUrl}/general/v1/nationality-list`,
      get_countries: `${apiUrl}/general/v1/country-list`,
      get_provinces: `${apiUrl}/general/v1/province-list`,
    },
    sheet: {
      student: {
        url: {
          // get_students: 'http://localhost:3002/student/api/v1/excel/sheet/student',
          // save_students: 'http://localhost:3002/student/api/v1/excel/sheet/student',
          // get_parents: 'http://localhost:3002/student/api/v1/excel/sheet/parent',
          get_students: `${apiUrl}/student/api/v1/excel/sheet/student`,
          save_students: `${apiUrl}/student/api/v1/excel/sheet/student`,
          get_parents: `${apiUrl}/student/api/v1/excel/sheet/parent`,
        }
      }
    }
  };
};

const getUser = async (url, token) => {

  try {
    const res = await $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      headers: {"Authorization": `Bearer ${token}`}
    });

    if (res.status) {
      return res.data;
    } else {
      errorHandlerHttp(res);
      throw new Error(res.message);
    }

  } catch (e) {
    errorHandlerHttp(e);
    throw e;
  }
}

const getConfig = async () => {
  $('.loading-text').text('persiapan config aplikasi');

  const url = window.location;
  const token = new URLSearchParams(url.search).get('token');
  const backUrl = new URLSearchParams(url.search).get('back_url');
  //
  const academicYear = new URLSearchParams(url.search).get('academic_year');
  const periodId = new URLSearchParams(url.search).get('period_id');
  const schoolLocationId = new URLSearchParams(url.search).get('school_location_id');
  const schoolLevelId = new URLSearchParams(url.search).get('school_level_id');
  const yearLevelId = new URLSearchParams(url.search).get('year_level_id');
  const pathwayId = new URLSearchParams(url.search).get('pathway_id');
  const classId = new URLSearchParams(url.search).get('class_id');

  if (!backUrl) {
    errorHandlerHttp({
      status: false,
      message: 'tidak ada parameter back_url',
    });
    throw new Error('parameter salah');
  }

  let params = null;
  if (
    academicYear
    && periodId
    && !isNaN(+periodId)
    && schoolLocationId
    && !isNaN(+schoolLocationId)
  ) {
    params = {
      academic_year: academicYear,
      period_id: +periodId,
      school_location_id: +schoolLocationId,
    }

    if (schoolLevelId && !isNaN(+schoolLevelId)) {
      params['school_level_id'] = +schoolLevelId;
    }
    if (yearLevelId && !isNaN(+yearLevelId)) {
      params['year_level_id'] = +yearLevelId;
    }
    if (pathwayId && !isNaN(+pathwayId)) {
      params['pathway_id'] = +pathwayId;
    }
    if (classId && !isNaN(+classId)) {
      params['class_id'] = +classId;
    }
  }

  if (params === null) {
    errorHandlerHttp({
      status: false,
      message: 'parameter salah',
    });
    throw new Error('parameter salah');
  }

  try {
    const user = await getUser(
      `${apiUrl}/auth/v1/me`,
      token,
    );


    $('.loading-text').text('selesai setup config aplikasi');

    return apiResult(
      {
        token,
        username: user.name,
      },
      params,
      backUrl,
    );

  } catch (e) {
    console.error(e);
    throw e;
  }
}

export default {
  getConfig: getConfig,
};

