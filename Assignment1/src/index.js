const fs = require('fs')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile( fileName ,fileContent,error =>{
		if(error)
			console.log(error)
		console.log("My New File Created")
	})
}

const myFileReader = async (fileName) => {
	// write code heren
	// dont chnage function name
	await fs.readFile(fileName,{encoding:"utf-8"},(error,data)=>{
		console.log(data)
		console.log("File Read!")
	})
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(fileName,fileContent,error=>{
		// console.log(error)
		console.log("File Updated Successfully")
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName,error=>{
		if(error){
			console.log(error)
		}
		console.log("File Deleted Successfully")
	})
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }