
const getStudents = async (config) => {
  return new Promise(async (resolve, reject) => {
    $('#loading-text').text('memulai proses pengambilan data siswa');

    const res = await $.ajax({
      url: config.sheet.student.url.get_students,
      type: 'GET',
      dataType: 'json',
      headers: {"Authorization": `Bearer ${config.auth.token}`}
    });

    if (res.status) {
      $('#loading-text').text('proses data sekolah selesai');
      resolve(res.data);
    } else {
      reject([]);
    }
  });
}

export default {
  getStudents: getStudents,
};

