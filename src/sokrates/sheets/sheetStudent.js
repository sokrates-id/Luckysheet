import serviceStudent from '../services/serviceStudent';

const sokratesSheetStudent = async (config, master) => {

  const students = await serviceStudent.getStudents(config);

  const transportData = [
    'On Foot',
    'Motocycle',
    'Private Car',
    'Bicycle',
    'Public Transportation (Angkot, Bus)',
    'Train',
    'Ojek',
    'Other'
  ];
  const childStatusData = [
    'Biological Child',
    'Foster Child',
    'Step Child'
  ];
  const livingWithData = [
    'Father',
    'Mother',
    'Both Parents',
    'Guardian',
    'Dormitory',
    'Boarding House'
  ];

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
      c: 'enrollment_status',
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
        "value1": master.schools.join(','),
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
        "value1": master.schoolLevels.join(','),
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
        "value1": master.yearLevels.join(','),
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
      c: 'join_date_school',
      n: 'Tanggal Masuk',
      w: 100,
      r: true,
    },
    {
      c: 'gender',
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
      c: 'place_of_birth',
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
      c: 'date_of_birth',
      n: 'Tanggal Lahir',
      w: 150,
      r: true,
    },
    {
      c: 'email',
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
      c: 'address_line1',
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
      c: 'religion_id',
      n: 'Agama',
      w: 100,
      v: {
        "type": "dropdown",
        "type2": null,
        "value1": master.religions.join(','),
        "value2": "",
        "checked": false,
        "remote": false,
        "prohibitInput": false,
        "hintShow": false,
        "hintText": ""
      }
    },
    {
      c: 'nisn',
      n: 'NISN',
      w: 100,
    },
    {
      c: 'admission_form_id',
      n: 'Nomor Formulir Pendaftaran',
      w: 100,
    },
    {
      c: '_',
      n: 'Kewarganegaraan',
      w: 100,
      v: {
        "type": "dropdown",
        "type2": null,
        "value1": master.nationalities.join(','),
        "value2": "",
        "checked": false,
        "remote": false,
        "prohibitInput": false,
        "hintShow": false,
        "hintText": ""
      }
    },
    {
      c: 'identification_number',
      n: 'Nomor KTP',
      w: 100,
    },
    {
      c: 'passport_no',
      n: 'Nomor Paspor',
      w: 100,
    },
    {
      t: 'date',
      c: 'passport_expired_date',
      n: 'Tanggal Berakhir Paspor',
      w: 100,
    },
    {
      c: 'kitas_no',
      n: 'Nomor KITAS',
      w: 100,
    },
    {
      t: 'date',
      c: 'kitas_expired_date',
      n: 'Tanggal Berakhir KITAS',
      w: 100,
    },
    {
      c: 'most_used_lang',
      n: 'Bahasa',
      w: 100,
    },
    {
      c: 'phone_number',
      n: 'Nomor Handphone',
      w: 100,
    },
    {
      c: 'cellular_number',
      n: 'Nomor Telepon',
      w: 100,
    },
    {
      c: 'postal_code',
      n: 'Kode Pos',
      w: 100,
    },
    {
      c: 'sub_district',
      n: 'Kelurahan',
      w: 100,
    },
    {
      c: 'districts',
      n: 'Kecamatan',
      w: 100,
    },
    {
      c: 'city',
      n: 'Kota',
      w: 100,
    },
    {
      c: '_',
      n: 'Provinsi',
      w: 100,
      v: {
        "type": "dropdown",
        "type2": null,
        "value1": master.provinces.join(','),
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
      n: 'Negara',
      w: 100,
      v: {
        "type": "dropdown",
        "type2": null,
        "value1": master.countries.join(','),
        "value2": "",
        "checked": false,
        "remote": false,
        "prohibitInput": false,
        "hintShow": false,
        "hintText": ""
      }
    },
    {
      c: 'living_with',
      n: 'Tinggal Bersama',
      w: 100,
      v: {
        "type": "dropdown",
        "type2": null,
        "value1": livingWithData.join(','),
        "value2": "",
        "checked": false,
        "remote": false,
        "prohibitInput": false,
        "hintShow": false,
        "hintText": ""
      }
    },
    {
      c: 'distance_to_school',
      n: 'Jarak Ke Sekolah',
      w: 100,
    },
    {
      c: 'transport_to_school',
      n: 'Transportasi Ke Sekolah',
      w: 100,
      v: {
        "type": "dropdown",
        "type2": null,
        "value1": transportData.join(','),
        "value2": "",
        "checked": false,
        "remote": false,
        "prohibitInput": false,
        "hintShow": false,
        "hintText": ""
      }
    },
    {
      c: 'child_status',
      n: 'Status Anak',
      w: 100,
      v: {
        "type": "dropdown",
        "type2": null,
        "value1": childStatusData.join(','),
        "value2": "",
        "checked": false,
        "remote": false,
        "prohibitInput": false,
        "hintShow": false,
        "hintText": ""
      }
    },
  ];

  const totalRows = students.length + 1000;
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

    for (let j = 1; j < totalRows; j++) {

      // preallocation array size
      const value = j < arrStudentsLength ? students[j][columnName] : '';
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
    luckysheet_alternateformat_save: [],
    "filter_select": {
      // "left": 74,
      // "width": 73,
      // "top": 20,
      // "height": 19,
      // "left_move": 74,
      // "width_move": 369,
      // "top_move": 20,
      // "height_move": 119,
      "row": [0, totalRows],
      "column": [1, totalColumns - 1],
      // "row_focus": 1,
      // "column_focus": 1
    },
    luckysheet_select_save: [],
    dataVerification: studentValidations,
  }
}

export default sokratesSheetStudent;
