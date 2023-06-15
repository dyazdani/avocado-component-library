const isWithinRange = (min: number, max: number, number: number | string): boolean => {
    console.log(number)
    if (number === '') {
      true;
    }
    if (number > max || number < min) {
      return false
    } else {
      return true;
    }
  }

  export default isWithinRange;