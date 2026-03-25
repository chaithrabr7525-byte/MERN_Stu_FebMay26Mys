//intro to buffers in NodeJS
//A buffer stores raw bytes

const textBuffer = Buffer.from("B");//Here we creating a buffer directly from a string (Node)

//the value in the buffer is the encoded from the text
console.log("Buffer object:",textBuffer);
console.log("Buffer length in bytes :",textBuffer.length);
console.log("Byte at index 0:",textBuffer[0]);//check each of the byte
console.log("Byte at index 1:",textBuffer[1]);

//Each character is store intrenally as byte data
//For standard ASCII letters there will be a equivalent code
//Buffer stores numeric value between 0 to 255