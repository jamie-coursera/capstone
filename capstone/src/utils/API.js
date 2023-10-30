// The link provided "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js" is not providing the necessary data
// After then searching online, it seems that people have used this instead.

const seededRandom = seed => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
  
    return () => (s = s * a % m) / m;
  };
  
  const fetchAPI = date => {
    let result = [];
    let random = seededRandom(date.getDate());
  
    for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) result.push(i + ':00');
      if(random() < 0.5) result.push(i + ':30');
    }
  
    return result;
  };
  
  const submitAPI = formData => true;
  
  export {
    fetchAPI,
    submitAPI
  };