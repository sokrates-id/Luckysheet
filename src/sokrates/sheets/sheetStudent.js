import serviceStudent from '../services/serviceStudent';
import serviceGeneral from '../services/serviceGeneral';

const sokratesSheetStudent = async () => {

  const schools = await serviceGeneral.getSchools();
  const schoolLevels = await serviceGeneral.getSchoolLevels();
  const yearLevels = await serviceGeneral.getYearLevels();
  const religions = await serviceGeneral.getReligions();
  const students = await serviceStudent.getStudents();

  /**
   * t: tipe data, default string
   * c: nama column dari database
   * n: tampilan di user
   * w: panjang column
   * r: required apa engga
   * v: validasinya
   */

  const studentColumns = [
    {
      c: 'student_id',
      n: 'student_id',
      w: 70,
      r: true,
    },
    {
      c: 'student_name',
      n: 'Nama Lengkap Siswa',
      w: 200,
      r: true,
      v: {
        "type": "text_length",
        "type2": "bw",
        "value1": "1",
        "value2": "255",
        "checked": false,
        "remote": false,
        "prohibitInput": false,
        "hintShow": false,
        "hintText": ""
      },
    },
    {
      c: 'student_nickname',
      n: 'Nama Panggilan Siswa',
      w: 150,
      r: true,
      v: {
        "type": "text_length",
        "type2": "bw",
        "value1": "1",
        "value2": "50",
        "checked": false,
        "remote": false,
        "prohibitInput": false,
        "hintShow": false,
        "hintText": ""
      },
    },
    {
      c: 'nis',
      n: 'NIS',
      w: 70,
      r: true,
      v: {
        "type": "text_length",
        "type2": "bw",
        "value1": "1",
        "value2": "100",
        "checked": false,
        "remote": false,
        "prohibitInput": false,
        "hintShow": false,
        "hintText": ""
      },
    },
    {
      c: '_',
      n: 'Status Pendaftaran',
      w: 120,
      r: true,
      v: {
        "type": "dropdown",
        "type2": null,
        "value1": "Normal,Transfer",
        "value2": "",
        "checked": false,
        "remote": false,
        "prohibitInput": false,
        "hintShow": false,
        "hintText": ""
      }
    },
    {
      c: '_',
      n: 'Nama Sekolah',
      w: 150,
      r: true,
      v: {
        "type": "dropdown",
        "type2": null,
        "value1": schools.join(','),
        "value2": "",
        "checked": false,
        "remote": false,
        "prohibitInput": false,
        "hintShow": false,
        "hintText": ""
      }
    },
    {
      c: '_',
      n: 'Jenjang Pendidikan',
      w: 150,
      r: true,
      v: {
        "type": "dropdown",
        "type2": null,
        "value1": schoolLevels.join(','),
        "value2": "",
        "checked": false,
        "remote": false,
        "prohibitInput": false,
        "hintShow": false,
        "hintText": ""
      }
    },
    {
      c: '_',
      n: 'Tingkat Sekolah',
      w: 150,
      r: true,
      v: {
        "type": "dropdown",
        "type2": null,
        "value1": yearLevels.join(','),
        "value2": "",
        "checked": false,
        "remote": false,
        "prohibitInput": false,
        "hintShow": false,
        "hintText": ""
      }
    },
    {
      t: 'date',
      c: '_',
      n: 'Tanggal Masuk',
      w: 100,
      r: true,
    },
    {
      c: '_',
      n: 'Jenis Kelamin',
      w: 100,
      r: true,
      v: {
        "type": "dropdown",
        "type2": null,
        "value1": "Laki-laki,Perempuan",
        "value2": "",
        "checked": false,
        "remote": false,
        "prohibitInput": false,
        "hintShow": false,
        "hintText": ""
      }
    },
    {
      c: '_',
      n: 'Tempat Lahir',
      w: 150,
      r: true,
      v: {
        "type": "text_length",
        "type2": "bw",
        "value1": "1",
        "value2": "100",
        "checked": false,
        "remote": false,
        "prohibitInput": false,
        "hintShow": false,
        "hintText": ""
      },
    },
    {
      t: 'date',
      c: '_',
      n: 'Tanggal Lahir',
      w: 150,
      r: true,
    },
    {
      c: '_',
      n: 'Email',
      w: 150,
      r: true,
      v: {
        "type": "text_length",
        "type2": "bw",
        "value1": "1",
        "value2": "100",
        "checked": false,
        "remote": false,
        "prohibitInput": false,
        "hintShow": false,
        "hintText": ""
      },
    },
    {
      c: '_',
      n: 'Alamat Lengkap',
      w: 200,
      r: true,
      v: {
        "type": "text_length",
        "type2": "bw",
        "value1": "1",
        "value2": "1000",
        "checked": false,
        "remote": false,
        "prohibitInput": false,
        "hintShow": false,
        "hintText": ""
      },
    },
    {
      c: '_',
      n: 'Agama',
      w: 100,
      v: {
        "type": "dropdown",
        "type2": null,
        "value1": religions.join(','),
        "value2": "",
        "checked": false,
        "remote": false,
        "prohibitInput": false,
        "hintShow": false,
        "hintText": ""
      }
    },
    {
      c: '_',
      n: 'NISN',
      w: 100,
    },
    {
      c: '_',
      n: 'Nomor Formulir Pendaftaran',
      w: 100,
    },
    {
      c: '_',
      n: 'Kewarganegaraan',
      w: 100,
    },
    {
      c: '_',
      n: 'Nomor KTP',
      w: 100,
    },
    {
      c: '_',
      n: 'Nomor Paspor',
      w: 100,
    },
    {
      t: 'date',
      c: '_',
      n: 'Tanggal Berakhir Paspor',
      w: 100,
    },
    {
      c: '_',
      n: 'Nomor KITAS',
      w: 100,
    },
    {
      t: 'date',
      c: '_',
      n: 'Tanggal Berakhir KITAS',
      w: 100,
    },
    {
      c: '_',
      n: 'Bahasa',
      w: 100,
    },
    {
      c: '_',
      n: 'Nomor Handphone',
      w: 100,
    },
    {
      c: '_',
      n: 'Nomor Telepon',
      w: 100,
    },
    {
      c: '_',
      n: 'Kode Pos',
      w: 100,
    },
    {
      c: '_',
      n: 'Kelurahan',
      w: 100,
    },
    {
      c: '_',
      n: 'Kecamatan',
      w: 100,
    },
    {
      c: '_',
      n: 'Kota',
      w: 100,
    },
    {
      c: '_',
      n: 'Provinsi',
      w: 100,
    },
    {
      c: '_',
      n: 'Negara',
      w: 100,
    },
    {
      c: '_',
      n: 'Tinggal Bersama',
      w: 100,
    },
    {
      c: '_',
      n: 'Jarak Ke Sekolah',
      w: 100,
    },
    {
      c: '_',
      n: 'Transportasi Ke Sekolah',
      w: 100,
    },
    {
      c: '_',
      n: 'Status Anak',
      w: 100,
    },
  ];

  const totalRows = 1000;
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
      // let ct = {
      //   "fa": "General", "t": "g",
      // };
      //
      // if (i.t === 'date') {
      //   ct = {
      //     "fa": "yyyy-MM-dd", "t": "d"
      //   };
      // }

      return {
        r: 0,
        c: idx,
        v: {
          ct: {
            "fa": "General", "t": "g",
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
  let arrOldLength = studentCells.length - 1;
  let arrStudentsLength = students.length;
  studentCells.length = arrOldLength + ((totalRows - 1) * (totalColumns - 1));

  for (let i = 1; i < totalColumns; i++) {
    let ct = {
      "fa": "General", "t": "g",
    };

    if (studentColumns[i].t === 'date') {
      ct = {
        "fa": "yyyy-MM-dd", "t": "d"
      };
    }

    let columnName = studentColumns[i].c ? studentColumns[i].c : 0;

    for (let j = 1; j < totalRows; j++) {

      // preallocation array size
      const value = j < arrStudentsLength ? students[j][columnName] : '';
      studentCells[arrOldLength++] = {
        r: j,
        c: i,
        v: {
          ct,
          v: value,
          m: value,
        },
      };
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
        0: 0, // hide column student_id
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
    "luckysheet_select_save": [
      {
        "left": 963,
        "width": 125,
        "top": 240,
        "height": 19,
        "left_move": 963,
        "width_move": 125,
        "top_move": 240,
        "height_move": 19,
        "row": [
          12,
          12
        ],
        "column": [
          7,
          7
        ],
        "row_focus": 12,
        "column_focus": 7
      }
    ],
    "dataVerification": studentValidations,
  }
}

export default sokratesSheetStudent;
