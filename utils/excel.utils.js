import XLSX from 'xlsx';

export const getExcelSheetData = (filePath, sheetName) => {
  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets[sheetName ?? workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json(worksheet);
};