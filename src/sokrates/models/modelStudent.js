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
const getStudentColumns = (master) => {

  return [
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
        "prohibitInput": true,
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
        "prohibitInput": true,
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
        "prohibitInput": true,
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
        "value1": "NORMAL,TRANSFER",
        "value2": "",
        "checked": false,
        "remote": false,
        "prohibitInput": true,
        "hintShow": false,
        "hintText": ""
      }
    },
    {
      c: 'enroll_school_location_id',
      n: 'Nama Sekolah',
      w: 150,
      r: true,
      v: {
        "type": "dropdown",
        "type2": null,
        "value1": master.schools.names.join(','),
        "value2": "",
        "checked": false,
        "remote": false,
        "prohibitInput": true,
        "hintShow": false,
        "hintText": ""
      }
    },
    {
      c: 'enroll_school_level_id',
      n: 'Jenjang Pendidikan',
      w: 150,
      r: true,
      v: {
        "type": "dropdown",
        "type2": null,
        "value1": master.schoolLevels.names.join(','),
        "value2": "",
        "checked": false,
        "remote": false,
        "prohibitInput": true,
        "hintShow": false,
        "hintText": ""
      }
    },
    {
      c: 'enroll_year_level_id',
      n: 'Tingkat Sekolah',
      w: 150,
      r: true,
      v: {
        "type": "dropdown",
        "type2": null,
        "value1": master.yearLevels.names.join(','),
        "value2": "",
        "checked": false,
        "remote": false,
        "prohibitInput": true,
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
        "prohibitInput": true,
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
        "prohibitInput": true,
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
        "prohibitInput": true,
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
        "prohibitInput": true,
        "hintShow": false,
        "hintText": ""
      },
    },
    {
      c: 'religion_id',
      n: 'Agama',
      w: 100,
      // v: {
      //   "type": "dropdown",
      //   "type2": null,
      //   "value1": master.religions.names.join(','),
      //   "value2": "",
      //   "checked": false,
      //   "remote": false,
      //   "prohibitInput": true,
      //   "hintShow": false,
      //   "hintText": ""
      // }
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
      c: 'nationality_id',
      n: 'Kewarganegaraan',
      w: 100,
      v: {
        "type": "dropdown",
        "type2": null,
        "value1": master.nationalities.names.join(','),
        "value2": "",
        "checked": false,
        "remote": false,
        "prohibitInput": true,
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
      c: 'province_id',
      n: 'Provinsi',
      w: 100,
      v: {
        "type": "dropdown",
        "type2": null,
        "value1": master.provinces.names.join(','),
        "value2": "",
        "checked": false,
        "remote": false,
        "prohibitInput": true,
        "hintShow": false,
        "hintText": ""
      }
    },
    {
      c: 'country_id',
      n: 'Negara',
      w: 100,
      v: {
        "type": "dropdown",
        "type2": null,
        "value1": master.countries.names.join(','),
        "value2": "",
        "checked": false,
        "remote": false,
        "prohibitInput": true,
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
        "prohibitInput": true,
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
        "prohibitInput": true,
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
        "prohibitInput": true,
        "hintShow": false,
        "hintText": ""
      }
    },
    {
      c: 'student_id',
      n: 'student_id',
      w: 70,
    },
  ];
}
export default getStudentColumns;
