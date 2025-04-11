import { getOssUrl } from "../scripts/utils";

export const PHOTOS = [
  { name: "PXL_20240327_064431662.jpg" },
  { name: "PXL_20240327_065234605.jpg" },
  { name: "PXL_20240330_055106088.PORTRAIT.ORIGINAL.jpg" },
  { name: "PXL_20240106_073215767.jpg" },
  { name: "PXL_20240123_092542598.NIGHT.jpg" },
  { name: "PXL_20231021_090208828.jpg" },
  { name: "PXL_20230829_113843100.jpg" },
  { name: "PXL_20230830_034628071.jpg" },
  { name: "PXL_20230830_043854179.jpg" },
  { name: "PXL_20230830_065606627.jpg" },
  { name: "PXL_20230806_082919725.MP.jpg" },
  {
    name: "PXL_20230708_062738221.jpg",
    caption: "都给我学",
  },
  {
    name: "PXL_20230728_072312065.MP.jpg",
    caption: "都给我检查",
  },
  {
    name: "PXL_20230826_201633076.jpg",
    caption: "京都",
  },
  {
    name: "PXL_20230827_072226184.jpg",
    caption: "平等院",
  },
  {
    name: "PXL_20230827_072855602.jpg",
  },
  {
    name: "PXL_20230827_223719320.jpg",
    caption: "清水寺",
  },
  {
    name: "PXL_20230827_225029273.jpg",
  },
  {
    name: "PXL_20230827_234350747.jpg",
  },
  {
    name: "PXL_20230828_012544248.jpg",
  },
  {
    name: "PXL_20231111_070408281.jpg",
    caption: "接住你的笔。 --万神殿",
  },
].map((i) => {
  return {
    name: getOssUrl(i.name),
    caption: i.caption,
  };
});

export const PHOTOS_2024 = [
  { name: "DJI_20240428160010_0074_D.JPG" },
  { name: "DJI_20240428171513_0095_D.JPG" },
  { name: "DJI_20240428171532_0097_D.JPG" },
  { name: "DJI_20240502121122_0038_D.JPG" },
  { name: "DJI_20240509160852_0001_D.JPG" },
  { name: "DJI_20240529190404_0015_D.JPG" },
  { name: "DJI_20240623161415_0014_D.JPG" },
  { name: "DJI_20240706140205_0010_D.JPG" },
  { name: "DJI_20240706161704_0017_D.JPG" },
  { name: "DJI_20240706165714_0018_D.JPG" },
  { name: "DJI_20240802191958_0016_D.JPG" },
  { name: "DJI_20240814113806_0012_D.JPG" },
  { name: "DJI_20240814110544_0009_D.JPG" },
  { name: "DJI_20240814184157_0074_D.JPG" },
  { name: "DJI_20240814134429_0027_D.JPG" },
  {
    name: "DJI_20240926143510_0056_D.JPG",
  },
  {
    name: "DJI_20240926123030_0028_D.JPG",
  },
  {
    name: "DJI_20240926115136_0027_D.JPG",
  },
  {
    name: "DJI_20240926134504_0043_D.JPG",
  },
  {
    name: "DJI_20240926134212_0035_D.JPG",
  },
  {
    name: "DJI_20240926134352_0040_D.JPG",
  },
  {
    name: "DJI_20240926135057_0051_D.JPG",
  },
  {
    name: "DJI_20240926140854_0054_D.JPG",
  },
].map((i) => {
  return {
    name: getOssUrl(i.name),
  };
});