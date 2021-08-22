import sokratesOptions from './config/options';
import sokratesSheetStudent from './sheets/sheetStudent';
import sokratesSheetParent from './sheets/sheetParent';

$(async function () {
  const test1 = await sokratesSheetStudent();

  /**
   * Get url parameters
   */
  function getRequest() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
      function (m, key, value) {
        vars[key] = value;
      });
    return vars;
  }

  var lang = 'en';
  var isShare = getRequest().share; // '?share=1' opens the collaborative editing mode
  var gridKey = getRequest().gridKey; // workbook id for collaborative editing, or directly define here
  var options = null;

  if (isShare || gridKey) {
    // http://localhost:3000/?gridKey=12eyy789-kk45ofid-23737245
    if (!gridKey) {
      alert('If gridKey is not provided in the address bar, please add it in the source code')
    }

    options = {
      container: "luckysheet",
      lang: lang,
      allowUpdate: true,
      updateImageUrl: location.origin + "/luckysheet/api/updateImg",
      updateUrl: "ws://" + location.host + "/luckysheet/websocket/luckysheet",
      gridKey: gridKey,
      loadUrl: location.origin + "/luckysheet/api/load",
      loadSheetUrl: location.origin + "/luckysheet/api/loadsheet"
    }

  } else {

    // http://localhost:3000/
    options = {
      container: 'luckysheet',
      lang: lang,
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
      data:
        [
          test1,
          sokratesSheetParent,
        ],
    }
  }
  options.loading = {
    image: () => {
      return `<svg viewBox="25 25 50 50" class="circular">
					<circle cx="50" cy="50" r="20" fill="none"></circle>
					</svg>`
    },
    imageClass: "loadingAnimation"
  }
  options.cellRightClickConfig = {
    customs: [{
      title: 'test',
      onClick: function (clickEvent, event, params) {
        console.log('function test click', clickEvent, event, params)
      }
    }]
  }

  $('#loading').remove();

  luckysheet.create({
    ...options,
    ...sokratesOptions
  });
})
