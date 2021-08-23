export function errorHandlerHttp(err) {
  console.log('err', err);
  $('.loading').remove();
  $('#luckysheet').remove();
  $('#error').css('display', 'flex');

  let msg = '<h3>terjadi kesalahan, mohon hubungi admin sokrates</h3>';

  if (err?.responseJSON && err.responseJSON?.message) {
    msg += `<h6><i>(${err.responseJSON?.message})</i></h6>`
  } else if (err?.status === false && err?.message) {
    msg += `<h6><i>(${err.message})</i></h6>`
  }

  $('#error').html(msg);
}
