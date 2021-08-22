const getSchools = async () => {
  return new Promise((resolve) => {
    $('#loading-text').text('memulai proses pengambilan data sekolah');

    setTimeout(() => {
      $('#loading-text').text('proses data sekolah selesai');
      resolve(['TK Kebon Dalem', 'SD Kebon Dalem', 'SMP Kebon Dalem', 'SMA Kebon Dalem']);
    }, 1000);
  });
}

const getSchoolLevels = async () => {
  return new Promise((resolve) => {
    $('#loading-text').text('memulai proses pengambilan data jenjang sekolah');

    setTimeout(() => {

      $('#loading-text').text('proses data jenjang sekolah selesai');
      resolve(['TK', 'SD', 'SMP', 'SMA']);
    }, 1000);
  });
}

const getYearLevels = async () => {
  return new Promise((resolve) => {
    $('#loading-text').text('memulai proses pengambilan data tingkat sekolah');

    setTimeout(() => {

      $('#loading-text').text('proses data tingkat sekolah selesai');
      resolve(['KB', 'TK A', 'TK B', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']);
    }, 1000);
  });
}

const getReligions = async () => {
  return new Promise((resolve) => {
    $('#loading-text').text('memulai proses pengambilan data agama');

    setTimeout(() => {

      $('#loading-text').text('proses data agama selesai');
      resolve(['ISLAM', 'HINDUISM', 'BUDDHISM', 'CHRISTIANITY', 'KONGHUCU', 'CATHOLICISM']);
    }, 1000);
  });

}

export default {
  getSchools: getSchools,
  getSchoolLevels: getSchoolLevels,
  getYearLevels: getYearLevels,
  getReligions: getReligions,
};

