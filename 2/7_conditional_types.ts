const myFun = () => {
  return {
    a: 1,
    b: 3,
    doWork: (a: string) => 'test'
  }
}

type IMyFunRet = ReturnType<typeof myFun>;
const b: IMyFunRet = {
  a: 3,
  b: 3,
  doWork: (a) => a + 'asdfsdf',
}