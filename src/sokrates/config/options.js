const sokratesOptions = {
  showtoolbar: true,
  showtoolbarConfig: {
    undoRedo: true, //Undo redo
    paintFormat: false, //Format brush
    currencyFormat: false, //currency format
    percentageFormat: false, //Percentage format
    numberDecrease: false, //'Decrease the number of decimal places'
    numberIncrease: false, //'Increase the number of decimal places
    moreFormats: false, //'More Formats'
    font: false, //'font'
    fontSize: false, //'Font size'
    bold: false, //'Bold (Ctrl+B)'
    italic: false, //'Italic (Ctrl+I)'
    strikethrough: false, //'Strikethrough (Alt+Shift+5)'
    underline: false, // 'Underline (Alt+Shift+6)'
    textColor: false, //'Text color'
    fillColor: false, //'Cell color'
    border: false, //'border'
    mergeCell: false, //'Merge cells'
    horizontalAlignMode: false, //'Horizontal alignment'
    verticalAlignMode: false, //'Vertical alignment'
    textWrapMode: false, //'Wrap mode'
    textRotateMode: false, //'Text Rotation Mode'
    image: false, // 'Insert picture'
    link: false, // 'Insert link'
    chart: false, //'chart' (the icon is hidden, but if the chart plugin is configured, you can still create a new chart by right click)
    postil: false, //'comment'
    pivotTable: false, //'PivotTable'
    function: false, //'formula'
    frozenMode: false, //'freeze mode'
    sortAndFilter: false, //'Sort and filter'
    conditionalFormat: false, //'Conditional Format'
    dataVerification: false, // 'Data Verification'
    splitColumn: false, //'Split column'
    screenshot: false, //'screenshot'
    findAndReplace: true, //'Find and Replace'
    protection: false, // 'Worksheet protection'
    print: false, // 'Print'
  },
  showinfobar: true,
  showsheetbar: true,
  showsheetbarConfig: {
    add: false, //Add worksheet
    menu: false, //Worksheet management menu
    sheet: true //Worksheet display
  },
  showstatisticBar: true,
  showstatisticBarConfig: {
    count: true, // Count bar
    view: false, // Print view
    zoom: true // Zoom
  },
  enableAddRow: true,
  enableAddBackTop: false,
  // user
  // userInfo: {
  //   userImage:'https://files.sokrates.co.id/pri/image/tenant/logo/9b00f263-7bae-4643-ac77-9bff22183e0d.png', // Avatar url
  //   userName:'Aldo', // username
  // },
  userInfo: 'Aldo',
  userMenuItem: [
    {
      url: "https://www.baidu.com",
      "icon": '<i class="fa fa-folder" aria-hidden="true"></i>',
      "name": "我的表格"
    },
    {
      url: "www.baidu.com", "icon": '<i class="fa fa-sign-out" aria-hidden="true"></i>', "name": "退出登陆"
    },
  ],

  //
  myFolderUrl: '/',
  functionButton: `
<button id="excel-save" class="btn btn-primary btn-sucess" style=" padding:3px 6px; font-size: 12px; margin-right: 10px;">SAVE</button>`,
  cellRightClickConfig: {
    copy: true, // copy
    copyAs: false, // copy as
    paste: true, // paste
    insertRow: true, // insert row
    insertColumn: false, // insert column
    deleteRow: false, // delete the selected row
    deleteColumn: false, // delete the selected column
    deleteCell: false, // delete cell
    hideRow: false, // hide the selected row and display the selected row
    hideColumn: true, // hide the selected column and display the selected column
    rowHeight: false, // row height
    columnWidth: false, // column width
    clear: false, // clear content
    matrix: false, // matrix operation selection
    sort: false, // sort selection
    filter: false, // filter selection
    chart: false, // chart generation
    image: false, // insert picture
    link: false, // insert link
    data: false, // data verification
    cellFormat: false // Set cell format
  },
  sheetRightClickConfig: {
    delete: false, //Delete
    copy: false, //Copy
    rename: false, //Rename
    color: false, //Change color
    hide: false, //Hide, unhide
    move: false, //Move to the left, move to the right
  },
  sheetFormulaBar: false,

};


export default sokratesOptions;
