const getSchools = async (config) => {
  return new Promise(async (resolve, reject) => {
    $('#loading-text').text('memulai proses pengambilan data sekolah');

    const res = await $.ajax({
      url: config.url.get_schools,
      type: 'GET',
      dataType: 'json',
      headers: {"Authorization": `Bearer ${config.auth.token}`}
    });

    if (res.status) {
      $('#loading-text').text('proses data sekolah selesai');
      resolve(res.data.map(i => i.school_level_name));
    } else {
      reject([]);
    }
  });
}

const getSchoolLevels = async (config) => {
  return new Promise(async (resolve, reject) => {
    $('#loading-text').text('memulai proses pengambilan data jenjang sekolah');

    const res = await $.ajax({
      url: config.url.get_school_levels,
      type: 'GET',
      dataType: 'json',
      headers: {"Authorization": `Bearer ${config.auth.token}`}
    });

    if (res.status) {
      $('#loading-text').text('proses data jenjang sekolah selesai');
      resolve(res.data.map(i => i.school_level_name));
    } else {
      reject([]);
    }
  });
}

const getYearLevels = async (config) => {
  return new Promise(async (resolve, reject) => {
    $('#loading-text').text('memulai proses pengambilan data tingkat sekolah');

    const res = await $.ajax({
      url: config.url.get_year_levels,
      type: 'GET',
      dataType: 'json',
      headers: {"Authorization": `Bearer ${config.auth.token}`}
    });

    if (res.status) {
      $('#loading-text').text('proses data tingkat sekolah selesai');
      resolve(res.data.map(i => i.year_level_name));
    } else {
      reject([]);
    }
  });
}

const getReligions = async (config) => {
  return new Promise(async (resolve, reject) => {
    $('#loading-text').text('memulai proses pengambilan data agama');

    const res = await $.ajax({
      url: config.url.get_religions,
      type: 'GET',
      dataType: 'json',
      headers: {"Authorization": `Bearer ${config.auth.token}`}
    });

    if (res.status) {
      $('#loading-text').text('proses data agama selesai');
      resolve(res.data.map(i => i.religion_name));
    } else {
      reject([]);
    }
  });
}

const getNationalities = async (config) => {
  return new Promise(async (resolve, reject) => {
    $('#loading-text').text('memulai proses pengambilan data kewarganegaraan');

    const res = await $.ajax({
      url: config.url.get_nationalities,
      type: 'GET',
      dataType: 'json',
      headers: {"Authorization": `Bearer ${config.auth.token}`}
    });

    if (res.status) {
      $('#loading-text').text('proses data kewarganegaraan selesai');
      resolve(res.data.map(i => i.nationality_name));
    } else {
      reject([]);
    }
  });
}

const getCountries = async (config) => {
  return new Promise(async (resolve, reject) => {
    $('#loading-text').text('memulai proses pengambilan data negara');

    const res = await $.ajax({
      url: config.url.get_countries,
      type: 'GET',
      dataType: 'json',
      headers: {"Authorization": `Bearer ${config.auth.token}`}
    });

    if (res.status) {
      $('#loading-text').text('proses data negara selesai');
      resolve(res.data.map(i => i.country_name));
    } else {
      reject([]);
    }
  });
}


const getProvinces = async (config) => {
  return new Promise(async (resolve, reject) => {
    $('#loading-text').text('memulai proses pengambilan data provinsi');

    const res = await $.ajax({
      url: config.url.get_provinces,
      type: 'GET',
      dataType: 'json',
      headers: {"Authorization": `Bearer ${config.auth.token}`}
    });

    if (res.status) {
      $('#loading-text').text('proses data provinsi selesai');
      resolve(res.data.map(i => i.province_name));
    } else {
      reject([]);
    }
  });
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

