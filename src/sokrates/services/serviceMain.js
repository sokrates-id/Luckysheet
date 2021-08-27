import {errorHandlerHttp} from "../libs/errorHandler";

// const apiUrl = 'https://api.sokrates.co.id';
const apiUrl = 'https://api.sokrates.xyz';

const apiResult = (auth, params) => {
  return {
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
  //
  const academicYear = new URLSearchParams(url.search).get('academic_year');
  const periodId = new URLSearchParams(url.search).get('period_id');
  const schoolLocationId = new URLSearchParams(url.search).get('school_location_id');

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
      params
    );

  } catch (e) {
    console.error(e);
    throw e;
  }
}

export default {
  getConfig: getConfig,
};

