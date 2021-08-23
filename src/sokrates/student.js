import sokratesOptions from './config/options';
import sokratesSheetStudent from './sheets/sheetStudent';
import sokratesSheetParent from './sheets/sheetParent';
import serviceGeneral from "./services/serviceGeneral";
import serviceMain from "./services/serviceMain";
import getStudentColumns from "./models/modelStudent";
import {columnsWillLookupById} from "./models/modelGeneral";
import serviceStudent from "./services/serviceStudent";

$(async function () {
  const config = await serviceMain.getConfig();

  const schools = await serviceGeneral.getSchools(config);
  const schoolLevels = await serviceGeneral.getSchoolLevels(config);
  const yearLevels = await serviceGeneral.getYearLevels(config);
  const religions = await serviceGeneral.getReligions(config);
  const nationalities = await serviceGeneral.getNationalities(config);
  const countries = await serviceGeneral.getCountries(config);
  const provinces = await serviceGeneral.getProvinces(config);

  const master = {
    schools,
    schoolLevels,
    yearLevels,
    religions,
    nationalities,
    countries,
    provinces,
  }

  const sheetStudent = await sokratesSheetStudent(config, master);
  const sheetParent = await sokratesSheetParent(master);

  let isSaving = false;

  const options = {
    container: 'luckysheet',
    lang: 'en',
    title: 'Student Data',
    // pager: {
    // 	pageIndex: 1,
    // 	pageSize: 10,
    // 	total: 50,
    // 	selectOption: [10, 20]
    // },
    forceCalculation: false,
    // plugins: ['chart'],
    fontList: [
      {
        "fontName": "HanaleiFill",
        "url": "./assets/iconfont/HanaleiFill-Regular.ttf"
      },
      {
        "fontName": "Anton",
        "url": "./assets/iconfont/Anton-Regular.ttf"
      },
      {
        "fontName": "Pacifico",
        "url": "./assets/iconfont/Pacifico-Regular.ttf"
      }
    ],
    hook: {
      cellDragStop: function (cell, postion, sheetFile, ctx, event) {
        // console.info(cell, postion, sheetFile, ctx, event);
      },
      rowTitleCellRenderBefore: function (rowNum, postion, ctx) {
        // console.log(rowNum);
      },
      rowTitleCellRenderAfter: function (rowNum, postion, ctx) {
        // console.log(ctx);
      },
      columnTitleCellRenderBefore: function (columnAbc, postion, ctx) {
        // console.log(columnAbc);
      },
      columnTitleCellRenderAfter: function (columnAbc, postion, ctx) {
        // console.log(postion);
      },
      cellRenderBefore: function (cell, postion, sheetFile, ctx) {
        // console.log(cell,postion,sheetFile,ctx);
      },
      cellRenderAfter: function (cell, postion, sheetFile, ctx) {
        // console.log(postion);
      },
      cellMousedownBefore: function (cell, postion, sheetFile, ctx) {
        // console.log(postion);
      },
      cellMousedown: function (cell, postion, sheetFile, ctx) {
        // console.log(sheetFile);
      },
      sheetMousemove: function (cell, postion, sheetFile, moveState, ctx) {
        // console.log(cell,postion,sheetFile,moveState,ctx);
      },
      sheetMouseup: function (cell, postion, sheetFile, moveState, ctx) {
        // console.log(cell,postion,sheetFile,moveState,ctx);
      },
      cellAllRenderBefore: function (data, sheetFile, ctx) {
        // console.info(data,sheetFile,ctx)
      },
      updated: function (operate) {
        // console.info(operate)
      },
      cellUpdateBefore: function (r, c, value, isRefresh) {
        // console.info('cellUpdateBefore',r,c,value,isRefresh)
      },
      cellUpdated: function (r, c, oldValue, newValue, isRefresh) {
        // console.info('cellUpdated',r,c,oldValue, newValue, isRefresh)
      },
      sheetActivate: function (index, isPivotInitial, isNewSheet) {
        // console.info(index, isPivotInitial, isNewSheet)
      },
      rangeSelect: function (index, sheet) {
        // console.info(index, sheet)
      },
      commentInsertBefore: function (r, c) {
        // console.info(r, c)
      },
      commentInsertAfter: function (r, c, cell) {
        // console.info(r, c, cell)
      },
      commentDeleteBefore: function (r, c, cell) {
        // console.info(r, c, cell)
      },
      commentDeleteAfter: function (r, c, cell) {
        // console.info(r, c, cell)
      },
      commentUpdateBefore: function (r, c, value) {
        // console.info(r, c, value)
      },
      commentUpdateAfter: function (r, c, oldCell, newCell) {
        // console.info(r, c, oldCell, newCell)
      },
      cellEditBefore: function (range) {
        // console.info(range)
      },
      workbookCreateAfter: function (json) {
        // console.info(json)
      },
      rangePasteBefore: function (range, data) {
        // console.info('rangePasteBefore',range,data)
        // return false; //Can intercept paste
      },


    },
    loading: {
      image: () => {
        return `<svg viewBox="25 25 50 50" class="circular">
					<circle cx="50" cy="50" r="20" fill="none"></circle>
					</svg>`
      },
      imageClass: "loadingAnimation"
    },
    cellRightClickConfig: {
      customs: [{
        title: 'test',
        onClick: function (clickEvent, event, params) {
          console.log('function test click', clickEvent, event, params)
        }
      }]
    },
    data: [
      sheetStudent,
      sheetParent,
    ],
  }

  $('.loading').remove();

  luckysheet.create({
    ...options,
    ...sokratesOptions
  });

  $('#excel-save').click(() => {
    if (isSaving) {
      return;
    }

    luckysheet.showLoadingProgress();
    $('.loading-save').css('display', 'flex');
    isSaving = true;

    const data = luckysheet.getSheetData(0);

    const studentColumns = getStudentColumns(master);
    const students = [];
    const totalData = data.length;

    const now = new Date();
    const basedate = new Date(1899, 11, 31, 0, 0, 0);
    const dnthresh = basedate.getTime()

    let valid = true;
    let invalidColumn = 0;
    let invalidRow = 0;
    for (let i = 0; i < totalData; i++) {
      if (i === 0) {
        continue;
      }

      let student = {};

      // kalo student_name (0) & nis (2)
      // kosong, gaperlu di save
      if (!data[i][0].v || !data[i][2].v) {
        continue;
      }

      if (!valid) {
        break;
      }

      for (let j = 0; j < studentColumns.length; j++) {

        if (data[i][j].inv === true) {
          valid = false;

          invalidRow = i;
          invalidColumn = j ;
          break;
        }

        if (data[i] && data[i][j] && data[i][j].v) {

          let columnName = studentColumns[j].c ? studentColumns[j].c : 0;
          let willLookupValueById = columnsWillLookupById[columnName];
          let value = data[i][j].v;

          if (studentColumns[j].t === 'date') {
            // convert date format
            // value = numdate(data[i][j].v).toISOString().slice(0, 10);
            if (!isNaN(value)) {
              now.setTime(+value * 24 * 60 * 60 * 1000 + dnthresh);
              value = now.toISOString().slice(0, 10);
            } else {
              value = undefined;
            }
          }

          if (willLookupValueById) {
            value = +master[willLookupValueById].valuesByName[value];
            if (isNaN(value)) {
              value = null
            }
          }

          if (
            value !== null
            && value !== undefined
          ) {
            student[columnName] = value;
          }
        }
      }

      students.push(student);
    }

    console.log(students);
    console.error('invalid data di row col', valid);

    if (!valid) {
      luckysheet.hideLoadingProgress();
      $('.loading-save').hide();
      isSaving = false;

      // cursor kasih ke yang error
      luckysheet.scroll({
        targetRow: invalidRow - 2, // tergantung yang fixed row ada berapa
        targetColumn: invalidColumn - 2, // tergantung yang fixed column ada berapa
        success: () => {
          luckysheet.setluckysheet_select_save([{ row: [invalidRow, invalidRow], column: [invalidColumn, invalidColumn] }]);
          luckysheet.selectHightlightShow();
        },
      })

      $("#luckysheet-modal-dialog-mask").show();
      $("#luckysheet-info").remove();
      const replaceHtml = (temp, dataarry) => {
        return temp.replace(/\$\{([\w]+)\}/g, function (s1, s2) { let s = dataarry[s2]; if (typeof (s) != "undefined") { return s; } else { return s1; } });
      };
      const modelHTML = '<div id="${id}" style="${style}" class="luckysheet-modal-dialog ${addclass}" tabindex="0" role="dialog" aria-labelledby=":41e" dir="ltr"> <div class="luckysheet-modal-dialog-title luckysheet-modal-dialog-title-draggable"> <span class="luckysheet-modal-dialog-title-text" role="heading">${title}</span>	 <span class="luckysheet-modal-dialog-title-close" role="button" tabindex="0" aria-label="${close}"><i class="fa fa-times" aria-hidden="true"></i></span> </div> <div class="luckysheet-modal-dialog-content">${content}</div> <div class="luckysheet-modal-dialog-buttons">	 ${botton} </div></div>';
      $("body").append(replaceHtml(modelHTML, {
        "id": "luckysheet-info",
        "addclass": "",
        "title": 'error',
        "content": `ada data yang salah di baris ${invalidRow} column ${invalidColumn}`,
        "botton": '<button class="btn btn-default luckysheet-model-close-btn">&nbsp;&nbsp;close&nbsp;&nbsp;</button>',
        "style": "z-index:100003"
      }));
      let $t = $("#luckysheet-info").find(".luckysheet-modal-dialog-content").css("min-width", 300).end(),
        myh = $t.outerHeight(),
        myw = $t.outerWidth();
      let winw = $(window).width(), winh = $(window).height();
      let scrollLeft = $(document).scrollLeft(), scrollTop = $(document).scrollTop();
      $("#luckysheet-info").css({"left": (winw + scrollLeft - myw) / 2, "top": (winh + scrollTop - myh) / 3}).show();

      return;
    }

    serviceStudent
      .saveStudent(config, {
        students,
      })
      .then(res => {
        isSaving = false;
        luckysheet.hideLoadingProgress();
        // $('.loading-text').text('proses data sekolah selesai');
        $('.loading-save').hide();
        console.log(res);
      })
      .catch(err => {
        isSaving = false;
        console.error(err);

        luckysheet.hideLoadingProgress();
        $('.loading-save').hide();
        $('#error').css('display', 'flex');

        let msg = '<h3>terjadi kesalahan ketika menyimpan data, mohon hubungi admin sokrates</h3>';

        if (err?.responseJSON && err.responseJSON?.message) {
          msg += `<h6><i>(${err.responseJSON?.message})</i></h6>`
        } else if (err?.status === false && err?.message) {
          msg += `<h6><i>(${err.message})</i></h6>`
        }

        msg += '<a id="error-close">tutup pesan ini</a>'

        $('#error').html(msg);

        $('#error-close').click(() => {
          $('#error').css('display', 'none');
        });
      })
  });
})
