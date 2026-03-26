//Allocation Buffers
const emptyBuffer = Buffer.alloc(8);
console.log("Contents of emptyBuffer:",emptyBuffer);
console.log("Allocated buffer bytes:",[...emptyBuffer]);

const textBuffer = Buffer.from([65,66,67]);
console.log("Buffer from byte array:",textBuffer);

//Buffer.write() writes text into the buffer
const buffer = Buffer.alloc(20);
const bytesWritten = buffer.write("Hello");//each char takes 1 byte of memory
console.log("Bytes written:",bytesWritten);

//Subarray
const fristSlice = buffer.subarray(3,5);
console.log("FirstSlice of bytes:",[...fristSlice]);

//decode the bytes into text:toString()
console.log("Decode firtSlice of buffer:",fristSlice.toString("utf8"));