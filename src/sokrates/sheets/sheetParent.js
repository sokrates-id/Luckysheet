import getParentColumns from "../models/modelParent";
import serviceStudent from "../services/serviceStudent";
import {columnsWillLookupById} from "../models/modelGeneral";

const sokratesSheetParent = async (config, master, students) => {

  const parents = await serviceStudent.getParents(config);

  const parentColumns = getParentColumns(master);

  // student punya 3 parent type, terserah mau diisi yang mana
  const totalRows = (students.length * 3) + 100;
  const totalColumns = parentColumns.length;

  const parentValidations = {};
  for (let i = 0; i < totalColumns; i++) {
    if (parentColumns[i].v === undefined || parentColumns[i].v === null) {
      continue;
    }

    for (let j = 1; j < totalRows; j++) {
      parentValidations[`${j}_${i}`] = parentColumns[i].v;
    }
  }

  let parentCells = [];
  const parentHeaders = parentColumns.map((i, idx) => {
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

  parentCells = [...parentHeaders];
  let arrParentsLength = parents.length;

  const parentTypes = ['Father', 'Mother', 'Guardian'];
  for (let i = 0; i < totalColumns; i++) {
    let ct = {
      "fa": "@", "t": "s",
    };

    if (parentColumns[i].t === 'date') {
      ct = {
        "fa": "yyyy-MM-dd", "t": "d"
      };
    }

    let columnName = parentColumns[i].c ? parentColumns[i].c : 0;

    let willLookupValueById = columnsWillLookupById[columnName];

    for (let j = 0; j < totalRows; j++) {

      // if (
      //   (
      //     columnName === 'student_id'
      //     || columnName === 'student_name'
      //     || columnName === 'nis'
      //   )
      //   && Math.floor(j % 3) > 0
      // ) {
      //   continue;
      // }

      let value = null;

      if (
        (
          columnName === 'student_id'
          || columnName === 'student_name'
          || columnName === 'nis'
        )
        // && Math.floor(j % 3) === 0
      ) {

        value = j < (students.length * 3) ? students[Math.floor(j / 3)][columnName] : null;
      } else if (columnName === 'parent_type') {
        value = j < (students.length * 3) ? parentTypes[Math.floor(j % 3)] : null;
      } else {

        if (j < (students.length * 3)) {
          let studentId = students[Math.floor(j / 3)]['student_id'];
          let parent = parents.find(i => i.student_id === studentId && i.parent_type === parentTypes[Math.floor(j % 3)]);

          if (parent) {
            value = parent[columnName];
          }
        }

        // let value = j < arrParentsLength ? parents[j][columnName] : null;
      }


      if (willLookupValueById) {
        value = master[willLookupValueById].valuesById[+value];
      }

      parentCells.push({
        r: j + 1,
        c: i,
        v: {
          ct,
          v: value,
          m: value,
          vt: 1, // vertical align tengah
          ht: 1,
          // mc: {
          //   r: j + 1,
          //   c: i,
          //   rs: (
          //     (
          //       columnName === 'student_id'
          //       || columnName === 'student_name'
          //       || columnName === 'nis'
          //     )
          //     && Math.floor(j % 3) === 0
          //   ) ? 3 : 1,
          //   cs: 1,
          // },
        },
      });
    }
  }

  return {
    "name": "Parent",
    "index": 1,
    celldata: parentCells,
    "row": totalRows,
    "column": totalColumns.length - 1,
    "config": {
      "merge": {},
      "rowlen": {},
      "columnlen": $.extend({}, parentColumns.map(i => i.w ? i.w : 50)),
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
            "column": [0, parentHeaders.length - 1]
          }]
        }
      ],
      "authority": {}
    },
    "frozen": {
      type: 'rangeBoth',
      range: {row_focus: 0, column_focus: 1},
    },
    "luckysheet_select_save": [],
    luckysheet_alternateformat_save: [
      // {
      //   "cellrange": {
      //     "row": [1, students.length * 3],
      //     "column": [0, parentHeaders.length - 1]
      //   },
      //   "format": {
      //     "head": {
      //       "fc": "#000",
      //       "bc": "#5ed593"
      //     },
      //     "one": {
      //       "fc": "#000",
      //       "bc": "#ffffff"
      //     },
      //     "two": {
      //       "fc": "#000",
      //       "bc": "#e5fbee"
      //     },
      //     "foot": {
      //       "fc": "#000",
      //       "bc": "#a5efcc"
      //     }
      //   },
      //   "hasRowHeader": false,
      //   "hasRowFooter": false
      // }
    ],
    luckysheet_conditionformat_save: [
      // {
      //   "type": "default",
      //   "cellrange": [
      //     {
      //       "column": [1, 2], // kasih warna merah kalo duplicate student nis(1)
      //       "row": [1, totalRows - 1],
      //     }
      //   ],
      //   "format": {
      //     "textColor": "#000000",
      //     "cellColor": "#e35663"
      //   },
      //   "conditionName": "duplicateValue",
      //   "conditionRange": [],
      //   "conditionValue": ["0"]
      // },
      // {
      //   "type": "default", //
      //   "cellrange": [
      //     {
      //       "columnLookup": [0, 1, 2], // student_name(0) & nis(2) kalo di isi, baru jalanin validasi ini
      //       "column": [...parentColumns.keys()].filter(i => parentColumns[i].r === true), // index dari column student yang required
      //       "row": [1, totalRows - 1],
      //     }
      //   ],
      //   "format": {
      //     "textColor": "#000000",
      //     "cellColor": "#e35663"
      //   },
      //   "conditionName": "required", // ini custom logic nya ada di file conditionformat.js, terus cari: conditionName == "required"
      //   "conditionRange": [],
      //   "conditionValue": [],
      // }
    ],
    "filter_select": {
      "row": [0, totalRows - 1],
      "column": [0, totalColumns - 3],
    },
    "dataVerification": parentValidations,
  }
};

export default sokratesSheetParent;
