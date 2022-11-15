const {myFileWriter, myFileUpdater, myFileReader, myFileDeleter} = require('./index')
myFileWriter("prajwal.txt","My First File created");
myFileReader("prajwal.txt")
myFileUpdater("prajwal.txt"," Added new content")
myFileReader("prajwal.txt")
myFileDeleter("prajwal.txt")