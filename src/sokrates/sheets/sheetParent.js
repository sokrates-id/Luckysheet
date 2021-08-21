/**
 * c: nama column dari database
 * n: tampilan di user
 * w: panjang column
 * r: required apa engga
 */
const parentColumns = [
  {
    c: 'student_id',
    n: 'student_id',
    w: 70,
    r: true,
  },
  {
    c: 'nis',
    n: 'NIS',
    w: 70,
    r: true,
  },
  {
    c: 'student_name',
    n: 'Nama Lengkap Siswa',
    w: 200,
    r: true,
  },
  {
    c: 'parent_type',
    n: 'Orangtua',
    w: 150,
    r: true,
  },
  {
    c: '_',
    n: 'Nama Orangtua',
    w: 200,
    r: true,
  },
  {
    c: '_',
    n: 'Alamat Lengkap',
    w: 150,
    r: true,
  },
  {
    c: '_',
    n: 'Jenis Kelamin',
    w: 100,
    r: true,
  },
  {
    c: '_',
    n: 'Tempat Lahir',
    w: 150,
  },
  {
    c: '_',
    n: 'Tanggal Lahir',
    w: 150,
  },
  {
    c: '_',
    n: 'Agama',
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
    c: '_',
    n: 'Tanggal Berakhir KITAS',
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
    n: 'Email',
    w: 150,
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
    n: 'Perusahaan',
    w: 100,
  },
  {
    c: '_',
    n: 'Jabatan',
    w: 100,
  },
  {
    c: '_',
    n: 'Kisaran Gaji',
    w: 100,
  },
  {
    c: '_',
    n: 'Hubungan dengan Anak',
    w: 100,
  },
  {
    c: '_',
    n: 'Pendidikan Terakhir',
    w: 150,
  },
];

const parentHeaders = parentColumns.map((i, idx) => {
    return {
      r: 0,
      c: idx,
      v: {
        ct: {
          "fa": "General", "t": "g"
        },
        v: i.n,
        m: i.n,
        bg: i.r ? '#e35663' : 'white',
        fc: 'black',
        bl: 1,
      },
    }
  }
);

window.sokratesSheetParent = {
  "name": "Parent",
  "index": "Sheet_pdolzzie5xwi_1600927444447",
  celldata: [...parentHeaders],
  "row": 100,
  "column": parentColumns.length,
  "config": {
    "merge": {},
    "rowlen": {},
    "columnlen": $.extend({}, parentColumns.map(i => i.w ? i.w : 50)),
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
          "column": [0, parentHeaders.length - 1]
        }]
      }
    ],
    "authority": {}
  },
  "frozen": {
    type: 'rangeBoth',
    range: {row_focus: 0, column_focus: 2},
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
  "dataVerification": {
  }
}

// export default sokratesSheetStudent;
