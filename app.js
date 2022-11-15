const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, AlignmentType } = require('docx');

const doc = new Document({
  styles: {
    paragraphStyles: [],
  },
  sections: [
    {
      properties: {},
      children: [
        new Paragraph({
          children: [],
        }),
        new Paragraph({
          children: [],
        }),
        new Paragraph({
          children: [],
        }),
        new Paragraph({
          children: [],
        }),
        new Paragraph({
          children: [],
        }),
        new Paragraph({
          children: [],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: 'Ўзбекистон Республикасининг солиқ резидентлигини тасдиқловчи ҳужжат',
              bold: true,
              size: 28,
            }),
          ],
          spacing: {
            line: 276,
          },
        }),
        new Paragraph({
          children: [],
        }),
        new Paragraph({
          alignment: AlignmentType.JUSTIFIED,
          children: [
            new TextRun({
              text: '\tЎзбекистон Республикаси Давлат солиқ қўмитаси ALLMEDIA SAFE SERVICE МЧЖ, СТИР: 304424054, манзил: Тошкент шаҳар, Чилонзор тумани, 5 мавзеси, 25 уй, 50 хонадон, Ўзбекистон Республикаси Ҳукумати ва Россия Федерацияси ўртасида 1994 йил «2» мартда имзоланган даромаддан ва мулкдан олинадиган солиқларнинг икки ёқлама қўлланишининг олдини олиш тўғрисидаги Битим қоидаларига асосан, ҳақиқатдан ҳам 2022 йилда Ўзбекистон Республикасида доимий яшаш жойига эга бўлган шахс (солиқ резиденти) эканлигини тасдиқлайди. ',
              size: 28,
            }),
          ],
          spacing: {
            line: 276,
          },
        }),
        new Paragraph({
          children: [],
        }),
        new Paragraph({
          alignment: AlignmentType.JUSTIFIED,
          children: [
            new TextRun({
              text: '\tГувоҳнома Россия Федерацияси ваколатли органига тақдим этиш учун берилди.',
              size: 28,
            }),
          ],
          spacing: {
            line: 276,
          },
        }),
        new Paragraph({
          children: [],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: 'Tax Residency Certificate',
              bold: true,
              size: 28,
            }),
          ],
          spacing: {
            line: 276,
          },
        }),
        new Paragraph({
          children: [],
        }),
        new Paragraph({
          alignment: AlignmentType.JUSTIFIED,
          children: [
            new TextRun({
              text: '\tThe State Tax Committee of the Republic of Uzbekistan hereby certifies that LLC ALLMEDIA SAFE SERVICE, TIN 304424054, address Tashkent city, Chilonzor district, avenue 5, house 25, apartment 50, was/is deemed a tax resident of the Republic of Uzbekistan in the year 2022, for the purposes of the agreements between the Government of the Republic of Uzbekistan and the Russian Federation on the avoidance of double taxation on profits and income dated March 2, 1994.\n',
              size: 28,
            }),
          ],
          spacing: {
            line: 276,
          },
        }),
        new Paragraph({
          children: [],
        }),
        new Paragraph({
          alignment: AlignmentType.JUSTIFIED,
          children: [
            new TextRun({
              text: '\tThis certificate has been issued for submission to the competent authority of the Russian Federation.',
              size: 28,
            }),
          ],
          spacing: {
            line: 276,
          },
        }),
        new Paragraph({
          children: [],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: 'Документ, подтверждающий налоговое резидентство Республики Узбекистан',
              bold: true,
              size: 28,
            }),
          ],
          spacing: {
            line: 276,
          },
        }),
        new Paragraph({
          children: [],
        }),
        new Paragraph({
          alignment: AlignmentType.JUSTIFIED,
          children: [
            new TextRun({
              text: '\tГосударственный налоговый комитет Республики Узбекистан настоящим подтверждает, что ООО ALLMEDIA SAFE SERVICE, ИНН: 304424054, адрес: город Ташкент, Чиланзарский район, квартал 5, дом 25, квартира 50, действительно рассматривается в 2022 году как лицо с постоянным местопребыванием (налоговый резидент) в Республике Узбекистан, для целей применения норм Соглашения между Правительством Республики Узбекистан и Правительством Российской Федерации об избежании двойного налогообложения на прибыль и на доход от «2» марта 1994 года.',
              size: 28,
            }),
          ],
          spacing: {
            line: 276,
          },
        }),
        new Paragraph({
          children: [],
        }),
        new Paragraph({
          alignment: AlignmentType.JUSTIFIED,
          children: [
            new TextRun({
              text: '\tСертификат выдан для представления в компетентный орган Российской Федерации.',
              size: 28,
            }),
          ],
          spacing: {
            line: 276,
          },
        }),
        new Paragraph({
          children: [],
        }),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync('something.docx', buffer);
});
