const isWithinRange = (min: string | undefined, max: string | undefined, value: string | undefined): boolean => {
    if (!value) {
      return true;
    }
    if (min && +value < +min) {
      return false
    }
    if (max && +value > +max) {
      return false
    }
    return true;
  }

  export default isWithinRange;