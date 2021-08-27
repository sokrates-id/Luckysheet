import {errorHandlerHttp} from "../libs/errorHandler";

const getStudents = async (config) => {
  // return new Promise(async (resolve, reject) => {
  $('.loading-text').text('memulai proses pengambilan data siswa');
  try {
    const res = await $.ajax({
      url: config.sheet.student.url.get_students,
      type: 'GET',
      data: config.params,
      dataType: 'json',
      headers: {"Authorization": `Bearer ${config.auth.token}`}
    });

    if (res.status) {
      $('.loading-text').text('proses data siswa selesai');
      return res.data;
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

const getParents = async (config) => {
  // return new Promise(async (resolve, reject) => {
  $('.loading-text').text('memulai proses pengambilan data orang tua');
  try {
    const res = await $.ajax({
      url: config.sheet.student.url.get_parents,
      type: 'GET',
      data: config.params,
      dataType: 'json',
      headers: {"Authorization": `Bearer ${config.auth.token}`}
    });

    if (res.status) {
      $('.loading-text').text('proses data orang tua selesai');
      return res.data;
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

const saveStudent = async (config, body) => {
  // return new Promise(async (resolve, reject) => {
    $('.loading-save-text').text('sedang memproses penyimpanan data siswa');

    try {
      const res = await $.ajax({
        url: config.sheet.student.url.save_students,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        headers: {"Authorization": `Bearer ${config.auth.token}`},
        data: JSON.stringify(body),
      });

      if (res.status) {
       return res.data;
      } else {
        throw res;
      }
    } catch (e) {
      throw e;
    }
  // });
}

export default {
  getStudents: getStudents,
  getParents: getParents,
  saveStudent: saveStudent,
};

