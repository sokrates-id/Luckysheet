const childStatusData = [
  'Biological Child',
  'Foster Child',
  'Step Child'
];
const parentEducationData = [
  'None',
  'SD',
  'SMP',
  'SMA',
  'D3',
  'D4/S1',
  'S2',
  'S3'
];
const parentSalaryData = [
  '< Rp. 1.000.000',
  'Rp. 1.000.000 - Rp. 3.000.000',
  'Rp. 3.000.000 - Rp. 5.000.000',
  '> Rp. 5.000.000'
];

/**
 * t: tipe data, default string
 * c: nama column dari database
 * n: tampilan di user
 * w: panjang column
 * r: required apa engga
 * v: validasinya
 */
const getParentColumns = (master) => {
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
      c: 'parent_type',
      n: 'Orangtua',
      w: 150,
      r: true,
      v: {
        "type": "dropdown",
        "type2": null,
        "value1": "Father,Mother,Guardian",
        "value2": "",
        "checked": false,
        "remote": false,
        "prohibitInput": true,
        "hintShow": false,
        "hintText": ""
      }
    },
    {
      c: 'parent_name',
      n: 'Nama Orangtua',
      w: 200,
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
      w: 150,
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
      c: 'date_of_birth',
      t: 'date',
      n: 'Tanggal Lahir',
      w: 150,
    },
    {
      c: 'religion_id',
      n: 'Agama',
      w: 100,
      v: {
        "type": "dropdown",
        "type2": null,
        "value1": master.religions.names.join(','),
        "value2": "",
        "checked": false,
        "remote": false,
        "prohibitInput": true,
        "hintShow": false,
        "hintText": ""
      }
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
      c: 'passport_expired_date',
      t: 'date',
      n: 'Tanggal Berakhir Paspor',
      w: 100,
    },
    {
      c: 'kitas_no',
      n: 'Nomor KITAS',
      w: 100,
    },
    {
      c: 'kitas_expired_date',
      t: 'date',
      n: 'Tanggal Berakhir KITAS',
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
      c: 'email',
      n: 'Email',
      w: 150,
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
      c: 'employment_company',
      n: 'Perusahaan',
      w: 100,
    },
    {
      c: 'job_title',
      n: 'Jabatan',
      w: 100,
    },
    {
      c: 'salary_range',
      n: 'Kisaran Gaji',
      w: 100,
      v: {
        "type": "dropdown",
        "type2": null,
        "value1": parentSalaryData.join(','),
        "value2": "",
        "checked": false,
        "remote": false,
        "prohibitInput": true,
        "hintShow": false,
        "hintText": ""
      }
    },
    {
      c: 'relationship_to_student',
      n: 'Hubungan dengan Anak',
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
      c: 'last_education',
      n: 'Pendidikan Terakhir',
      w: 150,
      v: {
        "type": "dropdown",
        "type2": null,
        "value1": parentEducationData.join(','),
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
    {
      c: 'student_parent_id',
      n: 'student_parent_id',
      w: 70,
    },
  ];
}

export default getParentColumns;
