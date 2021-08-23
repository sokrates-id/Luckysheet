import {errorHandlerHttp} from "../libs/errorHandler";

const convertData = (data, propertyKey, propertyValue) => {
  const result = {
    names: data.map(i => i[propertyValue]),
    valuesById: data.reduce(function (map, obj) {
      map[+obj[propertyKey]] = obj[propertyValue];
      return map;
    }, {}),
    valuesByName: data.reduce(function (map, obj) {
      map[obj[propertyValue]] = +obj[propertyKey];
      return map;
    }, {}),
  };
  // console.debug(result);
  return result;
}

const getSchools = async (config) => {
  // return new Promise(async (resolve, reject) => {
  $('.loading-text').text('memulai proses pengambilan data sekolah');

  try {
    const res = await $.ajax({
      url: config.url.get_schools,
      type: 'GET',
      dataType: 'json',
      headers: {"Authorization": `Bearer ${config.auth.token}`}
    });

    if (res.status) {
      $('.loading-text').text('proses data sekolah selesai');
      return convertData(res.data, 'school_location_id', 'school_location_name');
    } else {
      errorHandlerHttp(res);
      throw new Error(res.message);
    }
  } catch (e) {
    errorHandlerHttp(e);
    throw e;
  }
  // });
}

const getSchoolLevels = async (config) => {
  // return new Promise(async (resolve, reject) => {
  $('.loading-text').text('memulai proses pengambilan data jenjang sekolah');

  try {
    const res = await $.ajax({
      url: config.url.get_school_levels,
      type: 'GET',
      dataType: 'json',
      headers: {"Authorization": `Bearer ${config.auth.token}`}
    });

    if (res.status) {
      $('.loading-text').text('proses data jenjang sekolah selesai');
      return convertData(res.data, 'school_level_id', 'school_level_name');
    } else {
      errorHandlerHttp(res);
      throw new Error(res.message);
    }

  } catch (e) {
    errorHandlerHttp(e);
    throw e;
  }
  // });
}

const getYearLevels = async (config) => {
  // return new Promise(async (resolve, reject) => {
  $('.loading-text').text('memulai proses pengambilan data tingkat sekolah');

  try {
    const res = await $.ajax({
      url: config.url.get_year_levels,
      type: 'GET',
      dataType: 'json',
      headers: {"Authorization": `Bearer ${config.auth.token}`}
    });

    if (res.status) {
      $('.loading-text').text('proses data tingkat sekolah selesai');
      return convertData(res.data, 'year_level_id', 'year_level_name');
    } else {
      errorHandlerHttp(res);
      throw new Error(res.message);
    }
  } catch (e) {
    errorHandlerHttp(e);
    throw e;
  }
  // });
}

const getReligions = async (config) => {
  // return new Promise(async (resolve, reject) => {
  $('.loading-text').text('memulai proses pengambilan data agama');

  try {
    const res = await $.ajax({
      url: config.url.get_religions,
      type: 'GET',
      dataType: 'json',
      headers: {"Authorization": `Bearer ${config.auth.token}`}
    });

    if (res.status) {
      $('.loading-text').text('proses data agama selesai');
      return convertData(res.data, 'religion_id', 'religion_name');
    } else {
      errorHandlerHttp(res);
      throw new Error(res.message);
    }
  } catch (e) {
    errorHandlerHttp(e);
    throw e;
  }
  // });
}

const getNationalities = async (config) => {
  // return new Promise(async (resolve, reject) => {
  $('.loading-text').text('memulai proses pengambilan data kewarganegaraan');

  try {
    const res = await $.ajax({
      url: config.url.get_nationalities,
      type: 'GET',
      dataType: 'json',
      headers: {"Authorization": `Bearer ${config.auth.token}`}
    });

    if (res.status) {
      $('.loading-text').text('proses data kewarganegaraan selesai');
      return convertData(res.data, 'nationality_id', 'nationality_name');
    } else {
      errorHandlerHttp(res);
      throw new Error(res.message);
    }
  } catch (e) {
    errorHandlerHttp(e);
    throw e;
  }
  // });
}

const getCountries = async (config) => {
  // return new Promise(async (resolve, reject) => {
  $('.loading-text').text('memulai proses pengambilan data negara');

  try {
    const res = await $.ajax({
      url: config.url.get_countries,
      type: 'GET',
      dataType: 'json',
      headers: {"Authorization": `Bearer ${config.auth.token}`}
    });

    if (res.status) {
      $('.loading-text').text('proses data negara selesai');
      return convertData(res.data, 'country_id', 'country_name');
    } else {
      errorHandlerHttp(res);
      throw new Error(res.message);
    }
  } catch (e) {
    errorHandlerHttp(e);
    throw e;
  }
  // });
}


const getProvinces = async (config) => {
  // return new Promise(async (resolve, reject) => {
  $('.loading-text').text('memulai proses pengambilan data provinsi');

  try {
    const res = await $.ajax({
      url: config.url.get_provinces,
      type: 'GET',
      dataType: 'json',
      headers: {"Authorization": `Bearer ${config.auth.token}`}
    });

    if (res.status) {
      $('.loading-text').text('proses data provinsi selesai');
      return convertData(res.data, 'province_id', 'province_name');
    } else {
      errorHandlerHttp(res);
      throw new Error(res.message);
    }
  } catch (e) {
    errorHandlerHttp(e);
    throw e;
  }
  // });
}

export default {
  getSchools: getSchools,
  getSchoolLevels: getSchoolLevels,
  getYearLevels: getYearLevels,
  getReligions: getReligions,
  getNationalities: getNationalities,
  getCountries: getCountries,
  getProvinces: getProvinces,
};

