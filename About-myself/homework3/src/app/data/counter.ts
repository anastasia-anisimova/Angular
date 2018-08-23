export function counter(endDat: number): string {
  const today = new Date().getTime();
  const restTime = new Date(endDat - today);

    if(endDat > today )
    {
       return    Math.round(Number(restTime)/86400000)
       + " days " + restTime.getUTCHours().toString() +
      " hours " + restTime.getUTCMinutes().toString()
        + " minutes " + restTime.getUTCSeconds().toString()
        + " second left in the summer";
    }
    else {
      return "Autumn :( ";
    }
}

