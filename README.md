# TypeScript-DisplayImage
TypeScript语言显示路径图片
导入fs模块中的createReadStream函数，用于创建可读流。
导入readline模块中的createInterface函数，用于创建逐行读取接口。
导入canvas模块中的createCanvas和loadImage函数，用于创建画布和加载图片。
定义一个字符串常量imagePath，用于存储图片文件的路径（请将YOUR_IMAGE_FILE_PATH替换为实际的图片文件路径）。
使用createReadStream函数创建一个可读流，读取指定路径的图片文件。
使用createInterface函数创建一个逐行读取的接口，将可读流作为输入。
使用rl.on('line', async (line) => { ... })监听每一行的读取事件，使用async关键字定义异步的事件处理函数。
在事件处理函数中，使用createCanvas函数创建一个800x600像素的画布，并使用getContext('2d')获取2D绘图上下文。
使用loadImage函数异步加载当前行指定的图片，返回一个表示图片的对象。
使用context.drawImage(image, 0, 0)将加载的图片绘制到画布上，起始坐标为(0, 0)。
使用canvas.toDataURL()将画布内容转换为Data URL格式的字符串，表示图片的数据。
使用document.createElement('img')创建一个img元素。
将Data URL赋值给imgElement.src属性，将加载的图片数据作为img元素的源。
使用document.body.appendChild(imgElement)将img元素添加到文档的body中，以显示图片。
使用rl.on('error', (error) => { ... })监听错误事件，当出现错误时，输出错误信息到控制台。
使用rl.on('close', () => { ... })监听关闭事件，当读取完成时，输出完成信息到控制台。
