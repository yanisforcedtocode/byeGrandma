const catchAsync = (fn) => {
  return async function () {
    try {
      return await fn.apply(this, arguments);
    } catch (err) {
      console.log(err);
    }
  };
};

export default catchAsync