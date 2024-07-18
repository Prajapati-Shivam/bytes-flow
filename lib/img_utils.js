export function resultImage() {
  const imgArr = [
    'img1',
    'img2',
    'img3',
    'img4',
    'img5',
    'img6',
    'img7',
    'img8',
    'img9',
    'img10',
  ];
  const randomImg = imgArr[Math.floor(Math.random() * imgArr.length)];
  return `/assets/output_img/${randomImg}.jpg`;
}
