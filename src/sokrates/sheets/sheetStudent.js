import serviceStudent from '../services/serviceStudent';
import getStudentColumns from "../models/modelStudent";
import {columnsWillLookupById} from "../models/modelGeneral";

const sokratesSheetStudent = async (config, master) => {

  const students = await serviceStudent.getStudents(config);

  const studentColumns = getStudentColumns(master);

  const totalRows = students.length + 100;
  const totalColumns = studentColumns.length;

  const studentValidations = {};
  for (let i = 0; i < totalColumns; i++) {
    if (studentColumns[i].v === undefined || studentColumns[i].v === null) {
      continue;
    }

    for (let j = 1; j < totalRows; j++) {
      studentValidations[`${j}_${i}`] = studentColumns[i].v;
    }
  }

  let studentCells = [];

  const studentHeaders = studentColumns.map((i, idx) => {
      return {
        r: 0,
        c: idx,
        v: {
          ct: {
            "fa": "@", "t": "s",
          },
          "v": i.n,
          "m": i.n,
          bg: i.r ? '#e35663' : 'white',
          fc: 'black',
          bl: 1,
        },
      }
    }
  );

  studentCells = [...studentHeaders];

  // preallocation array size
  // let arrOldLength = studentCells.length - 1;
  let arrStudentsLength = students.length;
  // studentCells.length = arrOldLength + ((totalRows - 1) * (totalColumns - 1));

  for (let i = 0; i < totalColumns; i++) {
    let ct = {
      "fa": "@", "t": "s",
    };

    if (studentColumns[i].t === 'date') {
      ct = {
        "fa": "yyyy-MM-dd", "t": "d"
      };
    }

    let columnName = studentColumns[i].c ? studentColumns[i].c : 0;

    let willLookupValueById = columnsWillLookupById[columnName];

    for (let j = 1; j < totalRows; j++) {


      let value = j < arrStudentsLength ? students[j][columnName] : null;

      if (willLookupValueById) {
        value = master[willLookupValueById].valuesById[+value];
      }


      // preallocation array size
      // studentCells[arrOldLength++] = {
      //   r: j,
      //   c: i,
      //   v: {
      //     ct,
      //     v: value,
      //     m: value,
      //   },
      // };

      studentCells.push({
        r: j,
        c: i,
        v: {
          ct,
          v: value,
          m: value,
        },
      });
    }
  }

  return {
    "name": "Student",
    "index": "Sheet_pdolzzie5xwi_1600927444446",
    celldata: studentCells,
    "row": totalRows,
    "column": totalColumns.length - 1,
    "config": {
      "merge": {},
      "rowlen": {},
      "columnlen": $.extend({}, studentColumns.map(i => i.w ? i.w : 50)),
      "rowhidden": {}, //hidden rows
      "colhidden": {
        // 0: 0, // hide column student_id
      },
      "customWidth": {
        "2": 1,
        "3": 1,
        "4": 1,
        "6": 1,
        "7": 1
      },
      "borderInfo": [
        {
          "rangeType": "range",
          "borderType": "border-all",
          "style": 1,
          "color": "black",
          "range": [{
            "row": [0, 0],
            "column": [0, studentHeaders.length - 1]
          }]
        }
      ],
      "authority": {}
    },
    "frozen": {
      type: 'rangeBoth',
      range: {row_focus: 0, column_focus: 0},
    },
    luckysheet_alternateformat_save: [],
    luckysheet_conditionformat_save: [
      {
        "type": "default",
        "cellrange": [
          {
            "column": [3, 3], // kasih warna merah kalo duplicate student nis(3)
            "row": [1, totalRows - 1],
          }
        ],
        "format": {
          "textColor": "#000000",
          "cellColor": "#e35663"
        },
        "conditionName": "duplicateValue",
        "conditionRange": [],
        "conditionValue": ["0"]
      },
      {
        "type": "default", //
        "cellrange": [
          {
            "columnLookup": [0, 2], // student_name(0) & nis(2) kalo di isi, baru jalanin validasi ini
            "column": [...studentColumns.keys()].filter(i => studentColumns[i].r === true), // index dari column student yang required
            "row": [1, totalRows - 1],
          }
        ],
        "format": {
          "textColor": "#000000",
          "cellColor": "#e35663"
        },
        "conditionName": "required", // ini custom logic nya ada di file conditionformat.js, terus cari: conditionName == "required"
        "conditionRange": [],
        "conditionValue": [],
      }
    ],
    "filter_select": {
      "row": [0, totalRows - 1],
      "column": [1, totalColumns - 1],
    },
    luckysheet_select_save: [],
    dataVerification: studentValidations,
  }
}

export default sokratesSheetStudent;
