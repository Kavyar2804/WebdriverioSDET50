import excel from 'exceljs'

describe('Excel', () => {
    
    it('Read data', async() => {
        const book = new excel.Workbook()
        await book.xlsx.readFile("C:/Users/User/Desktop/WebdriverioSDET50/data.xlsx")
        const sheet = book.getWorksheet('Sheet1')
      let data  = sheet.getRow(1).getCell(1).toString()
      console.log("**********" + data); 
    });

    it('writedata', async() => {
        const book = new excel.Workbook()

        //to write same worksheet
        //await book.xlsx.readFile("C:/Users/User/Desktop/WebdriverioSDET50/data.xlsx")
        //const sheet =  book.getWorksheet('Sheet1')
    
        //new worksheet
        const sheet = book.addWorksheet('Sheet3')
        sheet.addRow(1).getCell(1).value='SDET545'
        await book.xlsx.writeFile("C:/Users/User/Desktop/WebdriverioSDET50/data.xlsx")
        
    });
});