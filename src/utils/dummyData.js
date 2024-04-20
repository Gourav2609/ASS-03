export const generateDummyData = () => {
    const data = [];
    const currentDate = new Date();
  
    for (let i = 0; i < 100; i++) {
      const report = {
        id: i + 1,
        date: new Date(currentDate.getTime() - i * 24 * 60 * 60 * 1000), // Generating date in the past
        reportName: `Report ${i + 1}`,
      };
      data.push(report);
    }
  
    return data;
  };
  