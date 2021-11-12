// const p1 = new Promise((resolve, reject) => {
//   let condition = false;
//   if (condition) {
//     resolve('data');
//   } else {
//     reject('error');
//   }
// });

// p1.then(res => {
//   console.log('res :>> ', res);
// }).catch(err => {
//   console.log('err :>> ', err);
// });



async function getData() {
  return Promise.resolve('data');
}

async function getMoreData(data) {
  return Promise.resolve(data + 'more data');
}

async function getAll() {
  const data = await getData();
  const moreData = await getMoreData(data);
  return `All the data: ${data}, ${moreData}`;
}

getAll().then((all) => {
  console.log('all :>> ', all);
})