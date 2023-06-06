

import { createReadStream } from 'fs';
import { createInterface } from 'readline';
import { createCanvas, loadImage } from 'canvas';

// 读取图片文件路径
const imagePath = 'YOUR_IMAGE_FILE_PATH';

// 创建可读流并创建逐行读取接口
const stream = createReadStream(imagePath);
const rl = createInterface({ input: stream });

// 逐行读取图片文件
rl.on('line', async (line) => {
  // 使用Canvas创建画布
  const canvas = createCanvas(800, 600);
  const context = canvas.getContext('2d');

  // 加载图片并绘制到画布上
  const image = await loadImage(line);
  context.drawImage(image, 0, 0);

  // 显示画布
  const imageDataURL = canvas.toDataURL();
  const imgElement = document.createElement('img');
  imgElement.src = imageDataURL;
  document.body.appendChild(imgElement);
});

// 错误处理
rl.on('error', (error) => {
  console.error('Error:', error);
});

// 完成读取
rl.on('close', () => {
  console.log('Image display completed.');
});
